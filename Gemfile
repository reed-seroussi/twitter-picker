source 'https://rubygems.org'
ruby "2.1.2"

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '4.1.5'
# Use SCSS for stylesheets
gem 'sass-rails', '4.0.2'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# Use CoffeeScript for .js.coffee assets and views
gem 'coffee-rails', '~> 4.0.0'
# See https://github.com/sstephenson/execjs#readme for more supported runtimes
# gem 'therubyracer',  platforms: :ruby

# Use jquery as the JavaScript library
gem 'jquery-rails'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.0'
# bundle exec rake doc:rails generates the API under doc/api.
gem 'sdoc', '~> 0.4.0',          group: :doc

# Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
gem 'spring',        group: :development

# Login with twitter
gem 'omniauth-twitter'
gem 'figaro'
gem 'oauth'

# Tweet with twitter gem
gem 'twitter'

# Visualize model relationships
gem 'railroady'

# Easily incorporate font-awesome into styling
gem 'font-awesome-rails'

# Charts for analytics
gem 'chartkick'
gem 'groupdate'

# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# Use unicorn as the app server
# gem 'unicorn'
gem 'thin'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

# Use debugger
# gem 'debugger', group: [:development, :test]

group :test, :development do
  gem "rspec-rails"
  gem "capybara"
  gem "selenium-webdriver"
  gem "better_errors"
  gem "sprockets_better_errors"
  gem "binding_of_caller"
  gem "factory_girl_rails"
  gem "simplecov"
  gem "database_cleaner"
  gem "sqlite3"
  gem "pry"
  gem "guard-rspec", require: false
end

group :production do
  gem "pg", "0.17.1"
  gem "google-analytics-rails", "0.0.6"
  gem "rails_12factor", "0.0.2"
end

gem "bootstrap-sass", "~> 3.1.1"