import React from "react";

const OderDetails = () => {
  return (
    // <div className="p-6 bg-gray-100 min-h-screen">
    <div className="right-content w-100">
      <div className="bg-white p-4 rounded shadow-md">
        <h2 className="text-lg font-bold mb-4">Order Details</h2>

        {/* Order Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <p className="text-gray-600 font-semibold">Order ID:</p>
            <p>#ORD12345</p>
          </div>
          <div>
            <p className="text-gray-600 font-semibold">Customer Name:</p>
            <p>John Doe</p>
          </div>
          <div>
            <p className="text-gray-600 font-semibold">Date:</p>
            <p>2025-01-24</p>
          </div>
          <div>
            <p className="text-gray-600 font-semibold">Status:</p>
            <p>
              <span className="bg-green-200 text-green-800 px-2 py-1 rounded text-sm">
                Completed
              </span>
            </p>
          </div>
        </div>

        {/* Product Details */}
        <h3 className="text-md font-bold mb-3">Products</h3>
        <div className="overflow-x-auto mb-6">
          <table className="table-auto w-full border-collapse border border-gray-200">
            <thead className="bg-gray-200">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Product Name
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Quantity
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Price
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3].map((item) => (
                <tr key={item} className="hover:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2">
                    Product {item}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">2</td>
                  <td className="border border-gray-300 px-4 py-2">$50.00</td>
                  <td className="border border-gray-300 px-4 py-2">$100.00</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Payment Summary */}
        <h3 className="text-md font-bold mb-3">Payment Summary</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-gray-600 font-semibold">Subtotal:</p>
            <p>$300.00</p>
          </div>
          <div>
            <p className="text-gray-600 font-semibold">Shipping Fee:</p>
            <p>$20.00</p>
          </div>
          <div>
            <p className="text-gray-600 font-semibold">Tax:</p>
            <p>$15.00</p>
          </div>
          <div>
            <p className="text-gray-600 font-semibold">Total:</p>
            <p className="font-bold">$335.00</p>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-6 flex justify-end">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Print Invoice
          </button>
        </div>
      </div>
    </div>
  );
};

export default OderDetails;
