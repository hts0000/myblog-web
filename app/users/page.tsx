"use client";

import { signOut } from "next-auth/react";
import React from "react";

type Props = {};

const Users = (props: Props) => {
  return (
    <button
      onClick={() => {
        signOut();
      }}
    >
      Logout
    </button>
  );
};

export default Users;
