# local-events-project
#### *an aggregate of local tech events*
Using Rails and PostgreSQL

#### Code Climate

#### Circle CI
[![Circle CI](https://circleci.com/gh/sparkbox/local-events-project.svg?style=svg)](https://circleci.com/gh/sparkbox/local-events-project)

## Development

### Quick Setup
1. Clone the repository
2. From the command line, run:
  - `$ bundle install`
  - `$ rake db:create`
  - `$ rake db:migrate`

### Heroku Setup
This setup assumes you have a version of the app in a GitHub repository.
1. [crete a new app from the dashboard at Heroku](https://dashboard.heroku.com/new)
2. Under the the deploy section of the newly created app dashboard do:
  - create a new pipeline
  - and connect the app to github
3. Go to the new pipeline you just created and:
  - enable review apps
  - enable automatic deployment from master brach

## Production

### Setup DNS with SSL on Heroku
1. [add and alias record to your domain name](https://support.dnsimple.com/articles/domain-apex-heroku/#point-using-alias) (we use DNSimple)
2. [purchase an SSL certificate](https://dnsimple.com/ssl-certificates)
3. [add SSL cert to Heroku](https://devcenter.heroku.com/articles/ssl-endpoint#setting-up-ssl-on-heroku)
4. [configure the Rails app](https://robots.thoughtbot.com/ssl-for-rails-with-heroku-and-dnsimple#prepare-rails-app)

## License

&copy; 2016 Sparkbox Apprenticeship
