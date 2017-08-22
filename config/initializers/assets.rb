# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

require_relative '../../lib/assets/selective_assets_compressor'
Rails.application.config.assets.js_compressor = SelectiveAssetsCompressor.new

folders = %w( package/ active_admin.css ckeditor/* fonts/ )

Rails.application.config.assets.precompile << Proc.new do |path|
  folders.any? do |path_part|
    path.start_with?(path_part)
  end
end
