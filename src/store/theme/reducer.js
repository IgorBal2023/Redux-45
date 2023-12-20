import {CHANGE_THEME} from "./actions"

// это наш reducer
export const themeReducer = (state = "light", action) =>{
    switch(action.type){
        case CHANGE_THEME:
            return action.payload;
            default:
                return state;
    }
}