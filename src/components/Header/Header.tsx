import { Link } from "react-scroll";

const links = ["hello", "about", "work", "contact"];

const Header: React.FC = () => {
    const gridCols = links.length;

    const linksMap = links.map((link, index) => (
        <div className='grid justify-center cursor-pointer' key={index}>
            <Link
                activeClass='active'
                to={link}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}>
                {link}
            </Link>
        </div>
    ));
    return (
        <header className='grid bg-white z-[100] fixed w-full top-0 md:left-1/2 md:-translate-x-1/2'>
            <div className='w-full md:max-w-screen-2xl md:mx-auto'>
                <nav
                    className='grid w-full items-center h-20 uppercase text-xs md:px-8 md:max-w-[80%] md:justify-self-center'
                    style={{
                        gridTemplateColumns: `repeat(${gridCols}, minmax(0, 1fr))`,
                    }}>
                    {linksMap}
                </nav>
            </div>
        </header>
    );
};
export default Header;
