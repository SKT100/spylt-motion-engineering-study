import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const VideoPin = () => {
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".vd-pin-section",
                start: "-15% top",
                end: "200% top",
                scrub: true,
                pin: true,
            },
        });

        tl.to(".video-box",{
            clipPath:"circle(100% at 50% 50%)",
            ease:"power1.inOut",
        })
    })

  return (
    <section className="vd-pin-section">
        <div style={{
            clipPath:"circle(6% at 50% 50%)",
        }} className="size-full video-box ">
            <video src="/video/pin-video.mp4" playsInline muted autoPlay loop/>

            <div className="abs-center md:scale-100 scale-200">
                <img src="/images/circle-text.svg" alt="play-text" className="spin-circle" />
                <div className="play-btn">
                    <img src="/images/play.svg" alt="play-btn" className="size-[3vw] ml-[0.5vw]" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default VideoPin