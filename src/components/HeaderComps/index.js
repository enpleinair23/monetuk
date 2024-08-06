import Link from "next/link";
import HamburgerMenu from "../HamburgerMenu";
import CartMenu from "../CartMenu";
import { CartProvider } from "../../context/CartContext";
import { useState } from 'react';

function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => setIsCartOpen(!isCartOpen);
  const closeCart = () => setIsCartOpen(false);

  return (
    <div className="flex items-center px-[20px] h-[90px] w-full top-0 z-30 bg-white">
      <div className="container">
        <div className="flex justify-between">
          <div className="">
            <Link href="/">
              <img
                src="/darklogo.png" // Path to your image in the public folder
                alt="Logo"
                width={150} // Specify width
                height={50} // Specify height
                className="hover:opacity-75 opacity-75"
              />
            </Link>
          </div>
          <div className="flex gap-1">
            <HamburgerMenu />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
