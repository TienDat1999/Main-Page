import React from 'react'
const defaultValue = {name:"dat"}
const ThemeContext = React.createContext(defaultValue);
const AppProvider = (props) => (     
    <ThemeContext.Provider value={{name:"dat"}}>
      {props.children}
    </ThemeContext.Provider>
  ) ;
export default ThemeContext;
export {AppProvider};


