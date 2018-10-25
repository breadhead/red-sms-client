export default class RedSmsException extends Error {
  public readonly prev: any

  constructor(code: number, message: string, e: any) {
    super(`${code}: ${message}`)

    this.prev = e
  }
}
