import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";



const Message = () => {
    useGSAP(() => {
        const firstMsgSplit = SplitText.create(".first-message", {
            type: "words",
        });
        const secondMsgSplit = SplitText.create(".second-message", {
            type: "words",
        });
        const paragraphSplit = SplitText.create(".message-content p", {
            type: "words, lines",
        });

        gsap.to(firstMsgSplit.words, {
            color: "#faeade",
            stagger: 1,
            ease: "power1.in",
            scrollTrigger: {
                trigger: ".message-content",
                start: "top center",
                end: "30% center",
                scrub: true,
            },
        });

         gsap.to(secondMsgSplit.words, {
            color: "#faeade",
            stagger: 1,
            ease: "power1.in",
            scrollTrigger: {
                trigger: ".second-message",
                start: "top center",
                end: "bottom center",
                scrub: true,
            },
        });

        const revealTl = gsap.timeline({
            delay: 0.2,
            scrollTrigger: {
                trigger: ".msg-text-scroll",
               start: "top 50%",
            },
        });

        revealTl.to(".msg-text-scroll", {
            clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0% 100%)",
            ease: "circ.out",
            duration: 0.5,
        });

        const paragraphTl = gsap.timeline({
            scrollTrigger: {
                trigger: ".message-content p",
                start: "top center",
            }
        });
        paragraphTl.from(paragraphSplit.words, {
            yPercent: 300,
            rotate: 3,
            ease: "power1.inOut",
            duration: 1,
            stagger: 0.01,
        });

    });

  return (
    <section className="message-content">
        <div className="container mx-auto flex-center py-28 relative">
            <div className="w-full h-full">
                <div className="msg-wrapper">
                    <h1 className="first-message">Stir up your fearless part and</h1>

                    <div className="msg-text-scroll" style={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" }}>
                        <div className="bg-light-brown md:pb-5 pb-3 px-5">
                            <h2 className="text-red-brown">
                                Fuel Up
                            </h2>
                        </div>
                    </div>

                    <h1 className="second-message">
                        your future with every gulp of Perfect Protein
                    </h1>
                </div>

                <div className="flex-center md:mt-20 mt-10">
                    <p className="max-w-md flex-center overflow-hidden">
                        Rev up your rebel spirit and feed the adventure of life with SPYLT, where you’re one chug away from epic nostalgia and fearless fun.
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Message