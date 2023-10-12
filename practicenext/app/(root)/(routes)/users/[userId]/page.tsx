import UserPosts from "@/app/components/UserPosts";
import { getAllFetchPost, getUserByID } from "@/libs/actions/fetchActions";
import { Metadata } from "next";
import React, { Suspense } from "react";

// dynamic meta data
export async function generateMetaData(params: {
  params: { userId: string };
}): Promise<Metadata> {
  console.log("hello---------");
  const data: Promise<User> = getUserByID(parseInt(params.params.userId));
  const user = await data;
  return {
    title: user.name,
    description: `This is page of ${user.name}`,
  };
}

const UserPage = async (params: { params: { userId: string } }) => {
  const data: Promise<User> = getUserByID(parseInt(params.params.userId));
  const posts: Promise<Post[]> = getAllFetchPost(
    parseInt(params.params.userId)
  );
  // 1st method-my method
  // const userData = await data;
  // const postData = await posts;

  // 2nd method- using Promise.all
  // const [userData, postData] = await Promise.all([data, posts]);

  // 3rd method - pass the posts to userPost componet and use streming or suspense to show ui
  const userData = await data;
  return (
    <div className="bg-[#0a0a0a] min-h-screen p-5 text-white">
      <h1>{userData.name}</h1>
      <p>{userData.email}</p>
      <p>{userData.phone}</p>
      <div>
        Address
        <p>{userData.address.street}</p>
        <p>{userData.address.suite}</p>
        <p>{userData.address.city}</p>
        <p>{userData.address.zipcode}</p>
      </div>

      <Suspense fallback={<h1>Loading....</h1>}>
        <UserPosts promise={posts} />
      </Suspense>
    </div>
  );
};

export default UserPage;
