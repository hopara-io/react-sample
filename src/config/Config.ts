// 
export enum ConfigKey {
  clientId = 'REACT_APP_CLIENT_ID',
  clientSecret = 'REACT_APP_CLIENT_SECRET',
}

export class Config {
  static get(key: ConfigKey): string {
    const value = process.env[key]
    if (!value) {
      throw new Error(`Missing config variable: ${key}`)
    }
    return value
  }
}