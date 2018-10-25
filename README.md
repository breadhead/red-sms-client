# red-sms-client

> Sms client for [REDSMS](https://cp.redsms.ru/).

## Instalation

```bash
yarn add @breadhead/red-sms-client
```

## Usage

```js
import RedSmsClient from '@breadhead/red-sms-client';


const smsClient = new RedSmsClient(login, apiKey);
```

### Methods

+ [sendSms](#sendSms)

#### sendSms

```js
const from = 'My First StartUp';
const to = '+79999999999';
const text = 'Hello, World!';

const result = await smsClient.sendSms(from, to, text);
```

returns

```js
RedSmsResponse {
  messages: [
    {
      uuid: string,
      to: string,
    },
  ],
}
```

and throws

```js
RedSmsException {
  prev: Error
  message: string
}
```
