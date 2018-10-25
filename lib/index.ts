import RedSmsClient from './RedSmsClient'

export default (login: string, password: string) =>
  new RedSmsClient(login, password)
