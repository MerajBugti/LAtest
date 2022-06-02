import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Navlinks from "./Navlinks";
import Drawer from "./Drawer";
import ConnectButton from "../connect/ConnectButton";
import { useModalContext } from "../../lib/modalContext";
export default function Navbar() {
  const [modalOpen, setModalOpen] = useModalContext();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const links = [
    {
      text: "Home",
      href: "/",
      external: false,
    },
    {
      text: "Gallery",
      href: "/#gallery",
      external: false,
      inactive: true,
    },
    {
      text: "Buy",
      href: "/buy",
      external: false,
      inactive: false,
    },
    {
      text: "Atlas",
      href: "/atlas",
      external: false,
    },
    {
      text: "Shop",
      href: "/#shop",
      external: false,
      inactive: true,
    },
  ];

  const router = useRouter();

  useEffect(() => {
    setDrawerOpen(false);
  }, [router.asPath]);

  useEffect(() => {
    if (drawerOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [drawerOpen]);

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`z-50 fixed top-0 left-0 right-0 bg-white border-b border-black/20 py-2 transition-all ${
        scrollY >= 40 && "shadow-md"
      }`}
    >
      <div className="max-w-screen-2xl mx-auto flex justify-between items-center py-3 px-4 md:px-8 relative">
        <div className={`transition-all duration-500 ${router.asPath === "/" ? "lg:opacity-0" : "opacity-100"}`}>
          <img alt="" src="/img/nav-logo.svg" className="h-4 xl:h-8" />
        </div>
        <div
          className={`hidden lg:block transition-all duration-500 absolute transform ${
            router.asPath === "/" ? "left-8" : "left-1/2 -translate-x-1/2"
          }`}
        >
          {!drawerOpen && <Navlinks links={links} />}
        </div>
        <div className="flex-1 flex gap-x-6 justify-end text-black">
          <ConnectButton />
          {!drawerOpen ? (
            <button aria-label="Open mobile menu" onClick={() => setDrawerOpen(true)} className="lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          ) : (
            <button aria-label="Close mobile menu" onClick={() => setDrawerOpen(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      </div>
      <Drawer links={links} drawerOpen={drawerOpen} />
    </div>
  );
}
