import { resultError, resultSuccess } from './_helper'
import type { MockMethod } from 'vite-plugin-mock'

const fakeUserList = [
  {
    id: 1,
    username: 'admin',
    realName: 'E Admin',
    password: '123456'
  }
]

export default [
  {
    url: '/api/user/login',
    method: 'post',
    timeout: 200,
    response: ({ body }) => {
      const { username, password } = body
      const user = fakeUserList.find((item) => item.username === username && password === item.password)

      if (!user) {
        return resultError('Incorrect account or password！')
      }

      return resultSuccess(user)
    }
  }
] as MockMethod[]
