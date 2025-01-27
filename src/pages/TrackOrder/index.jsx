import React, { useState } from "react";

const TrackOrder = () => {
  const [orderId, setOrderId] = useState("");
  const [orderStatus, setOrderStatus] = useState(null);

  const trackOrder = () => {
    if (orderId === "123") {
      setOrderStatus({
        orderId: "123",
        status: "On the way",
        estimatedDelivery: "January 28, 2025",
        trackingProgress: 60,
        currentLocation: "New Delhi, India",
        items: [
          { name: "Laptop", quantity: 1 },
          { name: "Headphones", quantity: 2 },
        ],
      });
    } else {
      setOrderStatus(null);
    }
  };

  return (
    <div className="right-content w-100">
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-xl p-8">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          Track Your Order
        </h1>

        <div className="flex gap-4 mb-6">
          <input
            type="text"
            placeholder="Enter Order ID"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            className="px-4 py-3 w-full border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={trackOrder}
            className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
          >
            Track Order
          </button>
        </div>

        {orderStatus ? (
          <>
            <div className="space-y-6">
              <div className="bg-gray-50 p-4 rounded-md shadow-sm">
                <h2 className="text-xl font-semibold text-gray-800">
                  Order Summary
                </h2>
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between">
                    <span>Order ID:</span>
                    <span className="font-semibold">{orderStatus.orderId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Status:</span>
                    <span className="font-semibold text-blue-500">
                      {orderStatus.status}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Estimated Delivery:</span>
                    <span className="font-semibold">
                      {orderStatus.estimatedDelivery}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Current Location:</span>
                    <span className="font-semibold">
                      {orderStatus.currentLocation}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-md shadow-sm">
                <h2 className="text-xl font-semibold text-gray-800">
                  Items in Your Order
                </h2>
                <ul className="space-y-2 text-gray-700">
                  {orderStatus.items.map((item, index) => (
                    <li key={index} className="flex justify-between">
                      <span>{item.name}</span>
                      <span className="font-semibold">x{item.quantity}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Order Progress
                </h3>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: `${orderStatus.trackingProgress}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>0%</span>
                  <span>100%</span>
                </div>
              </div>
            </div>
          </>
        ) : orderId ? (
          <div className="mt-6 text-center text-red-500">
            Order not found. Please check your Order ID.
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default TrackOrder;
