import React from 'react';
import { Template } from '../template/Template';
import {Hopara} from '@hopara/react';
import { AuthRepository } from '../auth/AuthRepository';
import assetsData from '../data/assets.json';
import { DataLoader } from '../hopara/DataLoader';
import { DataUpdater } from '../hopara/DataUpdater';
import { Config, ConfigKey } from '../config/Config';

const BasicApp = () => {
  const [accessToken, setAccessToken] = React.useState<string | null>(null)
  
  React.useEffect(() => {
    (async () => {
      if (accessToken) return
      const newAccessToken = await AuthRepository.getToken()
      setAccessToken(newAccessToken)
    })()
  }, [accessToken])

  // change to your app name or set it in the .env file
  const appName = Config.get(ConfigKey.appName) || 'spaces'
  const assets = [...assetsData]

  // you may want to change the DataLoaders to your own API
  const dataLoaders: DataLoader[] = [{
    name: 'sensors',
    source: 'hopara',
    loader: async () => assets,
  }]

  // you may want to change the DataUpdaters to your own API
  const dataUpdaters: DataUpdater[] = [{
    name: 'sensors',
    source: 'hopara',
    updater: async (updatedRow: any) => {
      const rowIndex = assets.findIndex((row) => row.asset_id === updatedRow.asset_id)
      assets[rowIndex] = updatedRow
    },
  }]

  return (
    <Template>
      <Hopara
        app={appName}
        accessToken={accessToken}
        dataLoaders={dataLoaders}
        dataUpdaters={dataUpdaters}
      />
    </Template>
  )
}
  
  export default BasicApp;
  