import React, { createContext, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
const MyContext = createContext();
function App() {
  const [isToggleSideBar, setIsToggleSideBar] = useState(true);
  const [isLogin, setIsLogin] = useState(false);
  const [isLoginSidebarAndHeader, setIsLoginSidebarAndHeader] = useState(false);
  const [themeMode, setThemeMode] = useState(true);

  
 useEffect(()=>{
  if(themeMode===true){
    document.body.classList.remove('dark')
    document.body.classList.add('light')
    localStorage.setItem("themeMode",'light')
  }else{
    document.body.classList.remove('light')
    document.body.classList.add('dark')
    localStorage.setItem("themeMode",'dark')
  }
 },[themeMode])

  const values = {
    isToggleSideBar,
    setIsToggleSideBar,
    isLogin,
    setIsLogin,
    isLoginSidebarAndHeader,
    setIsLoginSidebarAndHeader,
    themeMode,
    setThemeMode
  };
  return (
    <>
      <BrowserRouter>
        <MyContext.Provider value={values}>
          {isLoginSidebarAndHeader !== true && <Header />}

          <div className="main d-flex">
            {isLoginSidebarAndHeader !== true && (
              <div
                className={`sidebarwrapper ${
                  isToggleSideBar === true ? "toggle" : ""
                }`}
              >
                <Sidebar />
              </div>
            )}

            <div
              className={`content ${isToggleSideBar === true ? "toggle" : ""}`}
            >
              <Routes>
                <Route path="/" exact={true} element={<Dashboard />} />
                <Route path="/dashboard" exact={true} element={<Dashboard />} />
                <Route path="/login" exact={true} element={<Login />} />
                <Route path="/signUp" exact={true} element={<SignUp />} />
              </Routes>
            </div>
          </div>
        </MyContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
export { MyContext };
