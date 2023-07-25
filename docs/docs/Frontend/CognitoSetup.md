# How to setup Cognito - Amplify

[AWS official link](https://docs.amplify.aws/cli/start/install/#configure-the-amplify-cli)

## Getting Started

You have to already have user on our AWS console. For more information click [here](https://cresh-creativity-share.github.io/docs/docs/AWS/)

Next initialize amplify.

```bash
amplify init
```
This will help you get all the necessary environment variables.
Chose previous seted AWS profile.


After all this steps you have all necessary data related to your profile in aws-exports.js file

Next, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.