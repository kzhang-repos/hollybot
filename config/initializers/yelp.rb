require 'yelp'

Yelp.client.configure do |config|
  config.consumer_key = Rails.application.secrets[:yelp][:consumer_key]
  config.consumer_secret = Rails.application.secrets[:yelp][:consumer_secret]
  config.token = Rails.application.secrets[:yelp][:token]
  config.token_secret = Rails.application.secrets[:yelp][:token_secret]
end