import { FETCH_USER } from "../actions/types";

export default function(state = null, action) {
    // console.log(action);
    switch(action.type) {
        case FETCH_USER:
            // if(!action.payload) { 
            //     return state;
            // }
            return action.payload || false
        default:
            return state
     }
}