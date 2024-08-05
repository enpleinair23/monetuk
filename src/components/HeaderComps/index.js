import Link from "next/link";
import { IoBagHandleOutline } from "react-icons/io5";
import HamburgerMenu from "../HamburgerMenu";
import CartMenu from "../CartMenu";

function Header() {
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
              />
            </Link>
          </div>
          <div className="flex gap-1">
            <CartMenu/>
            <HamburgerMenu />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
