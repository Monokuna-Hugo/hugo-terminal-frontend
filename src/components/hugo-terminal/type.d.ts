declare namespace HugoTerminal {
    /**
     * 输出状态
     */
    type OutputStatus = 'success' | 'error' | 'info' | 'warning' | 'system'
    /**
     * 输出类型
     */
    interface OutputType {
        type: "command" | "text" | "component"
        text?: string
        component?: any
        status?: OutputStatus
        props?: any
        collapsible?: boolean
        resultList?: OutputType[]
    }
    /**
     * 命令类型输出
     */
    interface CommandOutputType extends OutputType {
        type: "command"
        command: string
        resultList?: OutputType[]
    }
    /**
     * 文本类型输出
     */
    interface TextOutputType extends OutputType {
        type: "text"
        text: string
    }
    /**
     * 组件类型输出
     */
    interface ComponentOutputType extends OutputType {
        type: "component"
        component: any
        props?: any
    }
    /**
     * 命令输入类型
     */
    interface CommandInputType {
        command: string
        placeHolder?: string
    }
    /**
     * 终端类型
     */
    interface TerminalType {
        //清屏
        clear: () => void
        //立即输出
        onOutput: (output: OutputType) => void
        //立即输出文本
        onOutputText: (text: string) => void
        //写命令文本结果
        onOutputCommandText: (text: string) => void
        //写命令错误文本结果
        onOutputCommandErrorText: (text: string) => void
        //写命令正确文本结果
        onOutputCommandSuccessText: (text: string) => void
        //写命令结果
        onOutputCommandResult: (output: OutputType) => void
        //输入框聚焦
        onFocusInput: () => void
        //获取输入框聚焦状态
        getFocusInput: () => boolean
        //设置输入框值
        setInputValue: (value: string) => void
        //提交命令
        onSubmitCommand: (command: string) => void
        //查看下一条命令
        onViewNextCommand: () => void
        //查看上一条命令    
        onViewPreviousCommand: () => void
        //查看历史命令
        onViewHistoryCommand: () => CommandOutputType[]
        //折叠和展开块
        onCollapseExpandBlock: () => void
        //设置命令折叠状态
        setCommandCollapsible: (collapsible: boolean) => void
    }
}