import React, { useState } from "react";

type PaginationProps = {
  items: any[];
  pageSize: number;
};

const Pagination = ({ pageSize }: any) => {
  const [currentPage, setCurrentPage] = useState(1);
  const paginatedItems = [];

  const handlePageChange = async (page: number) => {
    setCurrentPage(page);
    if (currentPage <= pageSize) {
      const data = await fetch(`/api/crud/?page=${page}&limit=${5}`, {
        method: "POST",
      });
    }
  };
  for (let i = 1; i <= pageSize; i++) {
    paginatedItems.push(i);
  }

  return (
    <div className="flex justify-center">
      <ul className="text-white flex gap-1 cursor-pointer pb-5">
        <li
          className={`bg-green-500 grid place-items-center w-24 h-9 rounded-md mr-5 ${
            currentPage <= 1 ? "pointer-events-none opacity-75" : ""
          }`}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Previous
        </li>
        {paginatedItems.map((item: any) => (
          <li
            key={item}
            className="bg-green-500 grid place-items-center w-9 h-9 rounded-full "
            onClick={() => handlePageChange(item)}
          >
            {item}
          </li>
        ))}
        <li
          className={`bg-green-500 grid place-items-center w-24 h-9 rounded-md ml-5 ${
            currentPage >= pageSize ? "pointer-events-none opacity-75" : ""
          }`}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
