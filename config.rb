require './secret.rb' if File.exist?('secret.rb')
set :css_dir, 'stylesheets'

set :js_dir, 'javascripts'

# set :images_dir, 'images'

# Build-specific configuration
configure :build do
  # For example, change the Compass output style for deployment
  # activate :minify_css

  # Minify Javascript on build
  activate :minify_javascript

  # Use relative URLs
  activate :relative_assets

  # favicon
  activate :favicon_maker

end

activate :deploy do |deploy|
  deploy.method       = :ftp
  deploy.host         = "bollywoodamerica.net"
  deploy.path         = "/public_html/"
  deploy.user         = "bollywoo"
  deploy.password     = ENV['DEPLOY_PASS']
  # deploy.build_before = true
end