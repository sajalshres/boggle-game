# frozen_string_literal: true

require 'test_helper'

class Api::V1::GamesControllerTest < ActionDispatch::IntegrationTest
  test 'should get all list of games' do
    get '/api/v1/games'
    assert_response :success
  end

  test 'should get new game' do
    get '/api/v1/games/new'
    assert_response :success
  end

  test 'should create a new game' do
    sample_data = {
      'game' => {
        'user_name' => 'sample_user',
        'total_score' => 20,
        'words' => 'Hello Ruby'
      }
    }
    post '/api/v1/games/create', params: sample_data
    assert_response :success
  end

  test 'should validate a valid word' do
    valid_word = {
      'word' => 'hello'
    }
    post '/api/v1/games/validate', params: valid_word
    assert_response :success
    assert_equal 'true', @response.body
  end

  test 'should invalidate a invalid word' do
    invalid_word = {
      'word' => 'not_exist'
    }
    post '/api/v1/games/validate', params: invalid_word
    assert_response :success
    assert_equal 'false', @response.body
  end
end
