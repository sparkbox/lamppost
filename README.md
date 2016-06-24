# Lamppost
**An aggregate of local tech events**  
Built with Ruby on Rails, Sass, and PostgreSQL

[![CircleCI](https://circleci.com/gh/sparkbox/lamppost.svg?style=svg)](https://circleci.com/gh/sparkbox/lamppost) [![Code Climate](https://codeclimate.com/github/sparkbox/local-events-project/badges/gpa.svg)](https://codeclimate.com/github/sparkbox/local-events-project) [![Test Coverage](https://codeclimate.com/github/sparkbox/local-events-project/badges/coverage.svg)](https://codeclimate.com/github/sparkbox/local-events-project/coverage)

Lamppost is a project aimed at making tech events more accessible to the public. It's a consolidated listing that is simple to navigate and has a focus on content. Built on the idea that it could be easily replicated, we invite you (yes, you) to use this repository as a starting point and deploy a site for your own city. This README serves to help you get up and running with minimal fuss. Ready to setup a Lamppost for your own local dev scene? Read on.

## Setup Your Own Lamppost
We love [Heroku](https://www.heroku.com/) and recommend using it to deploy your Lamppost. To do that, follow the three steps below and you'll be up in two shakes.

1. Fork this repository to your own GitHub account.

2. Push this button.

  [![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

3. Fill out a few environment variables so Heroku can build your app. The following table outlines what you'll need.

| Variable Name  | Explanation |
| -------------  | ----------- |
| CITY           | The name of the city or area for this Lamppost |
| ADMIN_EMAIL    | The email for the event submissions and general contact  |
| ADMIN_USER     | The user name you choose to login to the administrative section of the site  |
| ADMIN_PASSWORD | The password for above |
| GA_KEY | (optional) Google Analytics key |

That's it! Login to your new Lamppost at `http://<your-app-name>.herokuapp.com/admin` and start adding events. You can further customize your deployment with a custom URL and other goodies by following the steps below.

### Keeping it Up to Date
You can keep your Lamppost installation up to date by syncing your fork with the upstream repo. To do so...

1. Clone your fork to your local machine.
```bash
git clone https://github.com/<your-github-user>/lamppost.git
```

2. Configure the upstream repo as a remote to your forked version.  
```bash
git remote add upstream https://github.com/sparkbox/lamppost.git
```
[Help](https://help.github.com/articles/configuring-a-remote-for-a-fork/)

3. When you want to update your Lamppost, sync it up.
```bash
git fetch upstream  
git checkout master
git merge upstream/master
git push
```
[Help](https://help.github.com/articles/syncing-a-fork/)

### Theming
Lamppost is theme-able.

### Application Errors and Debugging
The [Heroku Toolbelt](https://toolbelt.heroku.com/) is a great tool. Use it to view the application logs.
```bash
$ heroku logs --tail --app <app-name>
```
### Analytics
The standard Google analytics script is inlined at the bottom of the application markup. See [app/views/layouts/application.html.erb](https://github.com/sparkbox/lamppost/blob/master/app/views/layouts/application.html.erb#L55). For the script to work in production, you will need to set an environment variable with the name `GA_KEY`.

## Contributing
Contributions to this project are welcome and appreciated. Feel free to [file an issue](https://github.com/sparkbox/lamppost/issues) or, if you're feeling up to it, fork this repo and open a pull request. Bug fixes and feature requests are welcome. Is our documentation lacking? Spelling errors? We're all ears.

**Contributors**


#### License
&copy; 2016 Sparkbox Apprenticeship
