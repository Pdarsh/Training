import { ActionType } from "../Action-Types/index"
import { Action } from "../Actions"

const initialState = 0;

const reducer = (state: number = initialState, action: Action): number => {

    const {type,payload} = action
  
    switch (type){    
        case ActionType.DEPOSIT:
            return state + payload;
        case ActionType.WITHDRAW:
            return state !==0? state - payload:state
        case ActionType.BANKRUPT:
            return 0;
        default:
            return state
    }
}

export default reducer