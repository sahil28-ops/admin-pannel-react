import React, { useContext, useState } from "react";
import Button from "@mui/material/Button";

import { FaAngleRight, FaBell, FaProductHunt } from "react-icons/fa";
import { MdCategory, MdDashboard } from "react-icons/md";
import { IoMdCart, IoMdSettings } from "react-icons/io";
import { Link } from "react-router-dom";
import { MyContext } from "../App";

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isToggleSubmenu, setIsToggleSubmenu] = useState(false);
  const context = useContext(MyContext);
  //  const { isToggleSideBar } = useContext(MyContext)
  const isOpenSubMenu = (index) => {
    setActiveTab(index);
    setIsToggleSubmenu(!isToggleSubmenu);
  };

  return (
    <>
      <div className="sidebar">
        <ul>
          <li>
            <Link to={"/"} className="no-underline text-gray-800 w-full block">
              <Button className="w-full flex items-center">
                <span className="icon mr-2">
                  <MdDashboard />
                </span>
                Dashboard
              </Button>
            </Link>
          </li>

          <li>
            <Button
              className={`w-100 ${activeTab === 2 ? "active" : ""}`}
              onClick={() => isOpenSubMenu(2)}
            >
              <span className="icon">
                <MdCategory />
              </span>
              Category
              <span className="arrow">
                <FaAngleRight />
              </span>
            </Button>
            <div
              className={`submenuWrapper ${
                activeTab === 2 && isToggleSubmenu === true
                  ? "colapse"
                  : "colapsed"
              }`}
            >
              <ul className="submenu">
                <li>
                  <Link to="/categoryList">Category List</Link>
                </li>

                <li>
                  <Link to="/createCategory">Add Category</Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Button
              className={`w-100 ${activeTab === 3 ? "active" : ""}`}
              onClick={() => isOpenSubMenu(3)}
            >
              <span className="icon">
                <FaProductHunt />
              </span>
              Products
              <span className="arrow">
                <FaAngleRight />
              </span>
            </Button>
            <div
              className={`submenuWrapper ${
                activeTab === 3 && isToggleSubmenu === true
                  ? "colapse"
                  : "colapsed"
              }`}
            >
              <ul className="submenu">
                <li>
                  <Link to="/products">Product View</Link>
                </li>
                <li>
                  <Link to="/productUpload">Product Upload</Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Button
              className={`w-100 ${activeTab === 4 ? "active" : ""}`}
              onClick={() => isOpenSubMenu(4)}
            >
              <span className="icon">
                <IoMdCart />
              </span>
              Orders
              <span className="arrow">
                <FaAngleRight />
              </span>
            </Button>
            <div
              className={`submenuWrapper ${
                activeTab === 4 && isToggleSubmenu === true
                  ? "colapse"
                  : "colapsed"
              }`}
            >
              <ul className="submenu">
                <li>
                  <Link to="/orderList">Order List</Link>
                </li>
                <li>
                  <Link to="/orderDetails">Order Details</Link>
                </li>
                <li>
                  <Link to="/trackOrder">Track Orders</Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
