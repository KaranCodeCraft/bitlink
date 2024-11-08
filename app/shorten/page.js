"use client";
import React, { useState } from "react";

const Page = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [generated, setGenerated] = useState(false);

  const handleChange = (e) => {
    const { value, name } = e.target;
    if (name === "url") {
      setUrl(value);
    } else if (name === "shortUrl") {
      setShortUrl(value);
    }
  };

  return (
    <div className="mx-auto max-w-lg bg-purple-100 p-6 rounded-lg shadow-lg">
      <h1 className="font-semibold text-2xl text-center mb-4">
        Generate your short url
      </h1>
      <div className="flex flex-col space-y-4">
        <input
          type="text"
          name="url"
          placeholder="Enter your url"
          onChange={handleChange}
          value={url}
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200"
        />
        <input
          type="text"
          name="shortUrl"
          value={shortUrl}
          placeholder="Enter your preferred url"
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200"
        />
        <button className="bg-purple-500 text-white py-2 rounded hover:bg-purple-600 transition duration-200">
          Generate
        </button>
      </div>
    </div>
  );
};

export default Page;
