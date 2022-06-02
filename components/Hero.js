import Mint from '../components/Mint'
import Marquee from "react-fast-marquee";
import Roadmap from './Roadmap';
import MobileRoadmap from './MobileRoadmap';
export default function Hero() {

  const images = [1,2,3,1,2,3,1,2,3,1,2,3]

  return (
    <div className="bg-background min-h-[700px] flex flex-col">
      <div className="max-w-screen-xl mx-auto flex-1 flex h-full flex-col-reverse md:flex-row text-white items-stretch">
        <div className="md:w-1/2 self-end px-12 md:pt-12 items-end object-contain">
        <img
          src="/img/content/hero-square.png"
          className="aspect-square"
          alt="Big Plushy NFT bear with a red shirt"
        />
        </div>
        <div className="md:w-1/2 flex flex-col items-center justify-center pt-12 pb-12 lg:py-0">
          <h1 className="tracking-wide font-bold text-6xl md:text-8xl mb-6">
            Plushy NFT
          </h1>
          <p className="text-3xl md:text-4xl tracking-wide text-center px-8 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Mint />
        </div>
      </div>
      <div className="bg-rose py-4 w-full">
      <Marquee
        gradient={false}
        speed={50}
        direction="left"
      >
        {
          images.map((image, i) => {
            return <img key={i} alt="Image of a plushy NFT" src={"/img/content/"+image+".jpeg"} height="250" width="250" className="rounded-lg m-4"/>
          })
        }
      </Marquee>
      <Marquee
        gradient={false}
        speed={50}
        direction="right"
      >
        {
          images.map((image, i) => {
            return <img key={i} alt="Image of a plushy NFT" src={"/img/content/"+image+".jpeg"} height="250" width="250" className="rounded-lg m-4"/>
          })
        }
      </Marquee>
      <div id="about" className="-mt-24 pt-44 flex items-center flex-wrap pb-20 justify-center max-w-screen-lg mx-auto px-4 md:px-8">
          <div className="w-full md:w-1/2 md:p-12">
              <h2 className="tracking-wide font-bold text-5xl lg:text-6xl mb-4">ABOUT PLUSHY</h2>
              <p className="text-3xl lg:text-4xl tracking-wide mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="text-3xl lg:text-4xl tracking-wide">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          </div>
          <div className="mt-12 md:mt-0 w-full md:w-1/2">
            <img src="/img/content/nft.jpeg" alt="Happy plushy bear NFT with a birthday hat" height="450" width="450" className="rounded-lg mx-auto"/>
          </div>
      </div>
      <h2
        id="roadmap"
        className="-mt-32 pt-32 tracking-wide font-bold text-5xl lg:text-6xl mb-4 text-center mb-12"
      >
        ROADMAP
      </h2>
      <div className="hidden md:block">
       <Roadmap />

      </div>
      <div className="md:hidden">

      <MobileRoadmap />
      </div>
      </div>
    </div>
  );
}
