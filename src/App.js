import Root from "./views/Root";
import AppContext from "./context/context";
import DataWrapper from "./DataWrapper";
function App() {
  return (
    <DataWrapper render={contextData => (
        <AppContext.Provider value={contextData}>
              <Root/>
        </AppContext.Provider>
    )}/>
  );
}

export default App;
