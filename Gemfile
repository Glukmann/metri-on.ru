source 'https://rubygems.org'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '4.2.4'

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

# Use jquery as the JavaScript library
gem 'jquery-rails'
gem 'jquery-ui-rails'
# Turbolinks makes following links in your web application faster. Read more: https://github.com/rails/turbolinks
gem 'turbolinks'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.0'
# bundle exec rake doc:rails generates the API under doc/api.
gem 'sdoc', '~> 0.4.0', group: :doc

gem 'sprockets'
gem 'acts_as_list'
# Use ActiveAdmin
gem 'rails_admin_acts_as_list'
gem 'rails_admin', '~> 1.1.0'
gem 'paperclip'
gem 'ack_rails_admin_jcrop'
gem 'rails_admin_toggleable'
gem 'will_paginate', '~> 3.1.0'
# rich text editor

# Use Devise for authentication
gem 'devise'
gem 'devise-bootstrap-views'

# Authorization abilities
gem 'cancancan', '~> 1.10'

# Search Engine Optimization plugin
gem 'meta-tags'
gem 'sitemap_generator'
gem 'translit'

# Decorator
gem 'draper'

gem 'hstore_accessor'
gem 'haml'
gem 'ancestry'
gem 'rails_admin_nestable', '~> 0.3.2'

# Normalize AR attributes
gem 'attribute_normalizer'
gem 'attr_extras', '>= 3.2.0'

gem 'nokogiri'
gem 'translit'
gem 'russian', '~> 0.6.0'
gem 'enum_help'
gem 'wicked_pdf'
gem 'whenever', :require => false

gem 'dotenv-rails'
gem 'multi_xml'
gem 'numerizer'

gem 'sidetiq'
gem 'sidekiq'
gem 'redis'
gem 'redis-namespace'
gem 'geocoder'
gem 'rchardet'
gem 'fancybox2-rails', '~> 0.2.8'

group :development, :test do
  gem 'letter_opener'

  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'

  # Deploy features
  gem 'capistrano'
  gem 'capistrano-db-tasks', require: false
  gem 'capistrano-nginx-unicorn'
  gem 'capistrano-rails'
  gem 'capistrano-bundler'
  gem 'capistrano-rvm'
end

# Use unicorn as the app server
group :production do
  gem 'unicorn'
  gem 'unicorn-worker-killer'
end

group :development do
  gem 'web-console', '~> 2.0'
end