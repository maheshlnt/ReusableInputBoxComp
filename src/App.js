import React, { useContext } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
 import AuthContext from './store/auth-context';

function App() {
 const ctx= useContext(AuthContext);   // added new 
  //all moved to auth-context.js
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

// useEffect(()=>{
//   const storedLocalStorage=localStorage.getItem('isLoggedIn');
//   if(storedLocalStorage==="1"){
//     setIsLoggedIn(true);
//   }
// },[]);
//   const loginHandler = (email, password) => {
//     // We should of course check email and password
//     // But it's just a dummy/ demo anyways
//     localStorage.removeItem('isLoggedIn');
//     localStorage.setItem('isLoggedIn','1');
//     setIsLoggedIn(true);
//   };
 
//   const logoutHandler = () => {
//     localStorage.setItem('isLoggedIn','0');
//     setIsLoggedIn(false);
//   };

  return (
    <React.Fragment>
      {/* // <AuthContext.Provider value={{isLoggedIn:isLoggedIn,onLogout:logoutHandler}}> */}
      <MainHeader/>
      <main>
        {!ctx.isLoggedIn && <Login/>}
        {ctx.isLoggedIn && <Home/>}
      </main>
      {/* // </AuthContext.Provider> */}
      </React.Fragment>
  );
}

export default App;
