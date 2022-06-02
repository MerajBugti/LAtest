import Head from 'next/head'

export default function HeadTag({ title, description, ogImagePath }) {

    const defaultData = {
        domain: "https://addled.club/",
        twitterHandle: "@AddledOfficial",
        title: "Addled Crocs",
        description: "Web3 ClubHouse for business, technology, sports and recreation enthusiasts. Buy a Crocodile to explore The Trinity."
    }

    return(
        <Head>
            <title>{title ? `${title}` : `${defaultData.title}`}</title>
            <link rel="icon" href="/favicon.png" type="image/png" />
            <meta name="description" content={description ? `${description}` : `${defaultData.description}`} />
            <meta property="og:title" content={title ? `${title}` : `${defaultData.title}`} />
            {ogImagePath ? 
                <>
                    <meta property="og:image" content={defaultData.domain+ogImagePath} />
                    <meta name="twitter:image" content={defaultData.domain+ogImagePath} />
                </>
                :
                <>
                    <meta property="og:image" content={defaultData.domain+"/og-image.png"} />
                    <meta name="twitter:image" content={defaultData.domain+"/og-image.png"} />
                </>
            }
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:description" content={description ? `${description}` : `${defaultData.description}`} />
            <meta name="twitter:title" content={title ? `${title}` : `${defaultData.title}`} />
            <meta name="twitter:site" content={defaultData.twitterHandle} />
            <meta name="twitter:creator" content={defaultData.twitterHandle} />
        </Head>
    )

}