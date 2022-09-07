import {AUTHORNAME_FILTER, CATAGORY_FILTER, SEARCH_FILTER} from "./actionType";
import initialState from "./initialState";

const reducer = (state = initialState, action) => {

    switch(action.type){
        case AUTHORNAME_FILTER:
            return{
                ...state,
                authorFilter: action.payload,
            }

        case CATAGORY_FILTER: 
        return {
            ...state,
            categoryFilter: action.payload,
        }

        case SEARCH_FILTER:
            return {
            ...state,
            searchFilter: action.payload,
    
            }

            default: 
               return state;
    }
}

export default reducer;