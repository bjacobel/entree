### Todo

- Configuring project information (like domain, name and analytics/error logging IDs) in `./config.js`.
- Pushing your repo to GitHub. (Public and private repos are supported.)
- Setting up [GitHub Actions](https://github.com/features/actions) for your repo.
  - Add your `AWS_ACCESS_TOKEN_ID` and `AWS_SECRET_ACCESS_TOKEN` to the Secrets for your repo at `https://github.com/[username]/[repo]/settings/secrets`
  - Also add other optional environment variables, like `SENTRY_AUTH_TOKEN` for deploy tracking and sourcemap support in Sentry.
- Removing or modifying the example components and services to do... whatever your new app does.

### Development

The offline-caching service worker doesn't play nicely with HMR or webpack-dev-werver, so it's disabled by default. To enable it, you can either build the site in production mode, or use the `SW_ENABLE` environment variable:

    SW_ENABLE=true yarn webpack

You should see `LOG from GenerateSW` in the output. Don't use this option with WDS (`yarn start`); you'll kill your browser.

When building flat files locally, its important to serve them with a server that implements a correct 404 redirection behavior. Use:

    npx http-server dist -a localhost --proxy http://localhost:8080\?

### Deployment

entree includes a CloudFormation template that can create & configure all the AWS resources it needs. You'll want to create the CloudFormation stack before you push to your master branch for the first time. To do that:

1. Add AWS configuration to your environment. See the AWS doc on [configuring the command-line interface](http://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html).
2. Add project configuration to `./config.js`, including the name of your project and the domain it'll live at.
3. Build your CloudFormation stack with `yarn deploy-utils launch`.

CloudFormation will create the following resources:

- an S3 bucket to host static files
- a CloudFront distribution to serve as a CDN
- an AWS Certificate Manager SSL certificate, so the site can be served over HTTPS
- A Route53 hosted domain, which contains DNS routes for your domain
- A Route53 DNS record for your site
- Another Route53 DNS record for www.<yoursite>, if your site sits at a domain apex

This will take about 30 minutes. While it's going, leaving the `yarn deploy-utils launch` process running will tail CloudFormation events to your console. You can also log into the [AWS Management Console](https://console.aws.amazon.com/cloudformation/home#/stacks?filter=active) to track the progress of your stack.

Once it's reached the `CREATE_COMPLETE` status:

1. Get the nameservers (`ns-xxx.awsdns-xxx.tld`) for your new Route53 hosted zone, and point your domain to these nameservers in your registrar's DNS console. These changes may take a while to take effect.
2. Push or merge your code to the `master` branch. GitHub Actions will test, lint, bundle and deploy your code to S3, and you should see it at your domain shortly.

### Thanks to

- all the developers of all the awesome code and systems entree is built on
- [Simon Mettler](https://thenounproject.com/search/?q=rocket&i=113198) from the [Noun Project](https://thenounproject.com/search/?q=rocket&i=113198)
