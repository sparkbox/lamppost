## Development

### Quick Local Setup
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
#### Circle CI
[![CircleCI](https://circleci.com/gh/sparkbox/lamppost.svg?style=svg)](https://circleci.com/gh/sparkbox/lamppost)

*Circle CI is an automated testing tool designed to make our code better. This badge shows whether tests have passed or failed. Read more in Circle CI's [getting started guide](https://circleci.com/docs/getting-started/).*

#### Code Climate
[![Code Climate](https://codeclimate.com/github/sparkbox/local-events-project/badges/gpa.svg)](https://codeclimate.com/github/sparkbox/local-events-project)

[![Test Coverage](https://codeclimate.com/github/sparkbox/local-events-project/badges/coverage.svg)](https://codeclimate.com/github/sparkbox/local-events-project/coverage)

[![Issue Count](https://codeclimate.com/github/sparkbox/local-events-project/badges/issue_count.svg)](https://codeclimate.com/github/sparkbox/local-events-project)

*Code Climate consolidates the results from a suite of static analysis tools into a single, real-time report, giving your team the information it needs to identify hotspots, evaluate new approaches, and improve code quality. Check out Code Climate's [getting started guide](https://docs.codeclimate.com/docs/getting-started-with-code-climate) for more information.*

### Rails Admin
This project uses Rails Admin for database entry. For local development, you'll need to set up your admin username and password. Copy `.env.example` to `.env` in the project root folder. Set the variables `ADMIN_USER` and `ADMIN_PASSWORD` to whatever you like. Those will be your admin credentials when developing locally. Note that the `.env` file can be used to set any environment variables locally, which can be very useful. You'll need to set the production environment variables separately.
