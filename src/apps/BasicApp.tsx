import React from 'react';
import { Template } from '../template/Template';
import {Hopara} from '@hopara/react';
import { AuthRepository } from '../auth/AuthRepository';
import sensorData from '../data/sensors.json';
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
  const sensors = [...sensorData]

  // you may want to change the DataLoaders to your own API
  const dataLoaders: DataLoader[] = [{
    name: 'sensors',
    source: 'hopara',
    loader: async () => sensors,
  }]

  // you may want to change the DataUpdaters to your own API
  const dataUpdaters: DataUpdater[] = [{
    name: 'sensors',
    source: 'hopara',
    updater: async (updatedRow: any) => {
      const rowIndex = sensors.findIndex((row) => row.sensor_id === updatedRow.sensor_id)
      sensors[rowIndex] = updatedRow
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
  