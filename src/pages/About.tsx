import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollSection from "@/components/ScrollSection";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const stats = [
    { value: "16+", label: "Years of Experience" },
    { value: "345+", label: "Active Daily Users" },
    { value: "50+", label: "Projects Delivered" },
    { value: "20+", label: "Awards Won" },
];

const team = [
    {
        name: "James Carter",
        role: "Founder & Creative Director",
        avatar:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60",
    },
    {
        name: "Sophia Lin",
        role: "Lead Designer",
        avatar:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60",
    },
    {
        name: "Marcus Reed",
        role: "Head of Engineering",
        avatar:
            "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400&auto=format&fit=crop&q=60",
    },
    {
        name: "Amara Osei",
        role: "Brand Strategist",
        avatar:
            "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=60",
    },
];

const values = [
    {
        title: "Innovation First",
        description:
            "We push creative boundaries to deliver solutions that are fresh, forward-thinking, and impactful.",
    },
    {
        title: "Collaborative Spirit",
        description:
            "Every project is a partnership. We work hand-in-hand with our clients to bring their vision to life.",
    },
    {
        title: "Relentless Quality",
        description:
            "From the first pixel to the final deploy, we demand excellence at every stage of the process.",
    },
];

const About = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />

            {/* Hero Banner */}
            <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 px-6 overflow-hidden">
                {/* Decorative blobs */}
                <div className="absolute -top-32 -right-32 w-96 h-96 bg-destructive/5 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 -left-32 w-80 h-80 bg-muted rounded-full blur-3xl pointer-events-none" />

                <div className="max-w-[1400px] mx-auto relative z-10">
                    <ScrollSection>
                        <div className="flex items-center gap-3 mb-6">
                            <span className="h-2 w-2 bg-destructive rounded-full" />
                            <p className="font-body text-sm font-medium uppercase tracking-wide text-primary">
                                Who we are
                            </p>
                        </div>
                    </ScrollSection>
                    <ScrollSection delay={0.1}>
                        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.9] text-foreground mb-8">
                            We craft bold
                            <br />
                            digital experiences
                        </h1>
                    </ScrollSection>
                    <ScrollSection delay={0.2}>
                        <p className="font-body text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
                            Propilo is a creative studio that helps brands grow and stand out
                            through strategy, design, and impactful digital solutions.
                        </p>
                    </ScrollSection>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-24 md:py-32 px-6 bg-background">
                <div className="max-w-[1400px] mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                        {/* Left: Image */}
                        <ScrollSection>
                            <div className="relative">
                                <div className="rounded-3xl overflow-hidden aspect-[4/5] bg-muted">
                                    <img
                                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=60"
                                        alt="Our team collaborating"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                {/* Floating stat card */}
                                <motion.div
                                    className="absolute -bottom-8 -right-4 md:-right-8 bg-card border border-border px-8 py-6 shadow-xl"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                >
                                    <h3 className="text-4xl font-display font-bold text-foreground">
                                        2009
                                    </h3>
                                    <p className="text-[10px] font-medium text-muted-foreground mt-1 uppercase tracking-widest">
                                        Founded
                                    </p>
                                </motion.div>
                            </div>
                        </ScrollSection>

                        {/* Right: Story text */}
                        <div className="space-y-8 lg:pt-12">
                            <ScrollSection delay={0.1}>
                                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight">
                                    Our Story
                                </h2>
                            </ScrollSection>
                            <ScrollSection delay={0.2}>
                                <div className="space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed">
                                    <p>
                                        What started as a small design studio in Chicago has grown
                                        into a full-service creative agency trusted by brands
                                        worldwide. Our journey has been fueled by a simple belief:
                                        great design has the power to transform businesses.
                                    </p>
                                    <p>
                                        We are pioneers in the field of digital experiences,
                                        committed to driving innovation and delivering impactful
                                        solutions. Our team of experts is passionate about leveraging
                                        the latest technologies to solve complex problems and create
                                        transformative experiences.
                                    </p>
                                    <p>
                                        From advanced visual storytelling to data-driven brand
                                        strategy, we offer a wide range of services designed to
                                        enhance efficiency, creativity, and growth.
                                    </p>
                                </div>
                            </ScrollSection>
                            <ScrollSection delay={0.3}>
                                <a
                                    href="/contact"
                                    className="inline-flex items-center gap-2 px-6 py-3 border border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors duration-300 text-sm font-medium group"
                                >
                                    Work with us
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </ScrollSection>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-24 md:py-32 px-6 bg-secondary relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-40">
                    <div className="absolute -left-20 top-40 w-96 h-96 bg-muted rounded-full blur-3xl mix-blend-multiply filter" />
                    <div className="absolute -right-20 bottom-40 w-96 h-96 bg-muted-foreground/10 rounded-full blur-3xl mix-blend-multiply filter" />
                </div>

                <div className="max-w-[1200px] mx-auto relative z-10">
                    <ScrollSection>
                        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-center mb-16 text-foreground">
                            Our Core Values
                        </h2>
                    </ScrollSection>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {values.map((value, index) => (
                            <ScrollSection key={value.title} delay={index * 0.15}>
                                <div className="bg-card rounded-2xl p-8 h-full shadow-sm hover:shadow-md transition-shadow border border-border/50">
                                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-xl flex items-center justify-center font-display text-xl mb-6">
                                        {String(index + 1).padStart(2, "0")}
                                    </div>
                                    <h3 className="font-display text-2xl mb-4 text-foreground">
                                        {value.title}
                                    </h3>
                                    <p className="font-body text-muted-foreground leading-relaxed">
                                        {value.description}
                                    </p>
                                </div>
                            </ScrollSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Bar */}
            <section className="py-16 md:py-20 px-6 bg-primary text-primary-foreground">
                <div className="max-w-[1400px] mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                        {stats.map((stat, index) => (
                            <ScrollSection key={stat.label} delay={index * 0.1}>
                                <div className="text-center">
                                    <h3 className="text-5xl md:text-6xl font-display font-bold mb-2">
                                        {stat.value.replace("+", "")}
                                        <span className="text-destructive">+</span>
                                    </h3>
                                    <p className="text-xs md:text-sm uppercase tracking-widest text-primary-foreground/70">
                                        {stat.label}
                                    </p>
                                </div>
                            </ScrollSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-24 md:py-32 px-6 bg-background">
                <div className="max-w-[1400px] mx-auto">
                    <ScrollSection>
                        <div className="text-center max-w-2xl mx-auto mb-16">
                            <div className="flex items-center justify-center gap-3 mb-6">
                                <span className="h-2 w-2 bg-destructive rounded-full" />
                                <p className="font-body text-sm font-medium uppercase tracking-wide text-primary">
                                    Our Team
                                </p>
                            </div>
                            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
                                Meet the People Behind the Magic
                            </h2>
                            <p className="font-body text-lg text-muted-foreground">
                                A diverse team of creative thinkers, strategists, and makers
                                united by a passion for exceptional design.
                            </p>
                        </div>
                    </ScrollSection>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {team.map((member, index) => (
                            <ScrollSection key={member.name} delay={index * 0.1}>
                                <div className="group relative rounded-2xl overflow-hidden aspect-[3/4] bg-muted cursor-pointer">
                                    <img
                                        src={member.avatar}
                                        alt={member.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    {/* Always-visible name bar */}
                                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                                        <h3 className="font-display text-xl text-white">
                                            {member.name}
                                        </h3>
                                        <p className="font-body text-sm text-white/70">
                                            {member.role}
                                        </p>
                                    </div>
                                </div>
                            </ScrollSection>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default About;
