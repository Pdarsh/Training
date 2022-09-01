import { ActionType } from "../Action-Types/index"

interface DepositAction {
    type: ActionType.DEPOSIT,
    payload: number
}

interface WithdrawAction {
    type: ActionType.WITHDRAW,
    payload: number
}

interface BankruptAction {
    type: ActionType.BANKRUPT
    payload?: number
}

export type Action = DepositAction | WithdrawAction | BankruptAction;