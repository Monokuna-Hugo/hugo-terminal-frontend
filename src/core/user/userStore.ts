import { defineStore } from 'pinia'
import { getLoginUser} from './useApi'
import { LOCAL_USER} from "./userConstant"
import UserType = User.UserType

/**
 * 用户系统
 */
export const useUserStore = defineStore("user",{
  state: () => ({
    loginUser: {
      ...LOCAL_USER,
    }
  }),
  getters: {},
  persist: {
    key: "user-store",
    storage: window.localStorage,
    beforeRestore: (context) => {
      console.log("loading userScore")
    },
    afterRestore: (context) => {
      console.log("loaded userScore")
    },
  },
  actions: {
    async getAndSetLoginUser() {
      const res = await getLoginUser()
      if (res?.code === 0 && res?.data){
        this.loginUser = res.data
      } else {
        console.error("获取用户失败");
        this.$reset();
      }
    },
    setLoginUser(user: UserType) {
      this.loginUser = user
    }
  }
})
