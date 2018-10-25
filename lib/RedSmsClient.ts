export default class RedSmsClient {
  constructor(
    private readonly login: string,
    private readonly password: string,
  ) { }

  public async send(from: string, to: string, text: string): Promise<void> {
    await this.auth()

    // send sms

    return
  }

  private async auth(): Promise<void> {
    // auth
  }
}