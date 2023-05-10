import React from 'react';
import { Template } from '../template/Template';
import {Hopara} from '@hopara/react';
import { AuthRepository } from '../auth/AuthRepository';
import sensorData from '../data/sensors.json';

const BasicApp = () => {
  const [accessToken, setAccessToken] = React.useState<string | null>(null)
  const sensors = [...sensorData]
  
  React.useEffect(() => {
    (async () => {
      if (accessToken) return
      const newAccessToken = await AuthRepository.getToken()
      setAccessToken(newAccessToken)
    })()
  }, [accessToken])

  return (
    <Template>
      <Hopara
        // change to your app name
        app="spaces"
        accessToken={accessToken}
        // you may want to change the DataLoaders and DataUpdaters to your own API
        dataLoaders={[{
          name: 'sensors',
          source: 'hopara',
          loader: () => sensors,
        }]}
        dataUpdaters={[{
          name: 'sensors',
          source: 'hopara',
          updater: (updatedRow: any) => {
            const rowIndex = sensors.findIndex((row) => row.sensor_id === updatedRow.sensor_id)
            sensors[rowIndex] = updatedRow
          },
        }]}
      />
    </Template>
  )
}
  
  export default BasicApp;
  