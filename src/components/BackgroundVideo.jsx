import React from "react";
import videoSrc from "../assets/technology.mp4";

const BackgroundVideo = () => {
    return (
        <div className="absolute inset-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
            <video
                className="w-full h-full object-cover grayscale brightness-70 contrast-125 opacity-70"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
           
            <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, #0b011ec2 50%)' }}
            ></div>
        </div>
    );
};

export default BackgroundVideo;
