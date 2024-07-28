import { useEffect, useRef } from "react";
import Image from "next/image"; // Import the Image component
import Link from "next/link";
import { IoMenuOutline, IoBagHandleOutline } from "react-icons/io5";

function Header() {
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
    <div className="flex items-center px-[20px] h-[90px] w-full top-0 z-30 bg-white">
      <div className="container">
        <div className="flex justify-between">
          <div className="">
            <Link href="/">
              <Image
                src="/darklogo.png" // Path to your image in the public folder
                alt="Logo"
                width={150} // Specify width
                height={50} // Specify height
              />
            </Link>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              className="text-2xl relative group hover:text-[#a9aaa9] transition-all"
              onClick=""
            >
              <IoBagHandleOutline />
            </button>
            <button
              role="button"
              type="button"
              className="text-2xl hover:text-[#a9aaa9] transition-all"
              onClick=""
            >
              <IoMenuOutline />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
