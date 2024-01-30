import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./header";
import { Footer } from "./footer";
import "./layout.css";

export const MainLayout = () => {
  return (
    <div className="wrapper">
      <div>
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};
