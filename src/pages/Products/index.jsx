import React from "react";

import { FaEye } from "react-icons/fa";

import Button from "@mui/material/Button";

import { MdDeleteForever, MdEdit } from "react-icons/md";
import Pagination from "@mui/material/Pagination";
import { Link } from "react-router-dom";

const Products = () => {
  return (
   
      <div className="right-content w-100">
        <div className="shadow border-0 p-3 mt-4 card">
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
                          Women's exclusive summer Tops and skirts set For
                          Female Top and skirt Set
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
                        <Link className="eye" to={"productDetails"}>
                          <FaEye />
                        </Link>
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
                          Women's exclusive summer Tops and skirts set For
                          Female Top and skirt Set
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
                          Women's exclusive summer Tops and skirts set For
                          Female Top and skirt Set
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
                          Women's exclusive summer Tops and skirts set For
                          Female Top and skirt Set
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
                          Women's exclusive summer Tops and skirts set For
                          Female Top and skirt Set
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
                          Women's exclusive summer Tops and skirts set For
                          Female Top and skirt Set
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
              <Pagination
                count={46}
                color="primary"
                className="pagination"
                showFirstButton
                showLastButton
              />
            </div>
          </div>
        </div>
      </div>

  );
};

export default Products;
