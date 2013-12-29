# Bollywood America Website

This app uses Middleman. To run locally:

1. `git clone`
2. `middleman`

To compile a build and deploy

1. `git clone`
2. `middleman build`
3. The `build` contains an index.html and some static assets. Put them on your favorite host or serve them up with a server of your choice!


# Deploy

To deploy, run `middleman deploy`. But you'll need a file called `secret.rb` in the root path of this repo that defined `ENV['DEPLOY_PASS']`. Priya and Mehul have this password. 

## Alternate Deploy

1. Download Filezilla (or your preferred FTP client)
1. Connect to `bollywoodamerica.net` with username: `bollywoo` and password: (get this from Priya or Mehul)
1. Upload build to the `public_html` folder

# CPanel

You can log in to the cPanal for more advanced editing at [www.bollywoodamerica.net/cpanel](www.bollywoodamerica.net/cpanel). Username: `bollywoo`, password: (get this from Priya or Mehul)
