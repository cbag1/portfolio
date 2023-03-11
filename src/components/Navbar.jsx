import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className=" navbar flex justify-between items-center px-40 py-5 cursor-pointer">
      <header className="text-[#EDA751] font-bold text-lg">
        Cheikh Babacar GOUDIABY
      </header>
      <ul className="flex  list_menu gap-10">
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
      </ul>
      <button className="outline outline-1 outline-[#EDA751] px-4 py-2 rounded-lg hover:bg-[#EDA751] ">
        Resume
      </button>
    </nav>
  );
}

export default Navbar;
