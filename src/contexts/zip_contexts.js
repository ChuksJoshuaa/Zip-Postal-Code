import React, { useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducers/zip_reducers";

import {
  GET_ZIP_BEGIN,
  GET_ZIP_SUCCESS,
  GET_ZIP_ERROR,
  HANDLE_SEARCH,
} from "../files";

const initialState = {
  zip_loading: false,
  zip_error: false,
  zip: [],
  searchTerm: "30043",
};

const ZipContext = React.createContext();

export const ZipProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getZip = () => {
    dispatch({ type: GET_ZIP_BEGIN });

    const options = {
      method: "GET",
      url: "https://us-zip-code-information.p.rapidapi.com/",
      params: { zipcode: state.searchTerm },
      headers: {
        "X-RapidAPI-Host": "us-zip-code-information.p.rapidapi.com",
        "X-RapidAPI-Key": "a9af11c38fmshc761ffe28560cf4p184146jsn1203d639b760",
      },
    };
    axios
      .request(options)
      .then(function (response) {
        const zip = response.data;
        dispatch({ type: GET_ZIP_SUCCESS, payload: zip });
      })
      .catch(function (error) {
        dispatch({ type: GET_ZIP_ERROR });
      });
  };

  const setSearchTerm = (searchTerm) => {
    dispatch({ type: HANDLE_SEARCH, payload: searchTerm });
  };

  useEffect(() => {
    getZip();
  }, [state.searchTerm]);

  return (
    <ZipContext.Provider value={{ ...state, setSearchTerm }}>
      {children}
    </ZipContext.Provider>
  );
};

export const useZipContext = () => {
  return useContext(ZipContext);
};
