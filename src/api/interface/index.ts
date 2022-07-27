export interface result {
  code: string
  message: string
}

export interface ResultData<T = any> extends result {
  data: T
}

// 分页
export interface Page<T> {
  data: T[]
  pageNum: number
  pageSize: number
  total: number
}

// 登录相关
export namespace Login {
  export interface LoginAPI {
    token: string
  }

  export interface LoginParams {
    username: string
    password: string
  }
}

export interface sysDict {
  createBy: string
  createTime: string
  updateBy: string
  updateTime: string
  params: string
  id: number
  groupName: string
  groupCode: string
  itemName: string
  itemValue: string
  itemDesc: string
}
