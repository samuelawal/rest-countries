import { useCallback, useEffect, useReducer } from "react";
import { fetchCountries } from "./utils/utils";
import AppReducer, { APP_INITIAL_STATE } from "./store/reducer";
import {
  RESET_LOADING,
  SET_COUNTRIES,
  SET_FILTER,
  SET_LOADING,
} from "./constants/constants";

export default function DataWrapper({ render }) {
  const { state, onFilterChange } = useLocalState();
  const contextData = {
    ...state,
    onFilterChange
  };
 return render(contextData);
}
function useLocalState() {
  const [state, dispatch] = useReducer(AppReducer, APP_INITIAL_STATE);
  const onFilterChange = (event) => {
        dispatch({type: SET_FILTER, filter: event.target.value})
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
    onFilterChange
  };
}
