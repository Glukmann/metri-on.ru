json.extract! news, :id, :name, :user_id, :body, :created_at, :updated_at
json.url news_url(news, format: :json)
