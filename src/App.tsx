import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hello from "./components/Hello/Hello";
import Work from "./components/Work/Work";
import { useEffect } from "react";

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
            <Header />
            <Hello />
            <About />
            <Work />
            <Contact />
            <Footer />
        </>
    );
};

export default App;
