# Lamp Post
**An aggregate of local tech events**  
Built with Ruby on Rails, Sass, and PostgreSQL

[![CircleCI](https://circleci.com/gh/sparkbox/lamppost.svg?style=svg)](https://circleci.com/gh/sparkbox/lamppost) [![Code Climate](https://codeclimate.com/github/sparkbox/local-events-project/badges/gpa.svg)](https://codeclimate.com/github/sparkbox/local-events-project) [![Test Coverage](https://codeclimate.com/github/sparkbox/local-events-project/badges/coverage.svg)](https://codeclimate.com/github/sparkbox/local-events-project/coverage)

Lamp Post is a project aimed at making tech events more accessible to the public. It's a consolidated listing that is simple to navigate and has a focus on content. Built on the idea that it could be easily replicated, we invite you (yes, you) to use this repository as a starting point and deploy a site for your own city. This README serves to help you get up and running with minimal fuss.

*Efforts to make Lamp Post more usable by the community are underway. Setup instructions below will change as the app becomes more generic and customizable.*

Ready to setup a Lamp Post for your own local dev scene? Read on.

## Setup Your Own Lamp Post
We love [Heroku](https://www.heroku.com/) and recommend using it to deploy your Lamp Post. To do that, follow the three steps below and you'll be up in two shakes.

1. Fork this repository to your own GitHub account.

2. Push this button.

  [![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

3. Fill out a few environment variables so Heroku can build your app. The following table outlines what you'll need.

| Variable Name  | Explanation |
| -------------  | ----------- |
| CITY | The name of the city or area for this Lamp Post |
| ADMIN_EMAIL | The email for the event submissions and general contact  |
| ADMIN_USER | The user name you choose to login to the administrative section of the site  |
| ADMIN_PASSWORD | The password for above |
| GA_KEY | (optional) Google Analytics key |

Login to your new Lamp Post at `http://<your-app-name>.herokuapp.com/admin` and start adding events. You can further customize your deployment with a custom URL and other goodies by following the steps below.

## Customize It
### Theming
Lamp Post can be customized with the color of your choice. We have included the default Dark theme, along with an optional Light theme. Head into `app/assets/stylesheets/base/_theme.scss` to edit the colors of your own Lamp Post.

### Fonts
Lamp Post uses the [Gotham](http://www.typography.com/fonts/gotham/webfonts/) webfont, available for purchase from [typography.com](http://www.typography.com/). If you want to use a free font, we suggest a sans-serif system font stack. You can edit the `font-family` mixin:
```scss
/*
  File to edit:
  app/assets/stylesheets/base/_mixins.scss */

@mixin font-family($weight) {
  font-family: Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: $weight;
}
```

### Setup DNS & SSL
Lamp Post is configured to force [SSL (https)](https://support.google.com/webmasters/answer/6073543?hl=en). This can be overridden if need be (see below). To setup SSL with DNSimple:

1. [Add an alias record to your domain](https://support.dnsimple.com/articles/domain-apex-heroku/#point-using-alias) (we use DNSimple)
2. [Purchase an SSL certificate](https://dnsimple.com/ssl-certificates)
3. [Add the SSL cert to Heroku](https://devcenter.heroku.com/articles/ssl-endpoint#setting-up-ssl-on-heroku)

If you wish to serve your app over regular old http, you will need to change the configuration:
```ruby
# File to edit:
# config/environments/production.rb

config.force_ssl = false
```

### Application Errors and Debugging
The [Heroku Toolbelt](https://toolbelt.heroku.com/) is a great tool. Use it to view the application logs.
```bash
$ heroku logs --tail --app <app-name>
```
### Analytics
The standard Google Analytics script is inlined at the bottom of the application markup. See [app/views/layouts/application.html.erb](https://github.com/sparkbox/lamppost/blob/master/app/views/layouts/application.html.erb). For the script to work in production, you will need to set an environment variable with the name `GA_KEY`. You can use the Heroku toolbelt to do this. From your project directory:
```bash
$ heroku config:set GA_KEY=your-google-analytics-key
```

## Contributing
Contributions to this project are welcome and appreciated. Feel free to [file an issue](https://github.com/sparkbox/lamppost/issues) or, if you're feeling up to it, fork this repo and open a pull request. Bug fixes and feature requests are welcome. Is our documentation lacking? Spelling errors? We're all ears.

#### License
&copy; 2016 Sparkbox Apprenticeship
