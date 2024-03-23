import React from "react";
import NavigationHeader from "../NavigationHeader";
// import Search from "./Search";

const Navbar = () => {
  return (
    <nav className="bg-black fixed top-0 left-0 right-0 z-50 flex items-center justify-between py-4 px-6 h-20 text-white">
      <NavigationHeader />
      {/* <Search /> */}
    </nav>
  );
};

export default Navbar;