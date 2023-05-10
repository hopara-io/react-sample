// 
export enum ConfigKey {
  appName = 'REACT_APP_APP_NAME',
  clientId = 'REACT_APP_CLIENT_ID',
  clientSecret = 'REACT_APP_CLIENT_SECRET',
  clientEmail = 'REACT_APP_CLIENT_EMAIL',
  clientPassword = 'REACT_APP_CLIENT_PASSWORD',
}

export class Config {
  static get(key: ConfigKey): string | undefined {
    return process.env[key]
  }
}