import { FILE_STORAGE } from '../constants/StoreFileConstants'


const initialState = {
    file: null
}

const storeFileReducer = (state=initialState, action) => {
    switch (action.type){
        case FILE_STORAGE:
            return {...state, file: action.payload};
        default:
            return state;
    }
}

export default storeFileReducer