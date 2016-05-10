# local-events-project
#### *an aggregate of local tech events*
Using Rails and PostgreSQL

#### Code Climate
[![Code Climate](https://codeclimate.com/github/sparkbox/local-events-project/badges/gpa.svg)](https://codeclimate.com/github/sparkbox/local-events-project)

[![Test Coverage](https://codeclimate.com/github/sparkbox/local-events-project/badges/coverage.svg)](https://codeclimate.com/github/sparkbox/local-events-project/coverage)

[![Issue Count](https://codeclimate.com/github/sparkbox/local-events-project/badges/issue_count.svg)](https://codeclimate.com/github/sparkbox/local-events-project)

*Code Climate consolidates the results from a suite of static analysis tools into a single, real-time report, giving your team the information it needs to identify hotspots, evaluate new approaches, and improve code quality. Check out Code Climate's [getting started guide](https://docs.codeclimate.com/docs/getting-started-with-code-climate) for more information.*

#### Circle CI
[![Circle CI](https://circleci.com/gh/sparkbox/local-events-project.svg?style=svg)](https://circleci.com/gh/sparkbox/local-events-project)

*Circle CI is an automated testing tool designed to make our code better. This badge shows whether tests have passed or failed. Read more in Circle CI's [getting started guide](https://circleci.com/docs/getting-started/).*

## Development

### Quick Setup
1. Clone the repository
2. From the command line, run:
  - `$ bundle install`
  - `$ rake db:create`
  - `$ rake db:migrate`

### Testing
Run the Rails tests with:
```bash
$ rake
```

### Heroku Setup
This setup assumes you have a version of the app in a GitHub repository.

1. [Create a new app from the Heroku dashboard](https://dashboard.heroku.com/new)
2. Under the deploy section of the newly created app dashboard:
  - create a new pipeline
  - connect the app to github
3. Go to the new pipeline you just created:
  - enable review apps
  - enable automatic deployment from master branch

## Production

### Setup DNS with SSL on Heroku
1. [Add an alias record to your domain](https://support.dnsimple.com/articles/domain-apex-heroku/#point-using-alias) (we use DNSimple)
2. [Purchase an SSL certificate](https://dnsimple.com/ssl-certificates)
3. [Add the SSL cert to Heroku](https://devcenter.heroku.com/articles/ssl-endpoint#setting-up-ssl-on-heroku)
4. [configure the app to force ssl](https://robots.thoughtbot.com/ssl-for-rails-with-heroku-and-dnsimple#prepare-rails-app)

## License

&copy; 2016 Sparkbox Apprenticeship
