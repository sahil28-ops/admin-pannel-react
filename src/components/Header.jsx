import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import Button from "@mui/material/Button";
import { MdMenuOpen, MdOutlineMenu } from "react-icons/md";
import { FiSun } from "react-icons/fi";
import { BiCartAlt, BiMessageSquareDetail, BiBell } from "react-icons/bi";
import SearchBox from "./SearchBox";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Logout from "@mui/icons-material/Logout";
import { IoShieldHalfOutline } from "react-icons/io5";
import { Divider } from "@mui/material";
import { MyContext } from "../App";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [notificationEl, setNotificationEl] = useState(null); // Fixed notification state

  const openMyAcc = Boolean(anchorEl);
  const openNotification = Boolean(notificationEl);
  const context = useContext(MyContext);
  // Function for opening/closing the profile dropdown
  const handleProfileClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMyAccDrop = () => {
    setAnchorEl(null);
  };

  // Fixed notification dropdown handling
  const handleOpenNotificationDrop = (event) => {
    setNotificationEl(event.currentTarget);
  };

  const handleCloseNotificationDrop = () => {
    setNotificationEl(null);
  };

  return (
    <header className="d-flex align-items-center">
      <div className="container-fluid">
        <div className="row w-100">
          <div className="col-sm-2 d-flex align-items-center part-1">
            <Link to={"/"} className="d-flex align-items-center">
              <img src={logo} className="logo" alt="Logo" />
            </Link>
          </div>
          <div className="col-sm-3 d-flex align-items-center part2 pl-4">
            <Button
              className="rounded-circle mr-3"
              onClick={() =>
                context.setIsToggleSideBar(!context.isToggleSideBar)
              }
            >
              {context.isToggleSideBar === false ? (
                <MdMenuOpen />
              ) : (
                <MdOutlineMenu />
              )}
            </Button>
            <SearchBox />
          </div>
          <div className="col-sm-7 d-flex align-items-center part3 justify-content-end">
            <Button className="rounded-circle mr-3" onClick={()=>context.setThemeMode(!context.themeMode)}>
              <FiSun />
            </Button>
            <Button className="rounded-circle mr-3">
              <BiCartAlt />
            </Button>
            <Button className="rounded-circle mr-3">
              <BiMessageSquareDetail />
            </Button>

            {/* Notification button with dropdown */}
            <div className="dropdownWrapper position-relative">
              <Button
                className="rounded-circle mr-3"
                onClick={handleOpenNotificationDrop}
              >
                <BiBell />
              </Button>
              <Menu
                anchorEl={notificationEl} // Fixed anchor element
                className="dropdown_list"
                id="notifications"
                open={openNotification}
                onClose={handleCloseNotificationDrop}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <div className="head pl-2 pb-0">
                  <h5>Order(12)</h5>
                </div>
                <Divider className="mb-1" />
                <div className="scroll">
                  <MenuItem onClick={handleCloseNotificationDrop}>
                    <div className="d-flex">
                      <div>
                        <div className="userImg ">
                          <span className="rounded-circle">
                            <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" />
                          </span>
                        </div>
                      </div>
                      <div className="dropdownInfo">
                        <h4>
                          <span>
                            <b>Arjit </b> added to his favorite list{" "}
                            <b>Lather Belt Steve Madden</b>
                            <p className="text-sky mb-0">Few seconds ago</p>
                          </span>
                        </h4>
                      </div>
                    </div>
                  </MenuItem>

                  <MenuItem onClick={handleCloseNotificationDrop}>
                    <div className="d-flex">
                      <div>
                        <div className="userImg ">
                          <span className="rounded-circle">
                            <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" />
                          </span>
                        </div>
                      </div>
                      <div className="dropdownInfo">
                        <h4>
                          <span>
                            <b>Arjit </b> added to his favorite list{" "}
                            <b>Lather Belt Steve Madden</b>
                            <p className="text-sky mb-0">Few seconds ago</p>
                          </span>
                        </h4>
                      </div>
                    </div>
                  </MenuItem>

                  <MenuItem onClick={handleCloseNotificationDrop}>
                    <div className="d-flex">
                      <div>
                        <div className="userImg ">
                          <span className="rounded-circle">
                            <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" />
                          </span>
                        </div>
                      </div>
                      <div className="dropdownInfo">
                        <h4>
                          <span>
                            <b>Arjit </b> added to his favorite list{" "}
                            <b>Lather Belt Steve Madden</b>
                            <p className="text-sky mb-0">Few seconds ago</p>
                          </span>
                        </h4>
                      </div>
                    </div>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNotificationDrop}>
                    <div className="d-flex">
                      <div>
                        <div className="userImg ">
                          <span className="rounded-circle">
                            <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" />
                          </span>
                        </div>
                      </div>
                      <div className="dropdownInfo">
                        <h4>
                          <span>
                            <b>Arjit </b> added to his favorite list{" "}
                            <b>Lather Belt Steve Madden</b>
                            <p className="text-sky mb-0">Few seconds ago</p>
                          </span>
                        </h4>
                      </div>
                    </div>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNotificationDrop}>
                    <div className="d-flex">
                      <div>
                        <div className="userImg ">
                          <span className="rounded-circle">
                            <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" />
                          </span>
                        </div>
                      </div>
                      <div className="dropdownInfo">
                        <h4>
                          <span>
                            <b>Arjit </b> added to his favorite list{" "}
                            <b>Lather Belt Steve Madden</b>
                            <p className="text-sky mb-0">Few seconds ago</p>
                          </span>
                        </h4>
                      </div>
                    </div>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNotificationDrop}>
                    <div className="d-flex">
                      <div>
                        <div className="userImg ">
                          <span className="rounded-circle">
                            <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" />
                          </span>
                        </div>
                      </div>
                      <div className="dropdownInfo">
                        <h4>
                          <span>
                            <b>Arjit </b> added to his favorite list{" "}
                            <b>Lather Belt Steve Madden</b>
                            <p className="text-sky mb-0">Few seconds ago</p>
                          </span>
                        </h4>
                      </div>
                    </div>
                  </MenuItem>
                </div>
                <div className="pl-3 pr-3 w-100 pt-2 pb-1">
                  <Button className="btn-blue w-100">
                    View All Notifications
                  </Button>
                </div>
              </Menu>
            </div>

            {/* Profile button with dropdown */}
            {context.isLogin !== true ? (
              <Link to={"/login"}>
                <Button className="btn-blue btn-lg btn-round">Sign In</Button>
              </Link>
            ) : (
              <div className="myAccWrapper">
                <Button
                  className="myAcc d-flex align-items-center"
                  onClick={handleProfileClick}
                >
                  <div className="userImg">
                    <span className="rounded-circle">
                      <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" />
                    </span>
                  </div>
                  <div className="userInfo">
                    <h5>Sahil Sharma</h5>
                    <p className="mb-0">@sahilShrma</p>
                  </div>
                </Button>
              </div>
            )}

            {/* Profile dropdown menu */}
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={openMyAcc}
              onClose={handleCloseMyAccDrop}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem onClick={handleCloseMyAccDrop}>
                <ListItemIcon>
                  <PersonAdd fontSize="small" />
                </ListItemIcon>
                My Account
              </MenuItem>
              <MenuItem onClick={handleCloseMyAccDrop}>
                <ListItemIcon>
                  <IoShieldHalfOutline />
                </ListItemIcon>
                Reset Password
              </MenuItem>
              <MenuItem onClick={handleCloseMyAccDrop}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
