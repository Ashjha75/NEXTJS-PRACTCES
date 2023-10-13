"use client";
import React, { useState } from "react";

const Filters = () => {
  const [value, setValue] = useState({
    id: "",
    title: "",
    description: "",
    price: "",
    discountPercentage: "",
    rating: "",
    stock: "",
    brand: "",
    category: "",
  });
  const handleChange = (e: any) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    let query = Object.entries(value)
      .filter(([key, value]) => value !== "" && value.trim() !== "")
      .map(([key, value]) => `${key}=${value}`)
      .join("&");
    if (query === "") {
      query = "isAll=true";
    }
    await fetch(`/api/products/?${query}`, {
      method: "POST",
    });
  };
  return (
    <div>
      <form className="grid grid-cols-4 gap-4 " onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product id"
          className="p-3 rounded-md max-h-11"
          name="id"
          value={value.id}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Product title"
          className="p-3 rounded-md max-h-11"
          name="title"
          value={value.title}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Descriptions"
          className="p-3 rounded-md max-h-11"
          name="description"
          value={value.description}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Price"
          className="p-3 rounded-md max-h-11"
          name="price"
          value={value.price}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Discount"
          className="p-3 rounded-md max-h-11"
          name="discountPercentage"
          value={value.discountPercentage}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Ratings"
          className="p-3 rounded-md max-h-11"
          name="rating"
          value={value.rating}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Stocks"
          className="p-3 rounded-md max-h-11"
          name="stock"
          value={value.stock}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Brands"
          className="p-3 rounded-md max-h-11"
          name="brand"
          value={value.brand}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Category"
          className="p-3 rounded-md max-h-11"
          name="category"
          value={value.category}
          onChange={handleChange}
        />

        <button
          type="submit"
          className="bg-green-500 rounded-md py-2 px-6 text-white"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Filters;
