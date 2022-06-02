export default function MobileRoadmap() {
    return(
      <div className="relative max-w-screen-lg mx-auto px-4 md:px-8 items-stretch text-white">
        <div className="w-1 h-24 bg-black mx-auto relative">
        <div className="h-8 w-8 absolute top-0 bg-background border-4 border-black rounded-full left-1/2 transform -translate-x-1/2" />
        </div>

        <div className="z-10 relative border-4 border-black bg-background rounded-lg p-6">
              <h3 className="text-5xl font-bold tracking-wide mb-3">Phase 1</h3>
              <p className="text-3xl tracking-wide mb-3">
                - launch 999 Plushies on the Ethereum blockchain
              </p>
              <p className="text-3xl tracking-wide">
                - creation of community dao
              </p>
        </div>
        <div className="w-1 bg-black h-24 mx-auto" />
        <div className="z-10 relative border-4 border-black bg-background rounded-lg p-6">
              <h3 className="text-5xl font-bold tracking-wide mb-3">Phase 2</h3>
              <p className="text-3xl tracking-wide mb-3">
               - purchase of metaverse land
              </p>
              <p className="text-3xl tracking-wide">
                - community wallet funded with royalties
              </p>
        </div>
        <div className="w-1 bg-black h-24 mx-auto" />
        <div className="z-10 relative border-4 border-black bg-background rounded-lg p-6">
              <h3 className="text-5xl font-bold tracking-wide mb-3">Phase 3</h3>
              <p className="text-3xl tracking-wide mb-3">
               - expandation of metaverse space
              </p>
              <p className="text-3xl tracking-wide">
                - and much more...
              </p>
        </div>
        <div className="w-1 h-24 bg-black mx-auto relative">
        <div className="h-8 w-8 absolute bottom-0 bg-background border-4 border-black rounded-full left-1/2 transform -translate-x-1/2" />
        </div>
      </div>
    )
}