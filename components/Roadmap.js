export default function Roadmap() {

  const steps = [
    {
      heading: "???",
      list: ["It is time for us to take ourselves seriously..."],
      active: false
    },
    {
      heading: "Hello, Discord",
      list: ["Addled Discord Server to settle some nerves...", "OH! 10 drops for 10 random Addled Members"],
      active: false
    },
    {
      heading: "Is it christmas?",
      list: ["So you are telling me we have to make more stuff for real real, like 50% real ?!? Trinity atlas release..."],
      active: false
    },
    {
      heading: "AddledTube",
      list: ["Addled YouTube Channel,place to unscrew your brains...", "WE GOT YOU!!10 drops for 10 more to fiddled members"],
      active: false
    },
    {
      heading: "Gear up",
      list: ["First ClubHouse Put into Works from Creation Center...", "members-exclusive merch, limited-time gear, etc."],
      active: false
    },
    {
      heading: "LOL! HUNT TIME!!",
      list: ["Addled Liquidity Pool Initiated...", "treasure hunt - 5ETH + 5 Rare Addled Crocodiles"],
      active: false
    }
  ]


  return (
      <div className="mt-24 flex flex-col flex-wrap xl:max-h-[400px] gap-x-12">
        {
          steps.map((step, i) => {
            return(
              <div key={i} className="mx-auto flex mb-5 w-full md:w-1/2">
                <div>
                  <div className={`mt-6 w-1 bg-black h-full relative ${step.active ? "opacity-100" : "opacity-30"}`}>
                    <div className="w-3 h-3 bg-black rounded-full absolute left-1/2 transform -translate-x-1/2 -top-4" />
                  </div>
                </div>
                <div className="flex-1 pl-8">
                  <h3 className="text-2xl font-bold tracking-wide mb-4">{step.heading}</h3>
                  <ul className="list-disc pl-4">
                    {step.list.map((item, i) => {
                      return <li key={i} className="text-sm">{item}</li>
                    })}
                  </ul>
                </div>
              </div>
            )
          })
        }
      </div>
  );
}
