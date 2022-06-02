import Layout from "../components/Layout"
import Roadmap from "../components/Roadmap"
import HeadTag from "../components/HeadTag"

export default function Atlas() {
    return(
        <>
            <HeadTag
                title="Addled Atlas"
                description="Curiosity is the seed of creation..."
            />
            <div className="min-h-screen pt-16 flex flex-col">
                <div className="max-w-screen-xl mx-auto px-4 md:px-8 w-full relative pb-32 sm:pb-20 sm:pt-6">
                    <div className="w-full md:w-min flex">
                        <div className="md:mr-12 w-full text-center md:text-right">
                        <h1 className="font-bold text-5xl tracking-wide mb-4">COGNITIVE <br className="hidden md:block" />ATLAS</h1>
                        <p>Curiosity is the seed of creation...</p>
                    </div>
                    <img alt="" src="/img/book.svg" className="hidden md:block" />
                    </div>
                </div>
                <div className="bg-beige flex-1 relative md:pt-24 pb-12">
                    <div className="absolute right-0 -top-[125px] h-[250px]  md:-top-[175px] md:h-[350px] lg:-top-[250px] lg:h-[500px] object-contain" >
                    <img alt="" src="/img/hero-croc.png" className="h-full" />
                    </div>
                    <div className="max-w-screen-xl mx-auto px-4 md:px-8 mt-24 xl:mt-0">
                        <h2 className="text-4xl text-center mb-6 font-bold tracking-wide">SELLING ROADMAP</h2>
                        <p className="text-center max-w-[500px] mx-auto">Come Along a journey through the realm of curiosity. mint 1 of 10,000 Addled Crocodile to gain access to explore the world of unkown...</p>
                        <Roadmap />
                    </div>
                </div>
            </div>
        </>
    )
}