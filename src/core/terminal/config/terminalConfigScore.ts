import { defineStore } from 'pinia'

/**
 * 终端配置状态存储
 */

export const useTerminalConfigScoreStore = defineStore("terminal-config-score",{
  state: () => ({
    //终端背景颜色
    background: "black",
    //是否显示提示
    showHint: true,
    //欢迎文本
    welcomeText: [] as string[],
  }),
  getters: {},
  //持久化
  persist: {
    key: "terminal-config-score",
    storage: window.localStorage,
    beforeRestore: (context) => {
      console.log("loading terminalConfigScore")
    },
    afterRestore: (context) => {
      console.log("loaded terminalConfigScore")
    },
  },
  actions: {
    setBackground(background: string) {
      if (!background) {
        return
      }
      this.background = background
    },
    /**
     * 设置或切换是否显示提示
     * @param hint 提示参数，"on"表示显示，"off"表示不显示，无参数表示切换状态
     * @returns 是否显示提示
     */
    setOrToggleShowHint(hint: string):boolean {
      //如果没有参数，切换显示状态
      if (!hint) {
        this.showHint = !this.showHint
        return this.showHint
      }
      //如果有参数，根据参数设置显示状态
      if (hint === "on"){
        this.showHint = true
      } else if (hint === "off"){
        this.showHint = false
      }
      return this.showHint
    },
    /**
     * 设置欢迎文本
     * @param welcomeText 欢迎文本
     * @param welcomeText
     */
    setWelcomeText(welcomeText: string[]) {
      this.welcomeText = welcomeText
    },
    reset() {
      this.$reset()
    }
  }
})

