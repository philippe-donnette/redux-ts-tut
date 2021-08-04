import { ActionType } from "../action-types/index";

interface DepositAction {
    type: ActionType.Deposit
    payload: number
}

interface WidthrawAction {
    type: ActionType.Widthdraw
    payload: number
}

interface BankruptAction {
    type: ActionType.Bankrupt
}

export type Action = DepositAction | WidthrawAction | BankruptAction;