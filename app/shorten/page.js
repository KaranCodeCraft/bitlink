"use client";
import Link from "next/link";
import React, { useState } from "react";

const Page = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [generated, setGenerated] = useState("");

  const handleChange = (e) => {
    const { value, name } = e.target;
    if (name === "url") {
      setUrl(value);
    } else if (name === "shortUrl") {
      setShortUrl(value);
    }
  };

  const genrate = ()=>{
    const raw = JSON.stringify({
      url: url,
      shortUrl: shortUrl,
    });

    const requestOptions = {
      method: "POST",
      body: raw,
      redirect: "follow"
    };

    fetch("/api/genrate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setUrl("")
        setShortUrl("")
        setGenerated(`${process.env.NEXT_PUBLIC_API_URL}/${shortUrl}`)
        console.log(result)
        alert(result.message)
      }).catch((error) => console.error(error));
  }

  return (
    <div className="mx-auto max-w-lg bg-purple-100 p-6 rounded-lg shadow-lg">
      <h1 className="font-semibold text-2xl text-center mb-4">
        Generate your short url
      </h1>
      <div className="text-center my-2">

      <span className="text-sm text-center underline italic">Please Enter with http or https*</span>
      </div>
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
        <button onClick={genrate} disabled={!url} className="bg-purple-500 text-white py-2 rounded hover:bg-purple-600 transition duration-200">
          Generate
        </button>
        {generated && <span className="font-bold text-lg"> Your Link : <Link target="_blank" href={generated}><code>{generated}</code></Link></span>}
      </div>
    </div>
  );
};

export default Page;
