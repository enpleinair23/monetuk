import { useEffect, useRef } from "react";
import Link from "next/link";
import HamburgerMenu from "../HamburgerMenu";
import CartMenu from "../CartMenu";

function TransparentHeader() {
  const header = useRef();
  useEffect(() => {
    window.addEventListener("scroll", isSticky);

    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  const isSticky = (e) => {
    const scrollTop = window.scrollY;

    scrollTop >= 90
      ? header.current?.classList.add("is-sticky")
      : header.current?.classList.remove("is-sticky");
  };

  return (
    <div className="flex items-center px-[20px] h-[90px] w-full absolute top-0 z-30">
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
            <CartMenu />
            <HamburgerMenu />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TransparentHeader;
