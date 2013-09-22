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
