export interface result {
  code: string
  message: string
}

export interface ResultData<T = any> extends result {
  data: T
}

export interface LoginAPI {
  id: number
  username: string
  auth_token: string
}

export interface LoginParams {
  username: string
  password: string
}

