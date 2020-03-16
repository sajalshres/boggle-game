# frozen_string_literal: true

class Game < ApplicationRecord
  validates :total_score, presence: true
  validates :user_name, presence: true
  validates :words, presence: false
  
  def initialize(*args)
    super(*args)
    self.board = generate_board
  end

  def generate_board
    cubes = STANDARD_CUBES.shuffle
    boggle_size = 4
    board = []
    (0..((boggle_size * boggle_size) - 1)).each do |i|
      board.append((cubes[i][(rand * 6).floor]))
    end

    board.join('')
  end
end
