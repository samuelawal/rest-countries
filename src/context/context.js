import { createContext } from "react";
import { APP_INITIAL_STATE } from "../store/reducer";
const AppContext = createContext({
    ...APP_INITIAL_STATE
})

export default AppContext