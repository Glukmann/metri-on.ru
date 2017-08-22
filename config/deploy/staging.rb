USER = 'adwant'
SERVER = 'estvkus.ru'
APP_NAME = 'saturn'
APP_SRV = "#{USER}@#{SERVER}"

role :app, APP_SRV
role :web, APP_SRV
role :db,  APP_SRV

set :application, APP_NAME
set :deploy_to, "/home/#{USER}/sites/#{APP_NAME}"
set :linked_dirs, %w{bin log pids tmp/cache tmp/sockets vendor/bundle public/system public/assets public/ckeditor_assets}
set :linked_files, %w{config/database.yml config/unicorn.rb config/secrets.yml .env}

# ===== UNICORN && NGINX================
load 'lib/capistrano/tasks/production_deploy.rake'

# ===== CACHE ==========================
namespace :cache do
  desc 'Clear cache'
  task :clear do
    on roles(:web) do
      within release_path do
        with rails_env: fetch(:rails_env) do
          execute :rake, 'cache:clear'
        end
      end
    end
  end
end

namespace :assets do
  desc 'Copy assets with non digests'
  task :no_digest do
    on roles(:web) do
      within release_path do
        with rails_env: fetch(:rails_env) do
          execute :rake, 'assets:no_digest'
        end
      end
    end
  end
end

namespace :sitemap do
  desc 'Copy assets with non digests'
  task :refresh do
    on roles(:web) do
      within release_path do
        with rails_env: fetch(:rails_env) do
          execute :rake, 'sitemap:refresh'
        end
      end
    end
  end
end

namespace :deploy do
  before :compile_assets, 'cache:clear'
  after :compile_assets, 'assets:no_digest'
  after :compile_assets, 'sitemap:refresh'
  after :finishing, 'deploy:cleanup'
end

# ===== BUNDLER ============
set :bundle_binstubs, -> { shared_path.join('bin') }
set :bundle_gemfile, -> { release_path.join('Gemfile') }
set :bundle_path, -> { shared_path.join('bundle') }
set :bundle_without, []
set :bundle_flags, '--quiet'
set :bundle_env_variables, {}