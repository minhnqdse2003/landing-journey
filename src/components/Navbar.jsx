"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter();

  const navigationItems = [
    { name: "Clip Path Animation", path: "/clip-path-animation" },
    { name: "PAISANA LIVING", path: "/clone-1" },
  ];

  const handleNavigation = (path) => {
    router.push(path);
    setDropdownOpen(false); // Close dropdown after navigation
  };

  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-center items-center w-full h-[8vh] z-50 relative">
      <div className="relative w-fit h-fit">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="bg-blue-700 px-4 py-2 rounded hover:bg-blue-800"
        >
          Menu
        </button>
        {dropdownOpen && (
          <div className="absolute right-[-50%] mt-2 w-48 bg-white text-black shadow-lg rounded max-h-[50vh] overflow-y-scroll z-50">
            {navigationItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavigation(item.path)}
                className="block w-full text-left px-4 py-2 hover:bg-gray-200"
              >
                {item.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
