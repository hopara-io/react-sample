import axios from 'axios'
import { ConfigKey, Config } from '../config/Config'

const getClientCredentials = () => {
  const credentials = {
    clientId: Config.get(ConfigKey.clientId),
    clientSecret: Config.get(ConfigKey.clientId),
  }

  if (!credentials.clientId) {
    throw new Error('Missing client id')
  } else if (!credentials.clientSecret) {
    throw new Error('Missing client secret')
  }

  return credentials
}

export class AuthRepository {
  static getToken = async () => {
    const resp = await axios({
      method: 'POST',
      url: 'https://auth.hopara.app/token',
      data: getClientCredentials()
    })
    
    return resp.data.access_token
  }
}
