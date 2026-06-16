import ClipPathTitle from "../components/ClipPathTitle"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import VideoPin from "../components/VideoPin";


const Benefit = () => {

    useGSAP(()=>{
        const revealTl = gsap.timeline({
            delay:1,
            scrollTrigger:{
                trigger:".benefit-section",
                start:"top 60%",
                end:"top top",
                scrub:1.5,
            }
        })

        revealTl.to(".benefit-section .first-title", {
            duration:1,
            opacity:1,
            clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease:"circ.out"
        })
        .to(".benefit-section .second-title", {
            duration:1,
            opacity:1,
            clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease:"circ.out"
        })
        .to(".benefit-section .third-title", {
            duration:1,
            opacity:1,
            clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease:"circ.out"
        })
        .to(".benefit-section .fourth-title", {
            duration:1,
            opacity:1,
            clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease:"circ.out"
        })
    });
  return (
    <section className="benefit-section">
        <div className="container mx-auto pt-20">
            <div className="col-center">
                <p>
                    Unlock the Advantages:<br /> 
                    Explore the Key Benefits of Choosing SPYLT
                </p>

                <div className="mt-20 col-center">
                    <ClipPathTitle 
                    title={"Shelf stable"}
                    color={"#faeade"}
                    bg={"#c88e64"}
                    className={"first-title"}
                    borderColor={"#222123"}
                    />
                    <ClipPathTitle 
                    title={"Protein + Caffein"}
                    color={"#222123"}
                    bg={"#faeade"}
                    className={"second-title"}
                    borderColor={"#222123"}
                    />
                    <ClipPathTitle 
                    title={"infinitely recyclable"}
                    color={"#faeade"}
                    bg={"#7f3b2d"}
                    className={"third-title"}
                    borderColor={"#222123"}
                    />
                    <ClipPathTitle 
                    title={"lactose free"}
                    color={"#2e2d2f"}
                    bg={"#fed775"}
                    className={"fourth-title"}
                    borderColor={"#222123"}
                    />
                </div>

                <div className="md:mt-0 mt-30">
                   <p> and much more... </p>
                </div>
            </div>
        </div>
        <div className="">
            <VideoPin />
        </div>

    </section>
  )
}

export default Benefit