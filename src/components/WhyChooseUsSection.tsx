import { Button } from "./ui/button";
import { ArrowRight, Sparkles, Network, Zap } from "lucide-react";
import ScrollSection from "./ScrollSection";
import { motion } from "framer-motion";

const WhyChooseUsSection = () => {
    return (
        <section className="py-24 md:py-32 px-6 bg-secondary relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-40">
                <div className="absolute -left-20 top-40 w-96 h-96 bg-muted rounded-full blur-3xl mix-blend-multiply filter" />
                <div className="absolute -right-20 bottom-40 w-96 h-96 bg-muted-foreground/10 rounded-full blur-3xl mix-blend-multiply filter" />
            </div>

            <div className="max-w-[1200px] mx-auto relative z-10">
                <ScrollSection>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6 text-foreground">
                            What makes us the right choice
                        </h2>
                        <p className="font-body text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
                            Our approach is practical, scalable, and grounded in real-world engineering,
                            making us more than just consultants.
                        </p>
                        <Button
                            size="lg"
                            className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 text-lg group shadow-xl shadow-primary/20 transition-all hover:scale-105"
                        >
                            Request a Quote
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </div>
                </ScrollSection>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {/* Feature 1 */}
                    <ScrollSection delay={0.1}>
                        <div className="bg-card rounded-2xl p-8 h-full shadow-sm hover:shadow-md transition-shadow border border-border/50">
                            <div className="flex items-center gap-3 mb-6">
                                <Sparkles className="w-6 h-6 text-primary" />
                                <h3 className="font-body font-semibold text-lg">Deep industry expertise</h3>
                            </div>
                            <p className="font-body text-muted-foreground leading-relaxed">
                                Real-world understanding of factory environments.
                            </p>
                        </div>
                    </ScrollSection>

                    {/* Feature 2 */}
                    <ScrollSection delay={0.2}>
                        <div className="bg-card rounded-2xl p-8 h-full shadow-sm hover:shadow-md transition-shadow border border-border/50">
                            <div className="flex items-center gap-3 mb-6">
                                <Network className="w-6 h-6 text-primary" />
                                <h3 className="font-body font-semibold text-lg">End-to-End Support</h3>
                            </div>
                            <p className="font-body text-muted-foreground leading-relaxed">
                                Guidance from planning to full execution.
                            </p>
                        </div>
                    </ScrollSection>

                    {/* Feature 3 */}
                    <ScrollSection delay={0.3}>
                        <div className="bg-card rounded-2xl p-8 h-full shadow-sm hover:shadow-md transition-shadow border border-border/50">
                            <div className="flex items-center gap-3 mb-6">
                                <Zap className="w-6 h-6 text-primary" />
                                <h3 className="font-body font-semibold text-lg">Smart Implementation</h3>
                            </div>
                            <p className="font-body text-muted-foreground leading-relaxed">
                                Minimal disruption. Maximum performance.
                            </p>
                        </div>
                    </ScrollSection>
                </div>

            </div>

            {/* Tech line SVG decoration at bottom right */}
            <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
                <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M400 400V200C400 89.543 310.457 0 200 0" stroke="currentColor" strokeWidth="2" strokeDasharray="10 10" />
                    <path d="M400 400V250C400 167.157 332.843 100 250 100" stroke="currentColor" strokeWidth="2" strokeDasharray="10 10" />
                    <path d="M400 400V300C400 244.772 355.228 200 300 200" stroke="currentColor" strokeWidth="2" strokeDasharray="10 10" />
                </svg>
            </div>
        </section>
    );
};

export default WhyChooseUsSection;
