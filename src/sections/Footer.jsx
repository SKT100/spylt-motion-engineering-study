import { useRef, useEffect } from "react";

const Footer = () => {
  // 1. Create a reference to target the video element
  const videoRef = useRef(null);

  // 2. Set up the Intersection Observer to play video on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        // If the footer is in view and the video exists, play it
        if (entry.isIntersecting && videoRef.current) {
          videoRef.current.play();
          // Stop observing once it plays so it doesn't restart on scroll up/down
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }, // Trigger when 20% of the footer is visible
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <section className="footer-section">
      <img
        src="/images/footer-dip.png"
        alt="footer-dip-effect"
        className="w-full object-cover -translate-y-1 relative z-20"
      />

      {/* 3. Increased min-height to 110vh and added pt-[15vh] to reveal the top splash */}
      <div className="relative w-full min-h-[110vh] flex flex-col justify-between pt-[15vh] pb-32 md:pb-24">
        <video
          ref={videoRef}
          src="/video/splash.mp4"
          playsInline
          muted
          className="absolute inset-0 w-full h-full object-cover object-top origin-top scale-[1.02] mix-blend-lighten pointer-events-none z-10"
        />

        {/* Top Content: Title & Social Icons */}
        <div className="relative z-20 flex flex-col items-center w-full">
          <div className="overflow-hidden">
            <h1 className="general-title text-center text-milk py-2">
              #CHUGRESPONSIBILY
            </h1>
          </div>

          <div className="flex-center gap-5 md:mt-5 mt-2">
            <div className="social-btn">
              <img src="/images/yt.svg" alt="youtube-link" />
            </div>
            <div className="social-btn">
              <img src="/images/insta.svg" alt="instagram-link" />
            </div>
            <div className="social-btn">
              <img src="/images/tiktok.svg" alt="tiktok-link" />
            </div>
          </div>
        </div>

        {/* Bottom Content: Navigation & Newsletter */}
        <div className="relative z-20 w-full md:px-10 px-5 flex flex-col md:flex-row justify-between md:items-end text-milk font-paragraph md:text-lg text-medium gap-12 mt-auto">
          <div className="flex flex-wrap md:flex-nowrap items-start md:gap-16 gap-8 w-full md:w-auto">
            <div className="flex flex-col gap-3">
              <p className="font-bold">SPYLT Flavors</p>
            </div>

            <div className="flex flex-col gap-3">
              <p className="cursor-pointer hover:text-white transition-colors">
                Chug Club
              </p>
              <p className="cursor-pointer hover:text-white transition-colors">
                Student Marketing
              </p>
              <p className="cursor-pointer hover:text-white transition-colors">
                Dairy Dealers
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <p className="cursor-pointer hover:text-white transition-colors">
                Company
              </p>
              <p className="cursor-pointer hover:text-white transition-colors">
                Contacts
              </p>
              <p className="cursor-pointer hover:text-white transition-colors">
                Tasty Talk
              </p>
            </div>
          </div>

          <div className="md:max-w-md w-full">
            <p className="mb-6 leading-relaxed">
              Get Exclusive Early Access and Stay Informed About Product
              Updates, Events, and More!
            </p>
            <div className="flex justify-between items-center border-b border-[#d9d9d9] pb-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent outline-none placeholder:font-sans placeholder:text-[#999999] text-white"
              />
              <button
                type="button"
                className="hover:scale-110 transition-transform"
              >
                <img src="/images/arrow.svg" alt="arrow" />
              </button>
            </div>
          </div>
        </div>

        {/* Copyright Box */}
        <div className="copyright-box z-20">
          <p>Copyright @ 2026 Spylt - All Rights Reserved</p>
          <div className="flex items-center gap-7">
            <p className="cursor-pointer hover:text-white transition-colors">
              Privacy Policy
            </p>
            <p className="cursor-pointer hover:text-white transition-colors">
              Terms & Services
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
