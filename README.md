# react-sample
This repo demonstrates how to add Hopara visualizations to your React project. It's based on the
 [**Hopara React**](https://www.npmjs.com/package/@hopara/react) module.

## Requirements

* Node LTS v10 or greater.

## Running the application

1- Clone the project and install the node dependencies.

```shell
$ npm install
```

2- Configure the environment with the clientId and clientSecret provided by the Hopara support team.

```shell
$ export HOPARA_CLIENT_ID="your-hopara-client-id"
$ export HOPARA_CLIENT_SECRET="your-hopara-client-secret"
```

Alternatively, you can edit the `.env` file with your credential

```text
REACT_APP_CLIENT_ID="your-hopara-client-id"
REACT_APP_CLIENT_SECRET="your-hopara-client-secret"
```

> :warning: In production this call should take place safely on the back-end, this shared secret gives full control over your account.

3- Now you're ready to start the application:

```shell
$ npm start
```

## @hopara/react module
You can further customize the integration by changing the [@hopara/react](https://www.npmjs.com/package/@hopara/react) component props.

```tsx
<div className="HoparaEmbedded">
  <Hopara
    app="your-app-name"
    accessToken="your-access-token"
    dataLoaders={dataLoaders}
    dataUpdaters={dataUpdaters}
  />
</div>
```

Additional information on this component is available at [@hopara/react](https://www.npmjs.com/package/@hopara/react).


