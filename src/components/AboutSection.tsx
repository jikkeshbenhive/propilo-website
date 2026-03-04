import { motion } from "framer-motion";
import floatImage3 from "@/assets/float-image-3.png";

const AboutSection = () => {
  return (
    <section className="relative w-full min-h-screen bg-background overflow-hidden">
      {/* Marquee Background - Full width at top */}
      <div className="w-full z-0 select-none pointer-events-none overflow-hidden flex">
        {[0, 1].map((index) => (
          <motion.div
            key={index}
            initial={{ x: "0%" }}
            animate={{ x: "-100%" }}
            transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
            className="flex flex-shrink-0"
          >
            <span className="text-[5rem] md:text-[8rem] lg:text-[10rem] tracking-tight flex items-center whitespace-nowrap">
              Cutting-Edge Technology <div className="h-4 md:h-6 w-16 md:w-24 bg-destructive mx-6 md:mx-10 inline-block" /> The Present Era of AI <div className="h-4 md:h-6 w-16 md:w-24 bg-destructive mx-6 md:mx-10 inline-block" /> Experience <div className="h-4 md:h-6 w-16 md:w-24 bg-destructive mx-6 md:mx-10 inline-block" />
            </span>
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">

          {/* Left Content - 6 columns */}
          <div className="lg:col-span-6 space-y-8">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 bg-destructive rounded-full"></span>
              <p className="font-body text-sm font-medium uppercase tracking-wide text-primary">
                Who we are
              </p>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight text-foreground uppercase">
            </h2>

            <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
              <p>
                We are pioneers in the field of artificial intelligence, committed to driving innovation and delivering impactful solutions.
              </p>
              <p>
                Our team of experts is passionate about leveraging the latest AI technologies to solve complex problems and create transformative experiences for businesses across diverse industries.
              </p>
              <p>
                With a deep understanding of AI's potential, we specialize in developing customized solutions that empower our clients to achieve their goals. From advanced image and voice generation to predictive analytics and automation, we offer a wide range of services designed to enhance efficiency, creativity, and growth.
              </p>
            </div>

            <button className="px-6 py-3 border border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors duration-300 text-sm font-medium mt-4">
              More about us
            </button>
          </div>

          {/* Right Side - 6 columns */}
          <div className="lg:col-span-6 relative">
            {/* 345+ Stats - Top Right */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="absolute -top-16 right-0 text-right z-20"
            >
              <h3 className="text-5xl md:text-6xl font-display font-bold text-foreground">
                345<span className="text-destructive">+</span>
              </h3>
              <p className="text-[10px] text-muted-foreground uppercase tracking-widest mt-1">
                Active users every day
              </p>
            </motion.div>

            {/* Image Container */}
            <div className="relative mt-16 lg:mt-0">
              <div className="relative w-full max-w-md ml-auto rounded-2xl overflow-hidden aspect-square bg-gradient-to-br from-muted/50 to-muted/20 border border-border/30">
                {/* Abstract Cube Visualization */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <img src={floatImage3} alt="Float Image" className="w-full h-full object-contain" />
                  </div>
                </div>
              </div>

              {/* 16+ Floating Stat Box - Bottom Center */}
              <motion.div
                className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-card border border-border px-10 py-6 shadow-xl text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h3 className="text-5xl font-display font-bold text-foreground">
                  16<span className="text-destructive align-top text-2xl">+</span>
                </h3>
                <p className="text-[10px] font-medium text-muted-foreground mt-1 uppercase tracking-widest">
                  Years of experience
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
