import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Player } from "@lottiefiles/react-lottie-player";

const Loader = ({ isLoading, onComplete }) => {
    const loaderWrapperRef = useRef(null);
    const progressRef = useRef(null);
    const numberRef = useRef(null);

    useGSAP(() => {
        if (isLoading) {
            // Lock scrolling while loading
            document.body.style.overflow = "hidden";

            // Ensure loader is visible and reset position
            gsap.set(loaderWrapperRef.current, { yPercent: 0, display: "flex" });

            const tl = gsap.timeline({
                onComplete: () => {
                    // Scroll to top smoothly
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    
                    // Slide the loader up out of view
                    gsap.to(loaderWrapperRef.current, {
                        yPercent: -100,
                        duration: 1,
                        ease: "power4.inOut",
                        delay: 0.2, // Brief pause at 100%
                        onComplete: () => {
                            document.body.style.overflow = ""; // Unlock scrolling
                            if (onComplete) onComplete(); // Tell parent we are done!
                        }
                    });
                }
            });

            // Animate progress bar width
            tl.fromTo(progressRef.current, 
                { width: "0%" }, 
                { width: "100%", duration: 2.5, ease: "power2.inOut" }
            );

            // Animate number counter perfectly in sync
            tl.fromTo(numberRef.current, 
                { innerText: 0 }, 
                { innerText: 100, duration: 2.5, snap: { innerText: 1 }, ease: "power2.inOut" },
                "<" 
            );
        } else {
            // Hide it if not loading
            gsap.set(loaderWrapperRef.current, { display: "none" });
        }
    }, [isLoading]);

    return (
        <div  
            ref={loaderWrapperRef}
            className="fixed inset-0 z-[100] hidden flex-col justify-center items-center bg-dark-brown"
        >
            <div className="w-64 h-64 mb-10 flex-center">
                <Player
                    autoplay
                    loop
                    src="https://cdn.prod.website-files.com/669a8d6498ba88c08dfd2cd2/66fa9021c45a7cc23a105542_spylt_logo.json"
                    style={{ height: '100%', width: '100%' }}
                />
            </div>

            <div className="flex flex-col items-center w-full max-w-sm px-5 gap-2">
                <div className="flex items-end font-sans font-bold text-[#e3d3bc] text-6xl leading-none tracking-tighter">
                    <span ref={numberRef}>0</span>
                    <span>%</span>
                </div>
                <div className="w-full h-1.5 bg-dark-brown overflow-hidden">
                    <div ref={progressRef} className="h-full bg-[#e3d3bc] w-0"></div>
                </div>
            </div>
        </div>
    );
};

export default Loader;