import Head from "next/head";
import Layout from "../components/Layout";

export default function Home() {
  const headData = {
    title: "Addled ClubHouse",
    description: "Web3 Clubhouse. Buy an Addled Crocodile to explore more.",
    favIconUrl: "/favicon.png",
    ogUrl: "https://addled.club/og-image.png",
    site: "@AddledOfficial",
    creator: "@AddledOfficial",
  };

  return (
    <>
      <Head>
        <title>{headData.title}</title>
        <meta name="description" content={headData.description} />
        <link rel="icon" href={headData.favIconUrl} />
        <meta property="og:title" content={headData.title} />
        <meta property="og:description" content={headData.description} />
        <meta property="og:image" content={headData.ogUrl} />
        <meta name="twitter:image" content={headData.ogUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:description" content={headData.description} />
        <meta name="twitter:title" content={headData.title} />
        <meta name="twitter:site" content={headData.site} />
        <meta name="twitter:creator" content={headData.creator} />
        <script defer data-domain="addled.club" src="https://plausible.io/js/plausible.js"></script>
      </Head>
      <>
        <div className="home">
          <img alt="" src="/img/hero.png" className="hero hd-mb" />
          <img alt="" src="/img/hero-logo.svg" className="hero2 hd-dstb" />
          <img alt="" src="/img/hero-croc.svg" className="crocodile hd-dstb" />
        </div>
      </>
      {/*<div className="min-h-screen flex items-center justify-center bg-background py-12">
        <div className="w-3/4 max-w-screen-lg mx-auto z-40">
          <img alt="" src="index-hero.svg" alt="Addled Crocs logo" />
          <p className="my-6 md:mt-24 md:mb-12 text-lg md:text-2xl text-center tracking-wide">
            Come along a journey through the realm of curiosity. 10,000 Addled
            Crocodiles will be up for sale which will double as your membership
            to our clubhouses! Yes, you read it correctly, ClubHouses. Each
            Crocodile holder will have sole ownership of his asset.{" "}
          </p>
          <div className="flex justify-center flex-col md:flex-row">
            <a
              href="https://twitter.com/addledofficial"
              className="h-16 mt-4 md:mt-12 flex items-center justify-center bg-background px-8 sm:px-12 py-3 sm:py-2 rounded-full text-lg sm:text-lg font-bold border-4 border-black tracking-wide transition-all hover:bg-black hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                role="img"
                className="h-8 w-8 mr-4 text-twitter"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Twitter</title>
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
              AddledOfficial
            </a>
            <a href="https://instagram.com/addledofficial" className="h-16 mt-4 md:mt-12 md:ml-12 flex justify-center items-center bg-background px-8 sm:px-12 py-2 sm:py-3 rounded-full text-lg sm:text-lg font-bold border-4 border-black tracking-wide transition-all hover:bg-black hover:text-white" target="_blank" rel="noopener noreferrer">
            <img alt="" src="/icons/Instagram-logo.svg" className="h-8 w-8 mr-4" />
              AddledOfficial
            </a>
          </div>
        </div>
      </div>*/}
    </>
  );
}
