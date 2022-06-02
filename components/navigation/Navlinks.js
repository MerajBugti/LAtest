import Link from "next/link";
import { useRouter } from "next/router";

export default function Navlinks({ links }) {
  return (
    <nav className="flex flex-col w-max mx-auto justify-center items-center md:flex-row gap-x-3 xl:gap-x-6 gap-y-3">
      {links.map((link, i) => {
        return <NavLink link={link} key={i} />;
      })}
      <a
        href="https://www.instagram.com/addledofficial/"
        className="bg-beige border-2 border-lightBeige md:self-stretch flex items-center py-1 md:py-0 px-2 transition-all hover:border-black"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/icons/instagram.png" className="h-7" />
      </a>
      <a
        href="https://twitter.com/AddledOfficial"
        className="bg-beige border-2 border-lightBeige md:self-stretch flex items-center py-1 md:py-0 px-2 transition-all hover:border-black"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/icons/twitter.png" className="h-7" />
      </a>
      <a
        href="#"
        className="bg-beige border-2 border-lightBeige md:self-stretch flex items-center py-1 md:py-0 px-2 transition-all hover:border-black"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/icons/telegram.png" className="h-7" />
      </a>
      <div className="opacity-30 cursor-not-allowed bg-beige border-2 border-lightBeige md:self-stretch flex items-center py-1 md:py-0 px-2">
        <img src="/icons/discord.svg" className="h-6" />
      </div>
    </nav>
  );
}

const NavLink = ({ link }) => {
  const router = useRouter();

  return !link.inactive ? (
    <Link href={link.href}>
      <a
        className={`text-black bg-beige uppercase tracking-widest border-2 font-bold px-3 py-1 transition-all hover:border-black ${
          router.asPath == link.href ? "border-black" : "border-lightBeige"
        }`}
      >
        {link.text}
      </a>
    </Link>
  ) : (
    <p className="text-black bg-beige uppercase tracking-widest border-2 font-bold px-3 py-1 transition-all border-lightBeige cursor-not-allowed opacity-40">
      {link.text}
    </p>
  );
};
