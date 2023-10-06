import { getAllFetchUser } from "@/libs/actions/fetchActions";
import Link from "next/link";
import React from "react";

const page = async () => {
  const userData: Promise<User[]> = getAllFetchUser();
  const users = await userData;
  console.log(users);
  return (
    <div className="bg-[#0a0a0a] h-screen p-5 text-white">
      hello
      <h2>
        <Link href="/">Back to home </Link>
      </h2>
      <br />
      {users.map((user) => {
        return (
          <>
            <p key={user.id}>
              <Link href={`/user/${user.id}`}>{user.name}</Link>
            </p>
          </>
        );
      })}
    </div>
  );
};

export default page;
