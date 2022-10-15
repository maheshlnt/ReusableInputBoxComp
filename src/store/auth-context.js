import React, { useState,useEffect } from "react";
const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {}, //for better ide autocompletion test in navigation <button onclick=ctx.onlogout autoretrived
  onLogin:(email,password)=>{}
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(()=>{
    const storedLocalStorage=localStorage.getItem('isLoggedIn');
    if(storedLocalStorage==="1"){
      setIsLoggedIn(true);
    }
  },[]);
  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };
  const loginHandler = () => {
    localStorage.setItem('isLoggedIn','1');
    setIsLoggedIn(true);
  };
  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, onLogout: logoutHandler,onLogin:loginHandler }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
// exporting both files here AuthContextProvider and AUthcontext

export default AuthContext;
