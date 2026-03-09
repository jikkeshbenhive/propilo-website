import { motion, useMotionValue, animate, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import floatImage2 from "@/assets/home/about/3.jpg";
import floatImage3 from "@/assets/home/about/1.jpg";
import floatImage1 from "@/assets/home/about/2.jpg";

/* ------------------------------------------------------------------ */
/*  Floating card data                                                 */
/* ------------------------------------------------------------------ */
const cards = [
  {
    src: floatImage3,
    alt: "Blue ink",
    rotate: -4,
    offsetX: 60,
    offsetY: -18,
    floatDelay: 1,
    zIndex: 2,
  },
  {
    src: floatImage2,
    alt: "Orange flowers",
    rotate: 5,
    offsetX: 150,
    offsetY: -8,
    floatDelay: 2,
    zIndex: 3,
  },
  {
    src: floatImage1,
    alt: "Glass cube",
    rotate: 14,
    offsetX: 280,
    offsetY: -24,
    floatDelay: 3,
    zIndex: 4,
  },
];

/* ------------------------------------------------------------------ */
/*  Word Component — Scroll-linked reveal                              */
/* ------------------------------------------------------------------ */
const Word = ({ children, progress, range }: { children: string; progress: any; range: [number, number] }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  const y = useTransform(progress, range, [20, 0]);

  return (
    <motion.span style={{ opacity, y }} className="inline-block mr-[0.3em]">
      {children}
    </motion.span>
  );
};

/* ------------------------------------------------------------------ */
/*  Reusable floating card — smooth slow float                         */
/* ------------------------------------------------------------------ */
interface FloatingCardProps {
  src: string;
  alt: string;
  rotate: number;
  offsetX: number;
  offsetY: number;
  floatDelay: number;
  zIndex: number;
  index: number;
}

const FloatingCard = ({
  src,
  alt,
  rotate,
  offsetX,
  offsetY,
  floatDelay,
  zIndex,
  index,
}: FloatingCardProps) => {
  const yFloat = useMotionValue(0);

  useEffect(() => {
    const controls = animate(yFloat, [-14, 14, -14], {
      duration: 5 + index * 0.6,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut",
      delay: floatDelay,
    });
    return controls.stop;
  }, [yFloat, floatDelay, index]);

  return (
    <motion.div
      className="absolute w-[220px] h-[300px] sm:w-[250px] sm:h-[340px] md:w-[280px] md:h-[380px] rounded-2xl overflow-hidden shadow-xl"
      style={{
        left: offsetX,
        top: offsetY,
        rotate,
        zIndex,
      }}
      initial={{ opacity: 0, y: 80, scale: 0.85 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.8,
        delay: 0.1 * index,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <motion.div style={{ y: yFloat }} className="w-full h-full">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          draggable={false}
        />
      </motion.div>
    </motion.div>
  );
};

/* ------------------------------------------------------------------ */
/*  Main About Section – full width                                    */
/* ------------------------------------------------------------------ */
const AboutSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const headingWords =
    "Precision engineering for high-performance products, built on technical craftsmanship.".split(" ");

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "start 0.2"],
  });

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-background overflow-hidden py-20 md:py-32 lg:py-40"
    >
      <div className="w-full px-6 md:px-12 lg:px-20">
        {/* ---------- Large serif heading ---------- */}
        <h2
          className="text-foreground text-[3.6rem] font-medium sm:text-5xl md:text-7xl lg:text-[6rem] xl:text-[6.5rem] leading-[1.1] tracking-tight"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          {headingWords.map((word, i) => {
            const start = i / headingWords.length;
            const end = (i + 1) / headingWords.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </h2>

        {/* ---------- Two-column: subtitle + image cards ---------- */}
        <div className="mt-16 md:mt-24 flex flex-col lg:flex-row items-start gap-12 lg:gap-8">
          {/* Subtitle */}
          <motion.p
            className="lg:w-[38%] text-muted-foreground  md:text-lg leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            Elevating brands in a crowded digital landscape. We craft bold ideas
            and transform them into impactful, memorable experiences that drive
            real results.
          </motion.p>

          {/* Floating image cards */}
          <div className="lg:w-[78%] relative h-[420px] sm:h-[450px] md:h-[500px] w-full flex items-center justify-center lg:justify-end">
            <div className="relative" style={{ width: 680, height: 400 }}>
              {cards.map((card, i) => (
                <FloatingCard key={i} index={i} {...card} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
