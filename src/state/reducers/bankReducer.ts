import { Action } from "../actions/index";
import { ActionType } from "../action-types/index";

const initialState = 0;

const reducer = (state: number = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.Deposit:
            return state + action.payload;
        case ActionType.Widthdraw:
            return state - action.payload;
        case ActionType.Bankrupt:
            return 0;
        default:
            return state;
    }
}

export default reducer;