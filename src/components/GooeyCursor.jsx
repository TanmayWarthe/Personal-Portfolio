import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function GooeyCursor() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smoother spring configurations
    const springConfigMain = { stiffness: 300, damping: 30, mass: 1 };
    const springConfigTrailing = { stiffness: 150, damping: 25, mass: 1.2 };
    const springConfigLast = { stiffness: 100, damping: 30, mass: 1.5 };

    const x1 = useSpring(mouseX, springConfigMain);
    const y1 = useSpring(mouseY, springConfigMain);

    const x2 = useSpring(mouseX, springConfigTrailing);
    const y2 = useSpring(mouseY, springConfigTrailing);

    const x3 = useSpring(mouseX, springConfigLast);
    const y3 = useSpring(mouseY, springConfigLast);

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        // Use passive listener for better scroll performance
        window.addEventListener("mousemove", handleMouseMove, { passive: true });

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [mouseX, mouseY]);

    return (
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
            {/* SVG Filter for Gooey Effect - Reduced deviation for performance */}
            <svg className="absolute w-0 h-0">
                <filter id="goo">
                    <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="15" />
                    <feColorMatrix
                        in="blur"
                        values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 35 -10"
                    />
                </filter>
            </svg>

            <div
                className="w-full h-full opacity-80"
                style={{ filter: "url(#goo)", willChange: "transform" }}
            >
                {/* Main large blob */}
                <motion.div
                    className="absolute w-64 h-64 bg-amber-400/80 -translate-x-1/2 -translate-y-1/2"
                    style={{ x: x3, y: y3, willChange: "transform" }}
                    animate={{
                        rotate: [0, 360],
                        borderRadius: [
                            "30% 70% 70% 30% / 30% 30% 70% 70%",
                            "60% 40% 30% 70% / 60% 30% 70% 40%",
                            "30% 70% 70% 30% / 30% 30% 70% 70%"
                        ]
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
                {/* Medium blob */}
                <motion.div
                    className="absolute w-48 h-48 bg-amber-400/80 -translate-x-1/2 -translate-y-1/2"
                    style={{ x: x2, y: y2, willChange: "transform" }}
                    animate={{
                        rotate: [360, 0],
                        borderRadius: [
                            "50% 50% 20% 80% / 25% 80% 20% 75%",
                            "60% 40% 30% 70% / 60% 30% 70% 40%",
                            "50% 50% 20% 80% / 25% 80% 20% 75%"
                        ]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
                {/* Small leading blob */}
                <motion.div
                    className="absolute w-32 h-32 bg-amber-400/80 -translate-x-1/2 -translate-y-1/2"
                    style={{ x: x1, y: y1, willChange: "transform" }}
                    animate={{
                        rotate: [0, 360],
                        borderRadius: [
                            "40% 60% 60% 40% / 40% 40% 60% 60%",
                            "20% 80% 20% 80% / 20% 80% 20% 80%",
                            "40% 60% 60% 40% / 40% 40% 60% 60%"
                        ]
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
            </div>
        </div>
    );
}
