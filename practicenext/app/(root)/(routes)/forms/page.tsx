import React from "react";
import { signup } from "../../../../libs/actions/fetchActions";
const page = () => {
  return (
    <div className="bg-black text-white">
      <form action="signup" method="POST">
        <h1>Signup</h1>
        <input type="text" name="name" placeholder="Name" />
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <input type="submit" value="Signup" />
      </form>
    </div>
  );
};

export default page;
