import Shape from "../ui/Shape/Shape";

const colors = [
    "light-blue",
    "blue",
    "light-orange",
    "orange",
    "light-pink",
    "pink",
];

const Footer: React.FC = () => {
    return (
        <footer className='w-full bg-white'>
            <div className='grid-cols-20 w-[100vw] h-min justify-self-center'>
                {Array.from({ length: 20 }).map((_, index) => (
                    <Shape
                        key={index}
                        color={
                            colors[index % colors.length] as
                                | "light-blue"
                                | "blue"
                                | "light-orange"
                                | "orange"
                                | "light-pink"
                                | "pink"
                        }
                        position={index % 2 === 0 ? "right" : "left"}
                        flipped={index % 2 === 0 ? false : true}
                        size='5vw'
                    />
                ))}
            </div>
        </footer>
    );
};

export default Footer;
