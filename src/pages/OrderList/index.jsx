import React from "react";

const OrderList = () => {
  return (
    // <div className="p-6 bg-gray-100 min-h-screen">
    <div className="right-content w-100">
      <div className="bg-white p-4 rounded shadow-md">
        <h2 className="text-lg font-bold mb-4">Order List</h2>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-200">
            <thead className="bg-gray-200">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">Order ID</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Customer Name</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Date</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Status</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Total</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* Sample Rows */}
              {[1, 2, 3].map((order) => (
                <tr key={order} className="hover:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2">#ORD1234{order}</td>
                  <td className="border border-gray-300 px-4 py-2">John Doe</td>
                  <td className="border border-gray-300 px-4 py-2">2025-01-24</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <span className="bg-green-200 text-green-800 px-2 py-1 rounded text-sm">
                      Completed
                    </span>
                  </td>
                  <td className="border border-gray-300 px-4 py-2">$123.45</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="mt-4 flex justify-between items-center">
          <button className="bg-gray-300 text-gray-700 px-3 py-1 rounded hover:bg-gray-400">
            Previous
          </button>
          <span className="text-gray-600">Page 1 of 10</span>
          <button className="bg-gray-300 text-gray-700 px-3 py-1 rounded hover:bg-gray-400">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderList;

