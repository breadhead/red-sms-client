import axios from 'axios'
import * as md5 from 'md5'
import * as nanoid from 'nanoid'

import RedSmsException from './RedSmsException'
import RedSmsResponse, { MessageResponse } from './RedSmsResponse'

const API_URL = 'https://cp.redsms.ru/api'

export default class RedSmsClient {

  constructor(
    private readonly login: string,
    private readonly apiKey: string,
  ) { }

  public async sendSms(from: string, to: string, text: string): Promise<RedSmsResponse> {
    const response = await this.post('message', {
      text,
      from: 'REDSMS.RU',
      to,
    })

    return {
      messages: (response.data.items as MessageResponse[])
    } as RedSmsResponse
  }

  private async post(suffix: string, data: any): Promise<any> {
    const ts = nanoid()
    const secret = md5(`${ts}${this.apiKey}`)

    try {
      const response = await axios.post(`${API_URL}/${suffix}`, data, {
        headers: {
          login: this.login,
          ts,
          secret,
        }
      })

      return response
    } catch (error) {
      throw new RedSmsException(
        error.response.status,
        error.response.data.error_message,
        error,
      )
    }
  }
}
