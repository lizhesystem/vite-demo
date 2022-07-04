import { defineStore } from 'pinia'
import { localGet } from '@/utils/util'
import * as types from '@/store/mutation-type'
import piniaPersist from "@/config/painaPersist";

export const GlobalStore = defineStore({
  id: 'GlobalState',
  state: () => ({
    token: localGet(types.ACCESS_TOKEN),
    userInfo: localGet(types.USER_INFO)
  }),
	getters:{},
	actions:{
		// set token
		setToken(token: string) {
			this.token = token;
		},
		// set userInfo
		setUserInfo(userInfo: any) {
			this.userInfo = userInfo;
		}
	},
	persist: piniaPersist("GlobalState")
})