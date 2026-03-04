import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import voiceAi from "@/assets/products/voice ai.png";
import slugTalk from "@/assets/products/slug talk.png";


const projects = [
    {
        id: 1,
        title: "Realtime AI Agent",
        category: "Enterprise AI",
        image: voiceAi,
        description: "A highly intelligent, realtime AI agent designed to represent your business and handle customer interactions seamlessly.",
    },
    {
        id: 2,
        title: "SlugTalk",
        category: "Creative Tools",
        image: slugTalk,
        description: "The ultimate voice-powered screenplay writer, turning your spoken ideas into professional scripts instantly.",
    },
];

const ProjectsSection = () => {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-background">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-4 p-4 md:gap-16 md:p-16 text-foreground">
                    {/* Header Card */}
                    <div className="h-[70vh] w-[90vw] md:w-[40vw] flex flex-col justify-center px-8 md:px-12 flex-shrink-0">
                        <h2 className="font-display text-6xl md:text-8xl lg:text-9xl mb-8 leading-none">
                            Selected <br /> Works
                        </h2>
                        <p className="font-body text-xl text-muted-foreground max-w-md">
                            A showcase of our recent projects, pushing the boundaries of digital design and interaction.
                        </p>
                        <div className="mt-12 flex items-center gap-4">
                            <span className="h-[1px] w-20 bg-destructive"></span>
                            <span className="font-body text-sm font-medium uppercase tracking-wide text-primary">
                                Scroll to explore
                            </span>
                        </div>
                    </div>

                    {/* Project Cards */}
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="group relative h-[70vh] w-[90vw] md:w-[60vw] overflow-hidden rounded-3xl bg-muted/20 flex-shrink-0"
                        >
                            <div
                                style={{
                                    backgroundImage: `url(${project.image})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                                className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />

                            <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                                <span className="font-body text-sm md:text-md font-bold uppercase tracking-wider text-destructive mb-2">
                                    {project.category}
                                </span>
                                <h3 className="font-display text-4xl md:text-6xl text-primary-foreground mb-4">
                                    {project.title}
                                </h3>
                                <p className="font-body text-muted/80 max-w-lg text-lg">
                                    {project.description}
                                </p>

                                <div className="mt-8 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                                    <button className="px-6 py-3 bg-primary-foreground text-primary font-medium rounded-full hover:bg-destructive hover:text-white transition-colors">
                                        Launching Soon
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ProjectsSection;
