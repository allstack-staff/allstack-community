import React from "react";
import { NavBar } from "./components/";

function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <body className="min-h-screen min-w-screen">
      <NavBar />
      <main className="3xl:flex 3xl:items-center 3xl:justify-center">{children}</main>
    </body>
  );
}

export default AuthLayout;
