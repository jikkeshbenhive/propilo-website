import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollSection from "@/components/ScrollSection";
import { motion } from "framer-motion";
import { ArrowUpRight, Lightbulb, TrendingUp, Shield, Users, Clock, Target, CheckCircle, Compass } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
    { icon: Compass, title: "AI Roadmap", description: "A clear, actionable plan for integrating AI into your business — what to build first, what to skip." },
    { icon: Lightbulb, title: "Product Strategy", description: "We tell you what to build, not just how. Identify the highest-impact AI opportunities for your company." },
    { icon: Shield, title: "Risk Assessment", description: "Avoid expensive mistakes. We evaluate vendors, tools, and approaches before you commit budget." },
    { icon: TrendingUp, title: "Growth Advisory", description: "Strategic guidance on scaling your tech stack, team, and AI capabilities as your business grows." },
    { icon: Users, title: "Team Building", description: "Guidance on hiring, structuring, and managing your tech team — even if you're non-technical." },
    { icon: Clock, title: "4 Hours/Month", description: "High-impact advisory that fits your schedule. Monthly check-ins, async reviews, and on-demand calls." },
];

const AIStrategy = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />

            {/* Hero */}
            <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 px-6 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-destructive/5 rounded-full blur-3xl pointer-events-none" />
                <div className="max-w-[1400px] mx-auto relative z-10">
                    <ScrollSection>
                        <div className="flex items-center gap-3 mb-6">
                            <span className="h-2 w-2 bg-destructive rounded-full" />
                            <p className="font-body text-sm font-medium uppercase tracking-wide text-primary">Service 05</p>
                        </div>
                    </ScrollSection>
                    <ScrollSection delay={0.1}>
                        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.9] text-foreground mb-8">
                            AI Strategy &<br />Venture Partnership
                        </h1>
                    </ScrollSection>
                    <ScrollSection delay={0.2}>
                        <p className="font-body text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
                            Your Fractional CTO. We tell the CEO what to build, not just how to build it.
                            High-level advisory for leaders who know they need AI but want expert guidance.
                        </p>
                    </ScrollSection>
                </div>
            </section>

            {/* Overview */}
            <section className="py-24 md:py-32 px-6 bg-background">
                <div className="max-w-[1400px] mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <ScrollSection>
                            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-muted">
                                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=80" alt="Strategy meeting" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                                <motion.div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-md text-white px-6 py-3 rounded-2xl" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                                    <span className="font-display text-2xl">Fractional</span>
                                    <span className="text-white/70 text-sm ml-2">CTO</span>
                                </motion.div>
                            </div>
                        </ScrollSection>
                        <div className="space-y-8">
                            <ScrollSection delay={0.1}>
                                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight">The Consultant Level</h2>
                            </ScrollSection>
                            <ScrollSection delay={0.2}>
                                <div className="space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed">
                                    <p>You're a CEO of an established company. You know AI is the future. But you're concerned about making a costly mistake on the wrong vendor or the wrong approach. That's where we come in.</p>
                                    <p>No coding involved — just our expertise. We spend 4 hours a month with you to oversee your tech transition, evaluate opportunities, vet vendors, and ensure every tech dollar creates maximum impact.</p>
                                </div>
                            </ScrollSection>
                            <ScrollSection delay={0.3}>
                                <div className="flex flex-wrap gap-4">
                                    <div className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-full">
                                        <Target className="w-4 h-4 text-destructive" />
                                        <span className="text-sm font-medium">Monthly Retainer</span>
                                    </div>
                                    <div className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-full">
                                        <Clock className="w-4 h-4 text-destructive" />
                                        <span className="text-sm font-medium">4 Hours/Month</span>
                                    </div>
                                </div>
                            </ScrollSection>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-24 md:py-32 px-6 bg-secondary relative overflow-hidden">
                <div className="max-w-[1200px] mx-auto relative z-10">
                    <ScrollSection>
                        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-center mb-4 text-foreground">What You Get</h2>
                        <p className="font-body text-lg text-muted-foreground text-center max-w-xl mx-auto mb-16">Executive-level tech guidance without the executive-level salary.</p>
                    </ScrollSection>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature, index) => (
                            <ScrollSection key={feature.title} delay={index * 0.1}>
                                <motion.div className="bg-card rounded-2xl p-8 h-full border border-border/50 hover:border-destructive/30 transition-colors duration-300" whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
                                    <feature.icon className="w-8 h-8 text-destructive mb-6" />
                                    <h3 className="font-display text-2xl mb-3 text-foreground">{feature.title}</h3>
                                    <p className="font-body text-muted-foreground leading-relaxed">{feature.description}</p>
                                </motion.div>
                            </ScrollSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Use Case */}
            <section className="py-24 md:py-32 px-6 bg-background">
                <div className="max-w-[1200px] mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16">
                        <ScrollSection>
                            <div className="space-y-6">
                                <h2 className="font-display text-4xl md:text-5xl text-foreground">Who This Is For</h2>
                                <ul className="space-y-4">
                                    {["CEOs of established companies navigating AI adoption", "Founders who need a technical co-pilot but can't afford a full-time CTO", "Companies evaluating AI vendors and need unbiased expert guidance", "Businesses preparing for digital transformation and need a strategic roadmap"].map((item, i) => (
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
                                <span className="text-xs uppercase tracking-widest text-primary-foreground/50 mb-4 block">Real Example</span>
                                <h3 className="font-display text-3xl mb-4">CEO's Tech Transition — Guided, Not Guessed</h3>
                                <p className="text-primary-foreground/70 leading-relaxed mb-6">A CEO of a growing company wanted to integrate AI but was overwhelmed by options. We spent 4 hours/month guiding their tech transition — evaluating vendors, prioritizing projects, and avoiding a costly mistake with the wrong platform.</p>
                                <div className="flex items-center gap-6 border-t border-primary-foreground/20 pt-6">
                                    <div><span className="font-display text-2xl">4 hrs/mo</span><span className="text-xs text-primary-foreground/50 block">Advisory</span></div>
                                    <div><span className="font-display text-2xl">Avoided</span><span className="text-xs text-primary-foreground/50 block">Costly Mistake</span></div>
                                    <div><span className="font-display text-2xl">4 hrs</span><span className="text-xs text-primary-foreground/50 block">Per Month</span></div>
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
                        <h2 className="font-display text-4xl md:text-6xl lg:text-7xl mb-8 leading-tight">Lead with<br />confidence.</h2>
                    </ScrollSection>
                    <ScrollSection delay={0.1}>
                        <p className="font-body text-xl text-primary-foreground/70 max-w-xl mx-auto mb-12 leading-relaxed">Get a Fractional CTO who ensures every tech decision you make is the right one.</p>
                    </ScrollSection>
                    <ScrollSection delay={0.2}>
                        <Link to="/contact" className="inline-flex items-center gap-2 bg-destructive text-destructive-foreground px-8 py-4 text-lg font-medium hover:bg-destructive/90 transition-colors group">
                            Get Strategic Guidance
                            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </Link>
                    </ScrollSection>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default AIStrategy;
