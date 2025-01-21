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
            <Button
              className={`w-100 ${activeTab === 1 ? "active" : ""}`}
              onClick={() => isOpenSubMenu(1)}
            >
              <span className="icon">
                <MdDashboard />
              </span>
              Dashboard
              <span className="arrow">
                <FaAngleRight />
              </span>
            </Button>
            <div
              className={`submenuWrapper ${
                activeTab === 1 && isToggleSubmenu === true
                  ? "colapse"
                  : "colapsed"
              }`}
            >
              <ul className="submenu">
                <li>
                  <Link to="#">Dashboard Overview</Link>
                </li>
                <li>
                  <Link to="#">Dashboard Analytics</Link>
                </li>
                <li>
                  <Link to="#">Dashboard Settings</Link>
                </li>
              </ul>
            </div>
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
                  <Link to="#">Category List</Link>
                </li>
                <li>
                  <Link to="#">Category Details</Link>
                </li>
                <li>
                  <Link to="#">Add Category</Link>
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
                  <Link to="#">Product List</Link>
                </li>
                <li>
                  <Link to="#">Product View</Link>
                </li>
                <li>
                  <Link to="#">Product Upload</Link>
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
                  <Link to="#">Order List</Link>
                </li>
                <li>
                  <Link to="#">Order Details</Link>
                </li>
                <li>
                  <Link to="#">Track Orders</Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Button
              className={`w-100 ${activeTab === 5 ? "active" : ""}`}
              onClick={() => isOpenSubMenu(5)}
            >
              <span className="icon">
                <FaBell />
              </span>
              Notifications
              <span className="arrow">
                <FaAngleRight />
              </span>
            </Button>
            <div
              className={`submenuWrapper ${
                activeTab === 5 && isToggleSubmenu === true
                  ? "colapse"
                  : "colapsed"
              }`}
            >
              <ul className="submenu">
                <li>
                  <Link to="#">All Notifications</Link>
                </li>
                <li>
                  <Link to="#">Unread Notifications</Link>
                </li>
                <li>
                  <Link to="#">Notification Settings</Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Button
              className={`w-100 ${activeTab === 6 ? "active" : ""}`}
              onClick={() => isOpenSubMenu(6)}
            >
              <span className="icon">
                <IoMdSettings />
              </span>
              Settings
              <span className="arrow">
                <FaAngleRight />
              </span>
            </Button>
            <div
              className={`submenuWrapper ${
                activeTab === 6 && isToggleSubmenu === true
                  ? "colapse"
                  : "colapsed"
              }`}
            >
              <ul className="submenu">
                <li>
                  <Link to="#">Profile Settings</Link>
                </li>
                <li>
                  <Link to="#">Account Settings</Link>
                </li>
                <li>
                  <Link to="#">Privacy Settings</Link>
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
