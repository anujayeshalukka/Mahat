import React, { useRef, useEffect } from 'react';

const ParticleWaves = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let scrollY = window.scrollY;

        const handleScroll = () => {
            scrollY = window.scrollY;
        };
        window.addEventListener('scroll', handleScroll);

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', resize);
        resize();

        // Wave parameters
        const gap = 35;
        const totalPointsX = Math.ceil(canvas.width / gap) + 15;
        const totalPointsY = Math.ceil(canvas.height / gap) + 10;
        const particles = [];

        for (let i = 0; i < totalPointsX; i++) {
            for (let j = 0; j < totalPointsY; j++) {
                particles.push({
                    x: (i - 7) * gap,
                    z: (j - 5) * gap,
                    baseY: 0
                });
            }
        }

        const render = (time) => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;
            const perspective = 800;

            // Adjust phase and amplitude based on scroll
            const scrollFactor = scrollY * 0.002;
            const timeFactor = time * 0.001;

            particles.forEach(p => {
                // Wave calculations
                const d = Math.sqrt(p.x * p.x + p.z * p.z) * 0.005;
                const wave1 = Math.sin(d - timeFactor - scrollFactor) * 40;
                const wave2 = Math.cos(p.x * 0.005 + timeFactor + scrollFactor) * 20;
                const y = wave1 + wave2;

                // Simple 3D projection
                const scale = perspective / (perspective + p.z + 200);
                const x2D = p.x * scale + centerX;
                const y2D = (y + 150) * scale + centerY;

                if (x2D > 0 && x2D < canvas.width && y2D > 0 && y2D < canvas.height) {
                    const opacity = Math.max(0, Math.min(1, scale * 1.5 - 0.2));

                    // Logic for color distribution (cyan and purple)
                    const colorValue = (Math.sin(p.x * 0.01 + p.z * 0.01 + timeFactor) + 1) / 2;
                    if (colorValue > 0.6) {
                        ctx.fillStyle = `rgba(176, 38, 255, ${opacity})`; // Purple
                    } else {
                        ctx.fillStyle = `rgba(0, 242, 255, ${opacity})`; // Cyan
                    }

                    const dotSize = Math.max(0.5, scale * 2.5);
                    ctx.beginPath();
                    ctx.arc(x2D, y2D, dotSize, 0, Math.PI * 2);
                    ctx.fill();
                }
            });

            animationFrameId = requestAnimationFrame(render);
        };

        render(0);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
        />
    );
};

export default ParticleWaves;
