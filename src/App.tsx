import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import Work from "./components/sections/Work";
import { useEffect } from "react";
import SmoothScroll from "./components/ui/SmoothScroll";

const App: React.FC = () => {
    useEffect(() => {
        console.log(
            `%cHi! if you wonder here's the list of stack used on this page:
%cVite, 
React, 
TS, 
Tailwind,
React Hook Form, 
emailjs, 
Motion for React`,
            "font-size: 1rem; color: violet",
            "font-size: 0.7rem; color: lightblue;"
        );
    }, []);
    return (
        <>
            <SmoothScroll />
            <Header />
            <Hero />
            <About />
            <Work />
            <Contact />
            <Footer />
        </>
    );
};

export default App;
