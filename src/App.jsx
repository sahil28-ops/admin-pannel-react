import React, { createContext, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ProductDetails from "./pages/ProductDetails";
import Products from "./pages/Products";
import ProductUpload from "./pages/ProductUpload";
import CategoryList from "./pages/CategoryList";
import CreateCategory from "./pages/CreateCategory";
import OrderList from "./pages/OrderList";
import OderDetails from "./pages/OrderDetails";
import TrackOrder from "./pages/TrackOrder";
const MyContext = createContext();
function App() {
  const [isToggleSideBar, setIsToggleSideBar] = useState(true);
  const [isLogin, setIsLogin] = useState(false);
  const [isLoginSidebarAndHeader, setIsLoginSidebarAndHeader] = useState(false);
  const [themeMode, setThemeMode] = useState(true);

  useEffect(() => {
    if (themeMode === true) {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
      localStorage.setItem("themeMode", "light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
      localStorage.setItem("themeMode", "dark");
    }
  }, [themeMode]);

  const values = {
    isToggleSideBar,
    setIsToggleSideBar,
    isLogin,
    setIsLogin,
    isLoginSidebarAndHeader,
    setIsLoginSidebarAndHeader,
    themeMode,
    setThemeMode,
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
                <Route path="/products" exact={true} element={<Products />} />
                <Route
                  path="/productDetails"
                  exact={true}
                  element={<ProductDetails />}
                />
                <Route
                  path="/productUpload"
                  exact={true}
                  element={<ProductUpload />}
                />
                 <Route path="/categoryList" exact={true} element={<CategoryList />} />
                 <Route path="/createCategory" exact={true} element={<CreateCategory />} />
               
                 <Route path="/orderlist" exact={true} element={<OrderList />} />
                 <Route path="/orderDetails" exact={true} element={<OderDetails/>} />
                 <Route path="/trackOrder" exact={true} element={<TrackOrder/>} />
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
