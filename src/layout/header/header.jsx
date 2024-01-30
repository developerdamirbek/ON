import React from "react";
import { Logo } from "../../assets/logo";
import { links } from "./data";
import { HeaderButtons } from "./components/header-buttons/header-buttons";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div className="container box">
        <Logo />
        <ul>
          {links.map((item) => (
            <Link key={item.path} to={item.path}>
              {item.name}
            </Link>
          ))}
        </ul>
        <HeaderButtons />
      </div>
    </header>
  );
};
