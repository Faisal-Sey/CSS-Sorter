import { FILE_STORAGE } from "../constants/StoreFileConstants";

export const storeFileAction = (data) => async (dispatch) => {
    dispatch ({
        type: FILE_STORAGE,
        payload: data,
    });
};