# frozen_string_literal: true

Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      get '/games/new', to: 'games#new'
      post '/games/create', to: 'games#create'
      get '/games', to: 'games#index'
      post '/games/validate', to: 'games#validate'
    end
  end

  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
end
