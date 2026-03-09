import React, { useState, useEffect } from "react";

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [ripples, setRipples] = useState([]);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseDown = (e) => {
            const newRipple = {
                id: Date.now(),
                x: e.clientX,
                y: e.clientY,
            };
            setRipples((prev) => [...prev, newRipple]);

            setTimeout(() => {
                setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
            }, 800);
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mousedown", handleMouseDown);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mousedown", handleMouseDown);
        };
    }, []);

    return (
        <>
            {/* Ripple Effects */}
            {ripples.map((ripple) => (
                <div
                    key={ripple.id}
                    className="ripple-effect"
                    style={{
                        left: ripple.x,
                        top: ripple.y,
                        width: "30px",
                        height: "30px",
                    }}
                />
            ))}

            <div
                className="fixed top-0 left-0 w-full h-[0.5px] bg-white opacity-20 pointer-events-none z-[9999] hidden lg:block"
                style={{ transform: `translateY(${position.y}px)` }}
            />
            <div
                className="fixed top-0 left-0 w-[0.5px] h-full bg-white opacity-20 pointer-events-none z-[9999] hidden lg:block"
                style={{ transform: `translateX(${position.x}px)` }}
            />
        </>
    );
};

export default CustomCursor;
