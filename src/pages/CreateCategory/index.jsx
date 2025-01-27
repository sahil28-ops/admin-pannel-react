import React from 'react'

const CreateCategory = () => {
  return (
    <div className="right-content w-100">
    {/* <div className="p-6 bg-gray-100 min-h-screen"> */}
    {/* Add Category Section */}
    <div className="bg-white p-4 rounded shadow-md mb-6">
      <h2 className="text-lg font-bold mb-4">Add Category</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Category Name"
          className="border p-2 rounded w-full"
        />
        <textarea
          placeholder="Category Description"
          className="border p-2 rounded w-full"
        ></textarea>
        <select className="border p-2 rounded w-full">
          <option>Parent Category</option>
          <option>Electronics</option>
          <option>Clothing</option>
          <option>Home & Kitchen</option>
          <option>None</option>
        </select>
        <input
          type="file"
          className="border p-2 rounded w-full"
        />
      </div>
    </div>

    {/* Additional Options */}
    <div className="bg-white p-4 rounded shadow-md mb-6">
      <h2 className="text-lg font-bold mb-4">Additional Options</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Slug (Optional)"
          className="border p-2 rounded w-full"
        />
        <input
          type="number"
          placeholder="Sort Order"
          className="border p-2 rounded w-full"
        />
        <select className="border p-2 rounded w-full">
          <option>Status</option>
          <option>Active</option>
          <option>Inactive</option>
        </select>
      </div>
    </div>

    {/* Submit Button */}
    <div className="bg-white p-4 rounded shadow-md text-center">
      <button className="bg-blue-500 text-white py-2 px-4 rounded w-full">
        Save Category
      </button>
    </div>
  </div>
//   </div>
  )
}

export default CreateCategory
