import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollSection from "@/components/ScrollSection";
import { motion } from "framer-motion";
import { ArrowUpRight, Palette, Eye, Zap, Target, Clock, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
    {
        icon: Palette,
        title: "Logo & Visual Identity",
        description: "A distinctive logo system with variations, color palette, and typography that captures your brand's DNA.",
    },
    {
        icon: Eye,
        title: "Brand Voice & Messaging",
        description: "Verbal identity system including tone, taglines, and messaging frameworks—critical for AI agent personalities.",
    },
    {
        icon: Zap,
        title: "AI-Assisted Design",
        description: "Leveraging AI design tools to explore 10x more concepts in half the time, ensuring the best possible outcome.",
    },
    {
        icon: Target,
        title: "Brand Guidelines",
        description: "A comprehensive brand book that ensures consistency across every touchpoint, from social media to packaging.",
    },
];

const BrandEngineering = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />

            {/* Hero */}
            <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 px-6 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-destructive/5 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 -left-40 w-[400px] h-[400px] bg-muted rounded-full blur-3xl pointer-events-none" />

                <div className="max-w-[1400px] mx-auto relative z-10">
                    <ScrollSection>
                        <div className="flex items-center gap-3 mb-6">
                            <span className="h-2 w-2 bg-destructive rounded-full" />
                            <p className="font-body text-sm font-medium uppercase tracking-wide text-primary">
                                Service 01
                            </p>
                        </div>
                    </ScrollSection>
                    <ScrollSection delay={0.1}>
                        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.9] text-foreground mb-8">
                            Brand Engineering
                            <br />
                            & Identity
                        </h1>
                    </ScrollSection>
                    <ScrollSection delay={0.2}>
                        <p className="font-body text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
                            We don't just give you a file — we give you a competitive edge.
                            A complete visual and verbal system that makes your business
                            look like a million-dollar brand.
                        </p>
                    </ScrollSection>
                </div>
            </section>

            {/* Overview with Image */}
            <section className="py-24 md:py-32 px-6 bg-background">
                <div className="max-w-[1400px] mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <ScrollSection>
                            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-muted">
                                <img
                                    src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop&q=80"
                                    alt="Brand design workspace"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                                <motion.div
                                    className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-md text-white px-6 py-3 rounded-2xl"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                >
                                    <span className="font-display text-2xl">1 Week</span>
                                    <span className="text-white/70 text-sm ml-2">delivery</span>
                                </motion.div>
                            </div>
                        </ScrollSection>

                        <div className="space-y-8">
                            <ScrollSection delay={0.1}>
                                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight">
                                    The "Face" of Your Business
                                </h2>
                            </ScrollSection>
                            <ScrollSection delay={0.2}>
                                <div className="space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed">
                                    <p>
                                        Your brand is the first thing people see. It's the difference between
                                        being scrolled past and being remembered. We create a complete brand
                                        system — logo, typography, colors, and brand voice — that positions
                                        you as a market leader.
                                    </p>
                                    <p>
                                        Whether you're a new startup looking to make a splash or an established
                                        company that needs a modern refresh, we craft brands that connect
                                        deeply with your audience and stand the test of time.
                                    </p>
                                </div>
                            </ScrollSection>
                            <ScrollSection delay={0.3}>
                                <div className="flex flex-wrap gap-4">
                                    <div className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-full">
                                        <Clock className="w-4 h-4 text-destructive" />
                                        <span className="text-sm font-medium">1 Week Delivery</span>
                                    </div>
                                    <div className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-full">
                                        <Target className="w-4 h-4 text-destructive" />
                                        <span className="text-sm font-medium">Fixed Project Fee</span>
                                    </div>
                                </div>
                            </ScrollSection>
                        </div>
                    </div>
                </div>
            </section>

            {/* What's Included */}
            <section className="py-24 md:py-32 px-6 bg-secondary relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-30">
                    <div className="absolute -left-20 top-40 w-96 h-96 bg-muted rounded-full blur-3xl" />
                    <div className="absolute -right-20 bottom-40 w-96 h-96 bg-muted-foreground/10 rounded-full blur-3xl" />
                </div>

                <div className="max-w-[1200px] mx-auto relative z-10">
                    <ScrollSection>
                        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-center mb-4 text-foreground">
                            What's Included
                        </h2>
                        <p className="font-body text-lg text-muted-foreground text-center max-w-xl mx-auto mb-16">
                            Everything you need to look like a tech giant — delivered in days, not months.
                        </p>
                    </ScrollSection>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {features.map((feature, index) => (
                            <ScrollSection key={feature.title} delay={index * 0.1}>
                                <motion.div
                                    className="bg-card rounded-2xl p-8 h-full border border-border/50 hover:border-destructive/30 transition-colors duration-300"
                                    whileHover={{ y: -4 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <feature.icon className="w-8 h-8 text-destructive mb-6" />
                                    <h3 className="font-display text-2xl mb-3 text-foreground">
                                        {feature.title}
                                    </h3>
                                    <p className="font-body text-muted-foreground leading-relaxed">
                                        {feature.description}
                                    </p>
                                </motion.div>
                            </ScrollSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Target Audience + Use Case */}
            <section className="py-24 md:py-32 px-6 bg-background">
                <div className="max-w-[1200px] mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16">
                        <ScrollSection>
                            <div className="space-y-6">
                                <h2 className="font-display text-4xl md:text-5xl text-foreground">
                                    Who This Is For
                                </h2>
                                <ul className="space-y-4">
                                    {[
                                        "New startups (pre-seed/seed) that need to look credible from day 1",
                                        "Established companies that look 'outdated' and want a modern, tech-savvy feel",
                                        "Businesses preparing for fundraising rounds and need investor-grade branding",
                                        "Companies launching AI products that need a voice for their agents",
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                                            <span className="font-body text-muted-foreground">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </ScrollSection>

                        <ScrollSection delay={0.2}>
                            <div className="bg-primary text-primary-foreground rounded-3xl p-10">
                                <span className="text-xs uppercase tracking-widest text-primary-foreground/50 mb-4 block">
                                    Real Example
                                </span>
                                <h3 className="font-display text-3xl mb-4">
                                    Local Real Estate Firm → Tech Giant Look
                                </h3>
                                <p className="text-primary-foreground/70 leading-relaxed mb-6">
                                    A local real estate firm wanted to look like a modern tech company.
                                    We delivered a complete brand transformation in 1 week using
                                    AI-assisted design tools. The result? A million-dollar look that
                                    helped them close their biggest deal ever.
                                </p>
                                <div className="flex items-center gap-6 border-t border-primary-foreground/20 pt-6">
                                    <div>
                                        <span className="font-display text-2xl">7 Days</span>
                                        <span className="text-xs text-primary-foreground/50 block">Delivered In</span>
                                    </div>
                                    <div>
                                        <span className="font-display text-2xl">AI-Powered</span>
                                        <span className="text-xs text-primary-foreground/50 block">Design Process</span>
                                    </div>
                                    <div>
                                        <span className="font-display text-2xl">∞</span>
                                        <span className="text-xs text-primary-foreground/50 block">Value Created</span>
                                    </div>
                                </div>
                            </div>
                        </ScrollSection>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 md:py-32 px-6 bg-primary text-primary-foreground">
                <div className="max-w-[1200px] mx-auto text-center">
                    <ScrollSection>
                        <h2 className="font-display text-4xl md:text-6xl lg:text-7xl mb-8 leading-tight">
                            Ready for a
                            <br />
                            million-dollar look?
                        </h2>
                    </ScrollSection>
                    <ScrollSection delay={0.1}>
                        <p className="font-body text-xl text-primary-foreground/70 max-w-xl mx-auto mb-12 leading-relaxed">
                            Let's craft a brand that makes your competition nervous.
                            Start a conversation today.
                        </p>
                    </ScrollSection>
                    <ScrollSection delay={0.2}>
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 bg-destructive text-destructive-foreground px-8 py-4 text-lg font-medium hover:bg-destructive/90 transition-colors group"
                        >
                            Start Your Brand
                            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </Link>
                    </ScrollSection>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default BrandEngineering;
