Rails.application.routes.draw do

  root 'pages#home'

  get 'ask_holly', to: 'application#ask_holly'

  get 'get_restaurants', to: 'application#get_restaurants'

  get 'contact', to: 'application#contact'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
