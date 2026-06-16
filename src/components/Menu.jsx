import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Magnet from "./Magnet";
import { menuItems, defaultMenuImg } from "../constants";

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hoveredItem, setHoveredItem] = useState(null);
    
    const menuRef = useRef(null);
    const linksRef = useRef([]);
    const tl = useRef(null);

    useGSAP(() => {
        gsap.set(menuRef.current, { yPercent: -100, display: "none" });

        tl.current = gsap.timeline({ paused: true })
            .set(menuRef.current, { display: "flex" })
            .to(menuRef.current, { 
                yPercent: 0, 
                duration: 0.8, 
                ease: "power4.inOut" 
            })
            // GSAP animates the wrapper divs here
            .from(linksRef.current, { 
                y: 100, 
                opacity: 0, 
                stagger: 0.05, 
                duration: 0.6, 
                ease: "power3.out" 
            }, "-=0.4"); 
    }, []);

    useGSAP(() => {
        if (isOpen) {
            tl.current.play();
            document.body.style.overflow = "hidden"; 
        } else {
            tl.current.reverse();
            document.body.style.overflow = ""; 
            setHoveredItem(null);
        }
    }, [isOpen]);

    return (
        <>
            {/* Hamburger Button */}
            <div className="fixed top-8 left-1/2 -translate-x-1/2 z-[70] pointer-events-auto">
                <Magnet padding={30} magnetStrength={3} wrapperClassName="group">
                    <button 
                        onClick={() => setIsOpen(!isOpen)} 
                        className="w-16 h-16 flex flex-col justify-center items-center gap-[6px] rounded-full bg-transparent border-none cursor-pointer"
                    >
                        <div className={`h-[2px] w-8 bg-dark-brown transition-all duration-500 origin-center ${
                            isOpen ? 'translate-y-[4px] rotate-45' : ''
                        }`} />
                        <div className={`h-[2px] w-8 bg-dark-brown transition-all duration-500 origin-center ${
                            isOpen ? '-translate-y-[4px] -rotate-45' : ''
                        }`} />
                    </button>
                </Magnet>
            </div>

            {/* Menu Overlay */}
            <div 
                ref={menuRef} 
                className="fixed inset-0 z-[60] bg-milk flex md:flex-row flex-col overflow-hidden"
            >
                {/* Left Side: Solid bg-milk ensures dark-brown text is always readable */}
                <div className="md:w-1/2 w-full h-full bg-milk flex flex-col justify-center items-center px-10 md:px-20 relative z-20 pt-20 md:pt-0">
                    
                    <div 
                        className="flex flex-col gap-2" 
                        onMouseLeave={() => setHoveredItem(null)}
                    >
                        {menuItems.map((item, index) => (
                            <div 
                                key={item.id} 
                                className="overflow-hidden flex justify-center"
                                // FIX: The ref is now on the wrapper div, avoiding the GSAP inline style conflict!
                                ref={(el) => (linksRef.current[index] = el)}
                            >
                                <a 
                                    href={`#${item.id}`}
                                    onMouseEnter={() => setHoveredItem(item.id)}
                                    onMouseLeave={() => setHoveredItem(null)}
                                    onClick={() => setIsOpen(false)}
                                    // Tailwind is now free to control the a-tag opacity perfectly
                                    className={`inline-block font-sans font-bold uppercase text-[9vw] md:text-[4.5vw] leading-[100%] tracking-tighter text-dark-brown transition-opacity duration-300 text-center py-1 md:py-2 px-4 ${
                                        hoveredItem === null 
                                            ? "opacity-100" 
                                            : hoveredItem === item.id 
                                                ? "opacity-100" 
                                                : "opacity-20"
                                    }`}
                                >
                                    {item.name}
                                </a>
                            </div>
                        ))}
                    </div>

                    <div className="flex gap-6 mt-16 font-paragraph text-dark-brown font-semibold opacity-50">
                        <a href="#" className="hover:opacity-100 transition-opacity">YouTube</a>
                        <a href="#" className="hover:opacity-100 transition-opacity">Instagram</a>
                        <a href="#" className="hover:opacity-100 transition-opacity">TikTok</a>
                    </div>
                </div>

                {/* Right Side: Images */}
                <div className="md:w-1/2 w-full h-full absolute md:relative right-0 top-0 z-10 md:bg-dark-brown hidden md:block">
                    <img 
                        src={defaultMenuImg} 
                        alt="Menu Default" 
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                            hoveredItem ? 'opacity-0' : 'opacity-100'
                        }`}
                    />

                    {menuItems.map((item) => (
                        <img 
                            key={item.id}
                            src={item.img} 
                            alt={item.name} 
                            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                                hoveredItem === item.id ? 'opacity-100' : 'opacity-0'
                            }`}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Menu;