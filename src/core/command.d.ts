import { ParsedOptions} from 'getopts'
import TerminalType  = HugoTerminal.TerminalType

/**
 * 命令类型
 */
interface CommandType {
    func: string
    name: string
    desc?: string
    alias?: string[]
    params?: CommandParamType[]
    options?: CommandOptionType[]
    subCommands?: Record<string, CommandType>
    action: (
        terminal: TerminalType,
        parentCommand: CommandInputType,
        options: ParsedOptions,
    ) => void
    collapsible?: boolean
}

/**
 * 命令参数类型
 */
interface CommandParamType {
    key: string
    desc?: string
    required?: boolean
    defaultValue?: string | boolean
}

/**
 * 命令选项类型
 */
interface CommandOptionType {
    key: string
    alias?: string[]
    desc?: string
    type?: "string" | "boolean"
    required?: boolean
    defaultValue?: string | boolean
}
