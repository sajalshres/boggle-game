# frozen_string_literal: true

require 'test_helper'

class GameTest < ActiveSupport::TestCase

  def setup
    @game = Game.new
  end

  test 'new game attributes should be in correct state' do
    assert_nil @game.id
    assert_nil @game.user_name
    assert_nil @game.total_score
    assert_nil @game.words
    assert_not_nil @game.board
    assert_instance_of String, @game.board
  end

  test 'should not save game without total_score' do
    @game.user_name = 'test_user'
    assert_not @game.save, 'Saved the game without total_score'
  end

  test 'should not save game without user_name' do
    @game.total_score = 100
    assert_not @game.save, 'Save the game without user_name'
  end

  test '@game board attribute must be of 16 in length' do
    assert_same 16, @game.board.length
  end
end
