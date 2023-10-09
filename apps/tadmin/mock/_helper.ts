function resultSuccess<T = Record<string, any>>(data: T, message = 'ok') {
  return {
    data,
    code: 0,
    message,
    timestamp: new Date().getTime()
  }
}

function resultError(message = 'Request failed', code = 500, data = null) {
  return {
    data,
    code,
    message,
    timestamp: new Date().getTime()
  }
}

function getRequestToken({ headers }: Recordable): string | undefined {
  return headers?.authorization
}

export { getRequestToken, resultError, resultSuccess }
