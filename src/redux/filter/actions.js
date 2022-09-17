import {AUTHORNAME_FILTER, CATAGORY_FILTER, SEARCH_FILTER, RESET} from "./actionType";

export const authorName = (authorFilter) => {
    return {
        type: AUTHORNAME_FILTER,
        payload: authorFilter,

    }
}
export const category = (catagoryFilter) => {
    return {
        type: CATAGORY_FILTER,
        payload: catagoryFilter,

    }
}
export const search = (searchFilter) => {
    return {
        type: SEARCH_FILTER,
        payload: searchFilter,

    }
}

export const reset = () => {
    return{
        type: RESET,
    
    }
}



