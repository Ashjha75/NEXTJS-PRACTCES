"use client";
import Pagination from "@/app/components/pagination";
import React, { useEffect, useLayoutEffect, useState } from "react";

interface Result {
  message: string;
  result: any;
}

const page = () => {
  const [result, setResult] = useState<Result>({ result: [], message: "" });

  async function fetchData() {
    const data = await fetch(`/api/crud/?page=1&limit=5`, {
      method: "POST",
    });
    const res = await data.json();
    setResult({ result: res.result, message: result.message });
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-[#0a0a0a]">
      <div className="min-h-screen  w-[100vw]    items-center p-4">
        <div className=" text-white font-bold">...INSERT</div>
        <button
          type="submit"
          className="bg-green-500 rounded-md py-2 px-6 text-white"
          onClick={fetchData}
        >
          Create
        </button>
        <div className="text-white font-bold">...Find</div>
        <button
          type="submit"
          className="bg-green-500 rounded-md py-2 px-6 text-white"
          onClick={fetchData}
        >
          Find
        </button>

        <div className="text-white font-bold">...Update</div>
        <button
          type="submit"
          className="bg-green-500 rounded-md py-2 px-6 text-white"
          onClick={fetchData}
        >
          Update
        </button>
      </div>
      {result.result.pageInfo ? (
        <Pagination pageSize={result.result.pageInfo.totalPages} />
      ) : null}
    </div>
  );
};

export default page;
