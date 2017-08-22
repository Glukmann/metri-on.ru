namespace :unicorn do
  %w{addworker delworker restart upgrade reload force-stop reopen-logs}.each do |command|
    desc "#{command} unicorn"
    task command do
      on roles(:app) do
        sudo "service unicorn_saturn #{command}"
      end
    end
  end
end