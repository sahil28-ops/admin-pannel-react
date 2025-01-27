import React, { useState } from "react";
import { MdDeleteForever, MdEdit, MdAddCircleOutline } from "react-icons/md"; // Import icons
import { FaEye } from "react-icons/fa"; // Import the FaEye (view) icon

const CategoryList = () => {
  const categories = [
    {
      id: 1,
      name: "Electronics",
      description: "Gadgets and devices",
      parent: "None",
      status: "Active",
    },
    {
      id: 2,
      name: "Clothing",
      description: "Apparel and accessories",
      parent: "None",
      status: "Active",
    },
    {
      id: 3,
      name: "Mobile Phones",
      description: "Smartphones and accessories",
      parent: "Electronics",
      status: "Active",
    },
    {
      id: 4,
      name: "Home & Kitchen",
      description: "Furniture and appliances",
      parent: "None",
      status: "Inactive",
    },
  ];

  return (
    <div className="right-content w-100">
    {/* <div className="p-6 bg-gray-100 min-h-screen"> */}
      <div className="bg-white p-4 rounded shadow-md mb-6">
        <h2 className="text-lg font-bold mb-4">Category List</h2>

        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2">ID</th>
              <th className="border border-gray-300 p-2">Name</th>
              <th className="border border-gray-300 p-2">Description</th>
              <th className="border border-gray-300 p-2">Parent Category</th>
              <th className="border border-gray-300 p-2">Status</th>
              <th className="border border-gray-300 p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category.id} className="text-center">
                <td className="border border-gray-300 p-2">{category.id}</td>
                <td className="border border-gray-300 p-2">{category.name}</td>
                <td className="border border-gray-300 p-2">
                  {category.description}
                </td>
                <td className="border border-gray-300 p-2">
                  {category.parent}
                </td>
                <td className="border border-gray-300 p-2">
                  {category.status}
                </td>
                <td className="border border-gray-300 p-2">
                  <button className="bg-yellow-500 text-white py-1 px-3 rounded mr-2">
                    Edit
                  </button>
                  <button className="bg-red-500 text-white py-1 px-3 rounded">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    // </div>
  );
};

export default CategoryList;
