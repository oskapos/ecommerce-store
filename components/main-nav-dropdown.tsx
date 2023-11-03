"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Category } from "@/types";

// const MainNavDropdown = ({ data }: { data: Category[] }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => setIsOpen(!isOpen);

//   return (
//     <div className="relative md:hidden">
//       <button onClick={toggleMenu} className="mx-6">
//         Categories
//       </button>
//       {isOpen && (
//         <div className="absolute z-10 w-32 flex flex-col justify-center items-center">
//           {data.map((item) => (
//             <Link
//               key={item.id}
//               href={`/category/${item.id}`}
//               className={cn(
//                 "block py-2 px-4 bg-white text-sm font-medium transition-colors hover:text-black",
//                 "text-black"
//               )}
//             >
//               {item.name}
//             </Link>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default MainNavDropdown;

const ServicesMenu = ({ data }: { data: Category[] }) => {
  const [isHovered, setIsHovered] = useState(false);

  const toggleMenu = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div className="flex flex-col items-center md:hidden" onMouseEnter={toggleMenu} onMouseLeave={toggleMenu}>
      <div className="z-30 flex items-center justify-center">
        <button onClick={toggleMenu}>
          <div className="flex items-center gap-1">
            <p className="text-center">Categories</p>
            <svg
              className={`w-3 h-3 inline-block transform ${isHovered ? "rotate-180" : "rotate-0"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
        </button>
      </div>

      <div
        className={` absolute flex flex-col gap-1 items-center z-20 transition-all duration-500 ease-in-out transform ${
          isHovered ? "opacity-100 translate-y-8" : "h-0 opacity-0 -translate-y-0"
        }`}
      >
        {data.map((item) => (
          <Link
            onClick={toggleMenu}
            key={item.id}
            href={`/category/${item.id}`}
            className={"text-xs font-medium text-neutral-500"}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServicesMenu;
