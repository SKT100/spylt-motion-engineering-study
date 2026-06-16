import Magnet from "./Magnet";

const Navbar = ({ onLogoClick }) => {
    return (
        <nav className="fixed top-0 left-8 z-40 md:p-9 p-3 pointer-events-auto">

            <Magnet 
                padding={30} 
                magnetStrength={3}
                onClick={onLogoClick}
                wrapperClassName="cursor-pointer group" // Added group here for hover effects
            >
                <img 
                    src="/images/nav-logo.svg" 
                    alt="logo-nav" 
                    // Let Tailwind handle the scale hover effect
                    className="md:w-24 w-28 transition-transform duration-300 group-hover:scale-105"
                />
            </Magnet>
        </nav>
    );
};

export default Navbar;