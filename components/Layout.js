import Navbar from "./navigation/Navbar";
import Footer from "./Footer";
import Modal from './connect/Modal'
import { useEffect } from "react";
export default function Layout({children}) {

    useEffect(() => {
        console.log("rendered")
    }, [])

    return(
        <div className="min-h-screen flex flex-col relative">
            <Navbar />
            
            
            <main className="flex-1 pt-16">
                {children}
            </main>
            {/*<Footer />*/}
            <Modal />
        </div>
    )
}