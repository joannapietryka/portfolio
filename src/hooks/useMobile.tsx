import { useState, useEffect } from "react";

const useMobile = (): boolean => {
    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 1024);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return isMobile;
};

export default useMobile;
