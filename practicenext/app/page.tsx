import { fetchAllProducts } from "@/libs/actions/productActions";
import { connectDb } from "@/libs/connectDB";
import Image from "next/image";
import "./globals.css";
import Filters from "./components/Filters";
export default async function Home() {
  const data = await fetchAllProducts();
  return (
    <main className="flex min-h-screen w-[100vw]   bg-[#0a0a0a] items-center p-4">
      <div className="mt-5 ">
        <Filters />

        <table
          border={10}
          className="mt-20 text-white border border-gray-600 min-h-[7px] md:block md:whitespace-nowrap md:overflow-x-auto bg-[#193549]"
        >
          <thead className=" text-yellow-400">
            <tr className="whitespace-nowrap">
              <th className="border border-gray-600 min-h-[7px] m-auto">ID</th>
              <th className="border border-gray-600 min-h-[7px] m-auto">
                Title
              </th>
              <th className="border border-gray-600 min-h-[7px] m-auto">
                Description
              </th>
              <th className="border border-gray-600 min-h-[7px] m-auto">
                Price ("$")
              </th>
              <th className="border border-gray-600 min-h-[7px] m-auto">
                Discount Percentage
              </th>
              <th className="border border-gray-600 min-h-[7px] m-auto">
                Ratings
              </th>
              <th className="border border-gray-600 min-h-[7px] m-auto">
                Stock
              </th>
              <th className="border border-gray-600 min-h-[7px] m-auto">
                Brand
              </th>
              <th className="border border-gray-600 min-h-[7px] m-auto">
                Category
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr className="whitespace-nowrap" key={item.id}>
                <td className="border border-gray-600 min-h-[7px] m-auto  text-center text-slate-400">
                  {item.id}
                </td>
                <td className="border border-gray-600 min-h-[7px] m-auto  text-center ">
                  {item.title}
                </td>
                <td className="border border-gray-600 min-h-[7px] m-auto min-w-[200px] text-center">
                  {item.description.substring(0, 30)}...
                </td>
                <td className="border border-gray-600 min-h-[7px] m-auto  text-center">
                  {item.price}
                </td>
                <td className="border border-gray-600 min-h-[7px] m-auto  text-center">
                  {item.discountPercentage}%
                </td>
                <td className="border border-gray-600 min-h-[7px] m-auto  text-center">
                  {item.rating}
                </td>
                <td className="border border-gray-600 min-h-[7px] m-auto  text-center">
                  {item.stock}
                </td>
                <td className="border border-gray-600 min-h-[7px] m-auto  text-center">
                  {item.brand}
                </td>
                <td className="border border-gray-600 min-h-[7px] m-auto  text-center">
                  {item.category}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
