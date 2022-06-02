import Navlinks from "./Navlinks";

export default function Drawer({ links, drawerOpen }) {
  return (
    <div className={`relative`}>
      <div
        aria-hidden={!drawerOpen}
        className={`z-40 pt-12 text-white bg-background z-50 top-0 w-screen transition-all h-screen absolute ${
          drawerOpen ? "left-0" : "left-full"
        }`}
      >
        <Navlinks links={links} />
      </div>
    </div>
  );
}
