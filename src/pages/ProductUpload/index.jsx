import React from "react";

const ProductUpload = () => {
  return (
    <>
      <div className="right-content w-100">
      {/* <div className="p-6 bg-gray-100 min-h-screen"> */}
      {/* Basic Information */}
      <div className="bg-white p-4 rounded shadow-md mb-6">
        <h2 className="text-lg font-bold mb-4">Basic Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Title"
            className="border p-2 rounded w-full"
          />
          <textarea
            placeholder="Description"
            className="border p-2 rounded w-full"
          ></textarea>
          <select className="border p-2 rounded w-full">
            <option>Men</option>
            <option>Women</option>
            <option>Kids</option>
          </select>
          <input
            type="text"
            placeholder="Brand"
            className="border p-2 rounded w-full"
          />
          <input
            type="number"
            placeholder="Regular Price"
            className="border p-2 rounded w-full"
          />
          <input
            type="number"
            placeholder="Discount Price"
            className="border p-2 rounded w-full"
          />
          <input
            type="number"
            placeholder="Shipping Fee"
            className="border p-2 rounded w-full"
          />
          <input
            type="text"
            placeholder="Tags"
            className="border p-2 rounded w-full"
          />
        </div>
      </div>

      {/* Organization */}
      <div className="bg-white p-4 rounded shadow-md mb-6">
        <h2 className="text-lg font-bold mb-4">Organization</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <select className="border p-2 rounded w-full">
            <option>Add Category</option>
            <option>Electronics</option>
            <option>Clothing</option>
            <option>Home & Kitchen</option>
          </select>
          <input
            type="text"
            placeholder="Add Brand"
            className="border p-2 rounded w-full"
          />
          <input
            type="text"
            placeholder="Add Color"
            className="border p-2 rounded w-full"
          />
          <input
            type="text"
            placeholder="Add Size"
            className="border p-2 rounded w-full"
          />
        </div>
      </div>

      {/* Specification */}
      <div className="bg-white p-4 rounded shadow-md mb-6">
        <h2 className="text-lg font-bold mb-4">Specification</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <select className="border p-2 rounded w-full">
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
            <option>X-Large</option>
          </select>
          <input
            type="number"
            placeholder="Stock"
            className="border p-2 rounded w-full"
          />
          <select className="border p-2 rounded w-full">
            <option>Red</option>
            <option>Brown</option>
            <option>Black</option>
            <option>Pink</option>
          </select>
          <input
            type="number"
            placeholder="Weight"
            className="border p-2 rounded w-full"
          />
        </div>
      </div>

      {/* Media and Publish */}
      <div className="bg-white p-4 rounded shadow-md">
        <h2 className="text-lg font-bold mb-4">Media And Published</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          <div className="border p-4 rounded flex items-center justify-center">
            <img
              src="https://mironcoder-hotash.netlify.app/images/product/single/01.webp"
              alt="Placeholder"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="border p-4 rounded flex items-center justify-center">
            <img
               src="https://mironcoder-hotash.netlify.app/images/product/single/01.webp"
              alt="Placeholder"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="border p-4 rounded flex items-center justify-center">
            <img
              src="https://mironcoder-hotash.netlify.app/images/product/single/01.webp"
              alt="Placeholder"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="border p-4 rounded flex items-center justify-center">
            <img
              src="https://mironcoder-hotash.netlify.app/images/product/single/01.webp"
              alt="Placeholder"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="border p-4 rounded flex items-center justify-center relative">
            <input
              type="file"
              className="w-full h-full opacity-0 absolute cursor-pointer"
            />
            <div className="flex items-center justify-center w-full h-full text-gray-500">
              + Upload Image
            </div>
          </div>
        </div>
        <button className="bg-blue-500 text-white py-2 px-4 rounded w-full">
          Publish and View
        </button>
      </div>
    </div>
      {/* </div> */}
    </>
  );
};

export default ProductUpload;
