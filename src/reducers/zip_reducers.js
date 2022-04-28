import {
  GET_ZIP_BEGIN,
  GET_ZIP_SUCCESS,
  GET_ZIP_ERROR,
  HANDLE_SEARCH,
} from "../files";

const zip_reducers = (state, action) => {
  if (action.type === GET_ZIP_BEGIN) {
    return { ...state, zip_loading: true };
  }
  if (action.type === GET_ZIP_SUCCESS) {
    return {
      ...state,
      zip_loading: false,
      zip: action.payload,
    };
  }
  if (action.type === HANDLE_SEARCH) {
    return {
      ...state,
      searchTerm: action.payload,
    };
  }
  if (action.type === GET_ZIP_ERROR) {
    return { ...state, zip_loading: false, _error: true };
  }
};

export default zip_reducers;
