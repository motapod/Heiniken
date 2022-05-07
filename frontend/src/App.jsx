import React, { Suspense } from "react";
import { Router , Route } from "react-router-dom";
import Main from "./view/Main";

function App() {
  return (
      <Router>
         <Route path='/Main' element={<Main/>} />
      </Router>
  );
}

export default App;
