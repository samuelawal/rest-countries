import { useCallback, useEffect, useReducer } from "react";
import { fetchCountries } from "./utils/utils";
import AppReducer, { APP_INITIAL_STATE } from "./store/reducer";
import {
    ASCENDING_ORDER,
  RESET_LOADING,
  SET_COUNTRIES,
  SET_FILTER,
  SET_LOADING,
  SET_SORT_BY,
  SET_SORT_ORDER,
  STRING,
} from "./constants/constants";

export default function DataWrapper({ render }) {
  const { state, onFilterChange, onSortOrderChange } = useLocalState();
  const contextData = {
    ...state,
    onFilterChange,
    onSortOrderChange
  };
 return render(contextData);
}
function useLocalState() {
  const [state, dispatch] = useReducer(AppReducer, APP_INITIAL_STATE);
  const onFilterChange = (event) => {
        dispatch({type: SET_FILTER, filter: event.target.value})
  };
  const onSortOrderChange = (key, type = STRING) => {
        const {sortOrder} = state;
        console.log(key)
        const reverseOrder = sortOrder[key] === ASCENDING_ORDER;
        dispatch({type: SET_SORT_ORDER, key, value: reverseOrder});
        dispatch({type: SET_SORT_BY, value: {key, type}});
  }
  useEffect(
    useCallback(
        () => {
            const setCountries = async () => {
              dispatch({ type: SET_LOADING, value: true, text: "Fetching countries" });
              try {
                const data = await fetchCountries();
                dispatch({ type: SET_COUNTRIES, countries: data });
              } catch (err) {
                console.log(err);
              } finally {
                dispatch({ type: RESET_LOADING });
              }
            };
            setCountries();
          }, [dispatch])
        ,
        []
    )
  return {
    state,
    onFilterChange,
    onSortOrderChange,
  };
}
