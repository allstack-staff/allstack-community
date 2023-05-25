import React from "react";
import { NavBar } from "./components/";

function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <body className="min-h-screen min-w-screen">
      <NavBar />
      <main>{children}</main>
    </body>
  );
}

export default AuthLayout;
