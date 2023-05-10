# react-embedded-sample-app
This repo is a sample react app which runs on top of the **Hopara React Components** - this is an application which simply allows you to try and use as reference to implement our react embedded components.

## Running the application

To set up and run sample application first you must have Node LTS v10 or greater and then install packages:

```shell
$ npm install
```

Then you should configure your development enviromnent with the **Hopara** environment variables

```shell
$ export HOPARA_CLIENT_ID="your-hopara-client-id"
$ export HOPARA_CLIENT_SECRET="your-hopara-client-secret"
```

or edit the `.env` file with your credential values

```text
REACT_APP_CLIENT_ID="your-hopara-client-id"
REACT_APP_CLIENT_SECRET="your-hopara-client-secret"
```

So you be able to start the app instance easily with the `start script`:

```shell
$ npm start
```

### Note:
For production environment we recommend to get the `access token` on the server side to keep your credetials safe.