ruby "~> 2.4.2"

source 'https://rubygems.org'

gem 'travis-web', path: 'waiter'
gem 'puma'
gem 'rack-ssl', '~> 1.3'
gem 'rack-protection', '~> 1.5', '>= 1.5.4'
gem 'rack-mobile-detect'
gem 'sinatra', '>= 2.0.0'
gem 'hashr'

group :development, :test do
  gem 'rake'
end


group :development do
  # gem 'debugger'
  gem 'foreman'
end

group :test do
  gem 'rspec', '~> 2.11'
  gem 'sinatra-contrib', '>= 2.0.0'
end
