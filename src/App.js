import React, { useEffect, useState } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthStore from "./store/auth-store";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = (email, password) => {
    localStorage.setItem("connected", "true");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("connected");
    setIsLoggedIn(false);
  };
  // console.log("before");
  useEffect(() => {
    // console.log("effect");
    const item = localStorage.getItem("connected");
    if (item === "true") {
      setIsLoggedIn(true);
    }
  }, []);
  // console.log("after");

  return (
    <AuthStore.Provider
      value={{
        test: isLoggedIn,
        loginHandler: loginHandler,
        logoutHandler: logoutHandler,
      }}
    >
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </AuthStore.Provider>
  );
}

export default App;
