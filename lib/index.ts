import RedSmsClient from './RedSmsClient'

export default (login: string, apiKey: string) =>
  new RedSmsClient(login, apiKey)
