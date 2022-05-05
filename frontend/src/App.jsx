import React, { Suspense } from "react";
import { Provider } from "react-redux";
import { Router  } from "react-router-dom";
import AppContext from "./appContext";

import routes from "./RootRoutes";

function App() {
  return (
    <AppContext.Provider value={{ routes }}>
      <Provider >
          
            <Router>{<Main></Main>}</Router>
         
      </Provider>
    </AppContext.Provider>
  );
}

export default App;
