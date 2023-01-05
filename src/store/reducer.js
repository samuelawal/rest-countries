import {
  SET_LOADING,
  SET_COUNTRIES,
  RESET_LOADING,
  SET_FILTER,
  SET_SORT_BY,
  SET_SORT_ORDER,
} from "../constants/constants";

export const APP_INITIAL_STATE = {
  loading: false,
  countries: [],
  loadingText: "",
  sortBy: {
    key: null,
    type: null,
  },
  sortOrder: {
    name: '',
    population: '',
  },
  filter: "all",
};

const AppReducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: action.value, loadingText: action.text };
    case RESET_LOADING:
      return { ...state, loadingText: null, loading: false };
    case SET_COUNTRIES:
      return { ...state, countries: action.countries };
    case SET_SORT_BY:
      return { ...state, sortBy: action.value };
    case SET_SORT_ORDER: 
      return {...state, sortOrder: {...action.sortOrder, [action.key]: [action.value]}}
    case SET_FILTER:
      return { ...state, filter: action.filter };
  }
};
export default AppReducer;
