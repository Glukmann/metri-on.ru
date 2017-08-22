# config valid only for current version of Capistrano
lock '3.4.0'

set :application, 'metri-on'
set :repo_url, 'https://github.com/Glukmann/metri-on.ru.git'
set :pty, true
set :ssh_options, { :forward_agent => true }

ask :branch, proc { `git rev-parse --abbrev-ref HEAD`.chomp }.call

set :keep_releases, 3

