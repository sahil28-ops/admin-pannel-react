import React, { useState } from "react";
import DashboardBox from "./components/DashboardBox";
import { FaEye, FaUserCircle } from "react-icons/fa";
import { IoIosCart } from "react-icons/io";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { BsStars, BsThreeDotsVertical } from "react-icons/bs";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { IoIosTimer } from "react-icons/io";
import Button from "@mui/material/Button";
import { Chart } from "react-google-charts";

import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { MdDeleteForever, MdEdit } from "react-icons/md";
import Pagination from "@mui/material/Pagination";

export const data = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7], // CSS-style declaration
];

export const options = {
  backgroundColor: "transparent",
  chartArea: { width: "100%", height: "100%" },
  // legend: "none", // Hide the legend
  // tooltip: { trigger: "none" }
};
const Dashboard = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [showBy, setShowBy] = useState("");
  const [catBy, setCatBy] = useState("");
  //const [showBy, setShowBy] =useState('');
  //const [showBy, setShowBy] =useState('');
  const ITEM_HEIGHT = 48;
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [age, setAge] = useState("");

  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };

  return (
    <div className="right-content w-100">
      <div className="row dashboardBoxWrapperRow">
        <div className="col-md-8">
          <div className="dashboardBoxWrapper d-flex">
            <DashboardBox
              color={["#43a047", "#66bb6a"]}
              icon={<FaUserCircle />}
              grow={true}
            />
            <DashboardBox color={["#d81b60", "#ff4081"]} icon={<IoIosCart />} />
            <DashboardBox
              color={["#1976d2", "#42a5f5"]}
              icon={<HiMiniShoppingBag />}
            />
            <DashboardBox
              color={["#fbc02d", "#ffb300"]}
              icon={<BsStars />}
              grow={true}
            />
          </div>
        </div>
        <div className="col-md-4 pl-0">
          <div className="box graphBox">
            <div className="d-flex align-items-center w-100 bottmEle">
              <h6 className="text-white mb-0 mt-0">Last Month</h6>

              <div className="ml-auto">
                <Button className="ml-auto toggleIcon" onClick={handleClick}>
                  <BsThreeDotsVertical />
                </Button>
                <Menu
                  className="dropdown_menu"
                  MenuListProps={{
                    "aria-labelledby": "long-button",
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  slotProps={{
                    paper: {
                      style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: "20ch",
                      },
                    },
                  }}
                >
                  <MenuItem onClick={handleClose}>
                    <IoIosTimer />
                    Total Sales
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <IoIosTimer />
                    Last week
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <IoIosTimer /> Last Month
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <IoIosTimer /> Last Year
                  </MenuItem>
                </Menu>
              </div>
            </div>
            <h3 className="text-white font-weight-bold">$3,44,565.00</h3>
            <p>$3,445,90 in last month</p>

            <Chart
              chartType="PieChart"
              width="100%"
              height="170px"
              data={data}
              options={options}
            />
          </div>
        </div>
      </div>
      <div className="shadow border-0 p-3 mt-4 card">
        <h4 className="hd">Best Selling Product</h4>
        <div className="row cardFilters mt-3">
          <div className="col-md-3">
            <h4>Show By</h4>
            <FormControl size="small" className="w-100">
              <Select
                value={showBy}
                onChange={(e) => setShowBy(e.target.value)}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                className="w-100"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="col-md-3">
            <h4>Category By</h4>
            <FormControl size="small" className="w-100">
              <Select
                value={catBy}
                onChange={(e) => setCatBy(e.target.value)}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                labelId="demo-select-small-lable"
                className="w-100"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>

        <div className="table-responsive mt-3">
          <table className="table table-bordered v-align">
            <thead className="thead-dark">
              <tr>
                <th>UID</th>
                <th style={{ width: "300px" }}>Product</th>
                <th>Categroy</th>
                <th>Brand</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Rating</th>
                <th>Order</th>
                <th>Sales</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#1</td>
                <td>
                  <div className="d-flex align-items-center productBox">
                    <div className="imgWrapper">
                      <div className="img">
                        <img
                          src="https://mironcoder-hotash.netlify.app/images/product/01.webp"
                          className="w-100"
                        />
                      </div>
                    </div>
                    <div className="info pl-0">
                      <h6> Top set for Female...</h6>
                      <p>
                        Women's exclusive summer Tops and skirts set For Female
                        Top and skirt Set
                      </p>
                    </div>
                  </div>
                </td>
                <td>Womans</td>
                <td>RichMan</td>
                <td className="text-danger">$19.00</td>
                <td>30</td>
                <td>4.9</td>
                <td>388</td>
                <td>$38k</td>
                <td>
                  <div className="actions d-flex align-items-center">
                    <Button className=" secondary" color="secondary">
                      <FaEye />
                    </Button>

                    <Button className="success" color="success">
                      <MdEdit />
                    </Button>
                    <Button className="error" color="error">
                      <MdDeleteForever />
                    </Button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>#1</td>
                <td>
                  <div className="d-flex align-items-center productBox">
                    <div className="imgWrapper">
                      <div className="img">
                        <img
                          src="https://mironcoder-hotash.netlify.app/images/product/01.webp"
                          className="w-100"
                        />
                      </div>
                    </div>
                    <div className="info pl-0">
                      <h6> Top set for Female...</h6>
                      <p>
                        Women's exclusive summer Tops and skirts set For Female
                        Top and skirt Set
                      </p>
                    </div>
                  </div>
                </td>
                <td>Womans</td>
                <td>RichMan</td>
                <td className="text-danger">$19.00</td>
                <td>30</td>
                <td>4.9</td>
                <td>388</td>
                <td>$38k</td>
                <td>
                  <div className="actions d-flex align-items-center">
                    <Button className=" secondary" color="secondary">
                      <FaEye />
                    </Button>

                    <Button className="success" color="success">
                      <MdEdit />
                    </Button>
                    <Button className="error" color="error">
                      <MdDeleteForever />
                    </Button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>#1</td>
                <td>
                  <div className="d-flex align-items-center productBox">
                    <div className="imgWrapper">
                      <div className="img">
                        <img
                          src="https://mironcoder-hotash.netlify.app/images/product/01.webp"
                          className="w-100"
                        />
                      </div>
                    </div>
                    <div className="info pl-0">
                      <h6> Top set for Female...</h6>
                      <p>
                        Women's exclusive summer Tops and skirts set For Female
                        Top and skirt Set
                      </p>
                    </div>
                  </div>
                </td>
                <td>Womans</td>
                <td>RichMan</td>
                <td className="text-danger">$19.00</td>
                <td>30</td>
                <td>4.9</td>
                <td>388</td>
                <td>$38k</td>
                <td>
                  <div className="actions d-flex align-items-center">
                    <Button className=" secondary" color="secondary">
                      <FaEye />
                    </Button>

                    <Button className="success" color="success">
                      <MdEdit />
                    </Button>
                    <Button className="error" color="error">
                      <MdDeleteForever />
                    </Button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>#1</td>
                <td>
                  <div className="d-flex align-items-center productBox">
                    <div className="imgWrapper">
                      <div className="img">
                        <img
                          src="https://mironcoder-hotash.netlify.app/images/product/01.webp"
                          className="w-100"
                        />
                      </div>
                    </div>
                    <div className="info pl-0">
                      <h6> Top set for Female...</h6>
                      <p>
                        Women's exclusive summer Tops and skirts set For Female
                        Top and skirt Set
                      </p>
                    </div>
                  </div>
                </td>
                <td>Womans</td>
                <td>RichMan</td>
                <td className="text-danger">$19.00</td>
                <td>30</td>
                <td>4.9</td>
                <td>388</td>
                <td>$38k</td>
                <td>
                  <div className="actions d-flex align-items-center">
                    <Button className=" secondary" color="secondary">
                      <FaEye />
                    </Button>

                    <Button className="success" color="success">
                      <MdEdit />
                    </Button>
                    <Button className="error" color="error">
                      <MdDeleteForever />
                    </Button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>#1</td>
                <td>
                  <div className="d-flex align-items-center productBox">
                    <div className="imgWrapper">
                      <div className="img">
                        <img
                          src="https://mironcoder-hotash.netlify.app/images/product/01.webp"
                          className="w-100"
                        />
                      </div>
                    </div>
                    <div className="info pl-0">
                      <h6> Top set for Female...</h6>
                      <p>
                        Women's exclusive summer Tops and skirts set For Female
                        Top and skirt Set
                      </p>
                    </div>
                  </div>
                </td>
                <td>Womans</td>
                <td>RichMan</td>
                <td className="text-danger">$19.00</td>
                <td>30</td>
                <td>4.9</td>
                <td>388</td>
                <td>$38k</td>
                <td>
                  <div className="actions d-flex align-items-center">
                    <Button className=" secondary" color="secondary">
                      <FaEye />
                    </Button>

                    <Button className="success" color="success">
                      <MdEdit />
                    </Button>
                    <Button className="error" color="error">
                      <MdDeleteForever />
                    </Button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>#1</td>
                <td>
                  <div className="d-flex align-items-center productBox">
                    <div className="imgWrapper">
                      <div className="img">
                        <img
                          src="https://mironcoder-hotash.netlify.app/images/product/01.webp"
                          className="w-100"
                        />
                      </div>
                    </div>
                    <div className="info pl-0">
                      <h6> Top set for Female...</h6>
                      <p>
                        Women's exclusive summer Tops and skirts set For Female
                        Top and skirt Set
                      </p>
                    </div>
                  </div>
                </td>
                <td>Womans</td>
                <td>RichMan</td>
                <td className="text-danger">$19.00</td>
                <td>30</td>
                <td>4.9</td>
                <td>388</td>
                <td>$38k</td>
                <td>
                  <div className="actions d-flex align-items-center">
                    <Button className=" secondary" color="secondary">
                      <FaEye />
                    </Button>

                    <Button className="success" color="success">
                      <MdEdit />
                    </Button>
                    <Button className="error" color="error">
                      <MdDeleteForever />
                    </Button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="d-flex tableFooter">
            <Pagination count={46} color="primary" className="pagination" showFirstButton showLastButton/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
