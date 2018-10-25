import nanoid from 'nanoid';
import axios from 'axios';
import md5 from 'md5';
export default class RedSmsClient {
  private readonly ts: string
  private readonly apiUrl: string
  private readonly secret: string

  constructor(
    private readonly login: string,
    private readonly apiKey: string,
  ) {
    this.ts = nanoid()
    this.apiUrl == 'https://cp.redsms.ru/api'
    this.secret = md5(`${this.ts}${this.apiKey}`)
  }

  public async send(from: string, to: string, text: string): Promise<void> {
    axios.post(`${this.apiUrl}/message`, {
      route: 'sms',
      text,
      from,
      to,
      phoneDelimeter: to,
      textDelimeter: to,
    }, {
      headers: {
        login: this.login,
        ts: this.ts,
        secret: this.secret,
      }
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    return
  }
}
