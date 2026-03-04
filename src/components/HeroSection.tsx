import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import React from "react";
import FloatingImage from "./FloatingImage";
import floatImage1 from "@/assets/float-image-1.png";
import floatImage2 from "@/assets/float-image-2.png";
import floatImage3 from "@/assets/float-image-3.png";
import glassCube from "@/assets/glass-cube.png";

interface HeroTagProps {
  text: string;
  className?: string;
  rotation?: number;
  mouseOffset?: { x: number; y: number };
  intensity?: number;
}

const HeroTag = ({ text, className = "", rotation = 0, mouseOffset = { x: 0, y: 0 }, intensity = 1 }: HeroTagProps) => {
  // Apply subtle movement based on cursor position with intensity multiplier
  const offsetX = mouseOffset.x * intensity * 15; // Max 15px movement
  const offsetY = mouseOffset.y * intensity * 15;

  return (
    <motion.div
      style={{ "--rotate": `${rotation}deg` } as any}
      className={`absolute z-40 bg-card/90 backdrop-blur-sm px-4 py-2 md:px-6 md:py-3 rounded-full shadow-lg border border-border/50 text-sm md:text-base font-medium text-card-foreground select-none whitespace-nowrap ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: 1,
        scale: 1,
        x: offsetX,
        y: offsetY,
        rotate: rotation
      }}
      transition={{
        opacity: { delay: 1.2, duration: 0.5 },
        scale: { delay: 1.2, duration: 0.5 },
        x: { duration: 0.3, ease: "easeOut" },
        y: { duration: 0.3, ease: "easeOut" },
        rotate: { duration: 0.3, ease: "easeOut" }
      }}
    >
      {text}
    </motion.div>
  );
};

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLHeadingElement>) => {
    if (!titleRef.current) return;
    const rect = titleRef.current.getBoundingClientRect();
    // Calculate mouse position relative to center of the element (-1 to 1)
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setMouseOffset({ x, y });
  };

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
  };

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  // Parallax transforms for floating elements
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const yCube = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const subtitleY = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Subtitle */}
      <motion.p
        style={{ y: subtitleY }}
        className="absolute top-24 md:top-28 font-body text-lg md:text-xl tracking-wide text-primary"
      >
        We are
      </motion.p>

      {/* Main Title Container - Centered vertically */}
      <div className="relative w-full flex items-center justify-center">

        {/* Glass cube - top left decorative - BEHIND */}
        <motion.img
          src={glassCube}
          alt="Glass cube"
          style={{ y: yCube }}
          className="absolute z-0 w-36 h-36 md:w-52 md:h-52 lg:w-64 lg:h-64 left-[5%] md:left-[10%] top-[10%] animate-float-slow opacity-80 pointer-events-none"
          initial={{ rotate: -15 }}
        />

        {/* Image 1 - inside the O/R area - BEHIND TEXT */}
        <motion.div
          style={{ y: y1 }}
          className="absolute z-10 w-48 h-64 md:w-64 md:h-80 lg:w-72 lg:h-96 left-[15%] md:left-[18%] lg:left-[20%] top-1/2 -translate-y-[40%]"
        >
          <FloatingImage
            src={floatImage1}
            alt="Botanical specimen"
            className="w-full h-full !relative !transform-none"
            rotation={-6}
            animationClass="animate-float"
          />
        </motion.div>

        {/* Image 3 - right side - BEHIND TEXT */}
        <motion.div
          style={{ y: y3 }}
          className="absolute z-10 w-48 h-64 md:w-64 md:h-80 lg:w-72 lg:h-96 right-[5%] md:right-[8%] lg:right-[10%] top-[35%] md:top-[30%]"
        >
          <FloatingImage
            src={floatImage3}
            alt="Dried flowers arrangement"
            className="w-full h-full !relative !transform-none"
            rotation={6}
            animationClass="animate-float-slow"
          />
        </motion.div>

        {/* Image 2 - center - IN FRONT OF TEXT */}
        <motion.div
          style={{ y: y2 }}
          className="absolute z-10 w-52 h-68 md:w-72 md:h-96 lg:w-80 lg:h-[28rem] left-[55%] -translate-x-1/2 top-[15%]"
        >
          <FloatingImage
            src={floatImage2}
            alt="Blue watercolor abstract"
            className="w-full h-full !relative !transform-none"
            rotation={0}
            animationClass="animate-float-delayed"
          />
        </motion.div>

        {/* Giant Typography - extends beyond viewport - MIDDLE LAYER */}
        <motion.h1
          ref={titleRef}
          style={{ y: titleY, opacity: titleOpacity }}
          className="relative z-20 font-display text-hero-title text-[32vw] md:text-[28vw] lg:text-[26vw] leading-[0.8] tracking-[0.10em] text-center select-none whitespace-nowrap"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {"PROPILO".split("").map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className="inline-block transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-4 cursor-default"
            >
              {letter}
            </motion.span>
          ))}
        </motion.h1>



        <HeroTag
          text="Visual Design"
          className="left-[5%] md:left-[10%] top-[25%] md:top-[20%]"
          rotation={-12}
          mouseOffset={mouseOffset}
          intensity={1}
        />
        <HeroTag
          text="Web development"
          className="right-[5%] md:right-[15%] top-[20%] md:top-[18%]"
          rotation={8}
          mouseOffset={mouseOffset}
          intensity={0.8}
        />
        <HeroTag
          text="Brand design"
          className="left-[10%] md:left-[18%] bottom-[35%] md:bottom-[40%]"
          rotation={5}
          mouseOffset={mouseOffset}
          intensity={1.2}
        />
        <HeroTag
          text="Product Design"
          className="right-[10%] md:right-[22%] bottom-[30%] md:bottom-[35%]"
          rotation={-6}
          mouseOffset={mouseOffset}
          intensity={0.9}
        />
      </div>

      {/* Tagline - positioned at bottom */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute bottom-12 md:bottom-16 z-10 max-w-2xl mx-auto text-center px-6"
      >
        <p className="font-body text-foreground text-base md:text-lg leading-relaxed">
          Crafting bold digital experiences that help brands grow
          and stand out. From strategy into impactful digital
          solutions.
        </p>
      </motion.div>
    </section>
  );
};

export default HeroSection;
