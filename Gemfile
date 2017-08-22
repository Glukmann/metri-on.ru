source 'https://rubygems.org'


# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '4.2.8'
# Use sqlite3 as the database for Active Record
gem 'sqlite3'
# Use SCSS for stylesheets
gem 'sass-rails', '~> 5.0'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# Use CoffeeScript for .coffee assets and views
gem 'coffee-rails', '~> 4.1.0'
# See https://github.com/rails/execjs#readme for more supported runtimes
# gem 'therubyracer', platforms: :ruby

# Bootstrap framework
gem 'bootstrap-sass', '~> 3.2.0'
gem 'momentjs-rails', '>= 2.9.0'
gem 'autoprefixer-rails'

# Use ActiveAdmin
gem 'rails_admin', '~> 1.1.0'
gem 'paperclip'
gem 'ack_rails_admin_jcrop'
gem 'rails_admin_toggleable'
gem 'will_paginate', '~> 3.1.0'

# Use jquery as the JavaScript library
gem 'jquery-rails'
# Turbolinks makes following links in your web application faster. Read more: https://github.com/rails/turbolinks
gem 'turbolinks'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.0'
# bundle exec rake doc:rails generates the API under doc/api.
gem 'sdoc', '~> 0.4.0', group: :doc

# Use Devise for authentication
gem 'devise'
gem 'devise-bootstrap-views'

# Authorization abilities
gem 'cancancan', '~> 1.10'

# Normalize AR attributes
gem 'attribute_normalizer'
gem 'attr_extras', '>= 3.2.0'

# Bootstrap framework
gem 'bootstrap-sass', '~> 3.2.0'
gem 'momentjs-rails', '>= 2.9.0'
gem 'bootstrap3-datetimepicker-rails', '~> 4.14.30'
gem 'bootstrap-typeahead-rails'
gem 'autoprefixer-rails'
gem 'haml', '~> 4.0.5'
gem 'font-awesome-rails'


# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# Use Unicorn as the app server
# gem 'unicorn'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

gem 'russian', '~> 0.6.0'

group :development, :test do
  gem 'letter_opener'

  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'

  # Rspec
  gem 'rspec-rails', '~> 3.0'
  gem 'rspec-given'
  gem 'factory_girl_rails'
  gem 'shoulda-matchers'
  gem 'json_spec'
  gem 'simplecov', :require => false
  gem 'byebug'

  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug'

# Deploy features
  gem 'capistrano'
  gem 'capistrano-db-tasks', require: false
  gem 'capistrano-nginx-unicorn'
  gem 'capistrano-rails'
  gem 'capistrano-bundler'
  gem 'capistrano-rvm'
  # gem 'sshkit-sudo'
end

group :development do
  # Access an IRB console on exception pages or by using <%= console %> in views
  gem 'web-console', '~> 2.0'

  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
end


group :production do
  gem 'unicorn'
  gem 'unicorn-worker-killer'
end
