import React from "react";
import { Switch, Route } from "react-router-dom";
import Main from './main'

function App() {
  return (
    

    <React.Fragment>
      <Main />
      <Switch>
        <Route exact path="/">
          {" "}
        </Route>
      </Switch>
     
    </React.Fragment>
  );
}

export default App;
