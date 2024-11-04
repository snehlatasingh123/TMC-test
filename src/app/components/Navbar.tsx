"use client";
import React from "react";
import Image from "next/image";

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between w-full p-4 bg-white">
      {/* Left Section: Menu Icon and Logo  */}
      <div className="flex items-center space-x-4">
        <Image src="/menu.svg" alt="Menu" width={23} height={17} />
        <Image src="/tmc-logo.svg" alt="Logo" width={107.32} height={36} />
      </div>
      {/* Right Section: Search Icon and Sign-Up Button */}
      <div className="flex items-center space-x-4">
        <Image
          src="/search-icon.svg"
          alt="Search-Icon"
          width={18}
          height={18}
        />
        <Image src="/signup-button.svg" alt="Logo" width={108} height={36} />
      </div>
    </nav>
  );
};

export default Navbar;
