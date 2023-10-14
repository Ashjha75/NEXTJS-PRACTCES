import React from "react";

const UserPosts = async ({ promise }: { promise: Promise<Post[]> }) => {
  const postData = await promise;

  return (
    <div className="pl-10 pt-10 ">
      Posts
      {postData.map((post) => {
        return (
          <>
            <p key={post.id} className="text-yellow-400">
              {post.title}
            </p>
            <p>{post.body}</p>
          </>
        );
      })}
    </div>
  );
};

export default UserPosts;
