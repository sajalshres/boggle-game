# frozen_string_literal: true

class Api::V1::GamesController < ApplicationController
  # Get /games/new
  def new
    @game = Game.new
    render json: @game
  end

  # GET /games
  def index
    @games = Game.all
    render json: @games
  end

  # GET /games/:id
  def show
    @game = Game.find(params[:id])
    render json: @game
  end

  # POST /games
  def create
    @game = Game.new(game_params)
    if @game.save
      render json: @game
    else
      render error: { error: 'Unable to create game.' }, status: 400
    end
  end

  # POST /validate
  def validate
    word = validate_params
    @is_valid = DICTIONARY.include?(word)
    render json: @is_valid
  end

  private

  def validate_params
    params.require(:word)
  end

  def game_params
    params.require(:game).permit(:board, :user_name, :total_score, :words)
  end
end
