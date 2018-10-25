export interface MessageResponse {
  uuid: string
  to: string
}

export default interface RedSmsResponse {
  messages: MessageResponse[]
}
