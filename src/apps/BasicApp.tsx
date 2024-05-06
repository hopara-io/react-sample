import React from 'react';
import { Template } from '../template/Template';
import {Hopara} from '@hopara/react';
import { AuthRepository } from '../auth/AuthRepository';
import assetsData from '../data/assets.json';
import { DataLoader } from '../hopara/DataLoader';
import { Config, ConfigKey } from '../config/Config';

const BasicApp = () => {
  const [accessToken, setAccessToken] = React.useState<string | null>(null)
  
  // should be called in the backend in production
  React.useEffect(() => {
    (async () => {
      if (accessToken) return
      const newAccessToken = await AuthRepository.getToken()
      setAccessToken(newAccessToken)
    })()
  }, [accessToken])

  // change to your app id or set it in the .env file
  const appId = Config.get(ConfigKey.appId) || 'sample'
  const assets = [...assetsData]

  // you may want to change the DataLoaders to your own API
  const dataLoaders: DataLoader[] = [{
    name: 'assets_metrics',
    source: 'files',
    loader: async () => assets,
  }]

  return (
    <Template>
      <Hopara
        app={appId}
        accessToken={accessToken}
        dataLoaders={dataLoaders}
      />
    </Template>
  )
}
  
  export default BasicApp;
  