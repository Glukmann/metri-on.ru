class RootController < ApplicationController
  def index
    @news = News.all
  end
end
