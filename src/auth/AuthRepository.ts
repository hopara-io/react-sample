import axios from 'axios'
import { ConfigKey, Config } from '../config/Config'

const getClientCredentials = () => {
  return {
    clientId: Config.get(ConfigKey.clientId),
    clientSecret: Config.get(ConfigKey.clientId),
  }
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
