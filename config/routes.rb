Rails.application.routes.draw do
  # For rails monitor
  mount HealthMonitor::Engine, at: '/'

  # For devise
  devise_for :users, skip: :registrations, controllers: {
    :confirmations => 'users/confirmations',
    :passwords => 'users/passwords'
  }
  devise_scope :user do
    patch "users/confirmation", to: "users/confirmations#confirm"
  end

  root to: 'home#index', as: :root
  get 'users/sign_up(/*path)' => 'home#non_login'
  get 'users/password(/*path)' => 'home#non_login'
  get 'objectives/candidates', to: 'objectives#index_candidates'
  put 'objective_orders', to: 'objective_orders#create_or_update'
  resources :objectives, only: %i[index show create update destroy] do
    post 'copy', to: 'objectives#create_copy'
  end
  get 'key_results/candidates', to: 'key_results#index_candidates'
  get 'key_results/tasks', to: 'key_results#index_tasks'
  resources :key_results, only: %i[index create update destroy] do
    get 'objective', to: 'key_results#show_objective'
  end
  resources :users, only: %i[create update destroy] do
    put 'restore', to: 'users#restore'
    put 'password', to: 'users#update_password'
    put 'current_organization_id', to: 'users#update_current_organization_id'
    put 'resend', to: 'users#resend'
  end
  resources :organizations, only: %i[show update]
  resources :okr_periods, only: %i[index create update destroy]
  get '*path', to: 'home#index'
end
