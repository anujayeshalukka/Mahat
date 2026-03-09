import React from "react";
import bgImage from "../assets/bg-main.png";
import Banner from "./Banner";
import BackgroundVideo from "./BackgroundVideo";

const Home = ({ opacity = 1, setIsContactOpen }) => {
    return (
        <div
            id="home"
            className="min-h-screen w-full sticky top-0 z-10"
            style={{ opacity }}
        >
            <BackgroundVideo />
            {/* Background Image with Opacity */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed opacity-30 pointer-events-none -z-10"
                style={{ backgroundImage: `url(${bgImage})` }}
            ></div>

            <Banner setIsContactOpen={setIsContactOpen} />

            {/* Scroll Down Indicator */}
            <a
                href="#about"
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer group z-30 animate-bounce-slow no-underline"
            >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f4103f] to-[#1140aa] text-[10px] tracking-[0.3em] font-light uppercase group-hover:opacity-80 transition-opacity duration-300">
                    Scroll Down
                </span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-[#f4103f] via-[#1140aa] to-transparent relative group-hover:opacity-80 transition-opacity duration-300">
                    <div className="absolute top-0 left-[-2px] w-[5px] h-[5px] border-t border-r border-[#f4103f] rotate-[135deg] group-hover:border-[#1140aa] transition-colors duration-300"></div>
                </div>
            </a>
        </div>
    );
};

export default Home;