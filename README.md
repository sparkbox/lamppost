# local-events-project
#### *an aggregate of local tech events*
Using Rails and PostgreSQL

#### Code Climate
[![Code Climate](https://codeclimate.com/github/sparkbox/local-events-project/badges/gpa.svg)](https://codeclimate.com/github/sparkbox/local-events-project)

[![Test Coverage](https://codeclimate.com/github/sparkbox/local-events-project/badges/coverage.svg)](https://codeclimate.com/github/sparkbox/local-events-project/coverage)

[![Issue Count](https://codeclimate.com/github/sparkbox/local-events-project/badges/issue_count.svg)](https://codeclimate.com/github/sparkbox/local-events-project)

*Code Climate consolidates the results from a suite of static analysis tools into a single, real-time report, giving your team the information it needs to identify hotspots, evaluate new approaches, and improve code quality. Check out Code Climate's [getting started guide](https://docs.codeclimate.com/docs/getting-started-with-code-climate) for more information.*

#### Circle CI
[![CircleCI](https://circleci.com/gh/sparkbox/lamppost.svg?style=svg)](https://circleci.com/gh/sparkbox/lamppost)

*Circle CI is an automated testing tool designed to make our code better. This badge shows whether tests have passed or failed. Read more in Circle CI's [getting started guide](https://circleci.com/docs/getting-started/).*

## Development

### Quick Setup
1. Clone the repository
2. From the command line, run:
  - `$ bundle install`
  - `$ rake db:create`
  - `$ rake db:migrate`

### Rails Admin
This project uses Rails Admin for database entry. For local development, you'll need to set up your admin username and password. Copy `.env.example` to `.env` in the project root folder. Set the variables `ADMIN_USER` and `ADMIN_PASSWORD` to whatever you like. Those will be your admin credentials when developing locally. Note that the `.env` file can be used to set any environment variables locally, which can be very useful. You'll need to set the production environment variables separately.

### Testing
Run the Rails tests with:
```bash
$ rake
```

## Production

### Heroku Setup
This setup assumes you have a version of the app in a GitHub repository.

1. [Create a new app from the Heroku dashboard](https://dashboard.heroku.com/new)
2. Under the deploy section of the newly created app dashboard:
  - create a new pipeline
  - connect the app to github
3. Go to the new pipeline you just created:
  - enable review apps
  - enable automatic deployment from master branch

### Setup DNS with SSL on Heroku
1. [Add an alias record to your domain](https://support.dnsimple.com/articles/domain-apex-heroku/#point-using-alias) (we use DNSimple)
2. [Purchase an SSL certificate](https://dnsimple.com/ssl-certificates)
3. [Add the SSL cert to Heroku](https://devcenter.heroku.com/articles/ssl-endpoint#setting-up-ssl-on-heroku)
4. [configure the app to force ssl](https://robots.thoughtbot.com/ssl-for-rails-with-heroku-and-dnsimple#prepare-rails-app)

### Debugging
In production, [Rails doesn't send errors to stdout by default](https://devcenter.heroku.com/articles/logging#writing-to-your-log). To get those errors sent to the heroku log, `config/environments/development.rb` has been modified with `config.logger = Logger.new(STDOUT)`. With this configuration in place, use the heroku toolbelt to get runtime errors:
```bash
$ heroku logs --tail --app app-name
```
### Analytics
The standard Google analytics script is inlined at the bottom of the application markup. See [app/views/layouts/application.html.erb](https://github.com/sparkbox/lamppost/blob/master/app/views/layouts/appl ication.html.erb#L55). For the script to work in production, you will need to set an environment variable with the name `GA_KEY`.

## License

&copy; 2016 Sparkbox Apprenticeship
