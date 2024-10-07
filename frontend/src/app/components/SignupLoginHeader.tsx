"use client";

import { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0">
      <div className="container mx-auto px-6 py-4 flex justify-center items-center">
        <div className="text-3xl font-bold text-green-500">Take Five</div>
       
      </div>
      
    </header>
  );
};

export default Header;
