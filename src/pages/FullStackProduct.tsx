import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollSection from "@/components/ScrollSection";
import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Smartphone, Database, Layout, Clock, Target, CheckCircle, Layers } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
    {
        icon: Layout,
        title: "UI/UX Design",
        description: "Beautiful, intuitive interfaces designed for conversion. Every product includes a complete design system.",
    },
    {
        icon: Code2,
        title: "Web Application",
        description: "Scalable web apps built with modern frameworks. From dashboards to full SaaS platforms.",
    },
    {
        icon: Smartphone,
        title: "Mobile Application",
        description: "Cross-platform mobile apps that feel native. iOS and Android from a single codebase.",
    },
    {
        icon: Database,
        title: "Backend & Database",
        description: "Robust backend architecture with secure APIs, real-time data, and scalable database design.",
    },
    {
        icon: Layers,
        title: "DevOps & Deployment",
        description: "CI/CD pipelines, cloud hosting, and monitoring set up from day one. Ship with confidence.",
    },
    {
        icon: Clock,
        title: "AI-Native Workflow",
        description: "Our engineers use AI-native coding workflows to deliver in 6 weeks what typically takes 4 months.",
    },
];

const milestones = [
    { week: "Week 1-2", title: "Discovery & Design", description: "Requirements, wireframes, and full UI/UX design" },
    { week: "Week 2-3", title: "Core Development", description: "Backend architecture, database, and API development" },
    { week: "Week 3-5", title: "Feature Build", description: "Frontend development, integrations, and feature completion" },
    { week: "Week 5-6", title: "Testing & Launch", description: "QA, performance optimization, and production deployment" },
];

const FullStackProduct = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />

            {/* Hero */}
            <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 px-6 overflow-hidden">
                <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-destructive/5 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-20 -right-40 w-[400px] h-[400px] bg-muted rounded-full blur-3xl pointer-events-none" />

                <div className="max-w-[1400px] mx-auto relative z-10">
                    <ScrollSection>
                        <div className="flex items-center gap-3 mb-6">
                            <span className="h-2 w-2 bg-destructive rounded-full" />
                            <p className="font-body text-sm font-medium uppercase tracking-wide text-primary">
                                Service 02
                            </p>
                        </div>
                    </ScrollSection>
                    <ScrollSection delay={0.1}>
                        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.9] text-foreground mb-8">
                            Full-Stack
                            <br />
                            Product Engineering
                        </h1>
                    </ScrollSection>
                    <ScrollSection delay={0.2}>
                        <p className="font-body text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
                            We build the complete engine of your company. Web apps, mobile apps,
                            databases — everything your product needs to succeed, delivered in
                            weeks instead of months.
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
                                    src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&auto=format&fit=crop&q=80"
                                    alt="Product development"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                                <motion.div
                                    className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-md text-white px-6 py-3 rounded-2xl"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                >
                                    <span className="font-display text-2xl">6 Weeks</span>
                                    <span className="text-white/70 text-sm ml-2">not 4 months</span>
                                </motion.div>
                            </div>
                        </ScrollSection>

                        <div className="space-y-8">
                            <ScrollSection delay={0.1}>
                                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight">
                                    Your Most Valuable Investment
                                </h2>
                            </ScrollSection>
                            <ScrollSection delay={0.2}>
                                <div className="space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed">
                                    <p>
                                        This is the service that builds the engine of your company. We don't
                                        just write code — we architect products that scale, perform, and
                                        delight users. Every project includes UI/UX design because a
                                        product can't function without great design.
                                    </p>
                                    <p>
                                        Our AI-native coding workflows let us move at 3x the speed
                                        of traditional agencies. What used to take 4 months, we ship
                                        in 6 weeks — without sacrificing quality.
                                    </p>
                                </div>
                            </ScrollSection>
                            <ScrollSection delay={0.3}>
                                <div className="flex flex-wrap gap-4">
                                    <div className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-full">
                                        <Clock className="w-4 h-4 text-destructive" />
                                        <span className="text-sm font-medium">6 Week Delivery</span>
                                    </div>
                                    <div className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-full">
                                        <Target className="w-4 h-4 text-destructive" />
                                        <span className="text-sm font-medium">Milestone-Based</span>
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
                            Everything from design to deployment — a complete product, not just code.
                        </p>
                    </ScrollSection>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

            {/* Milestones Timeline */}
            <section className="py-24 md:py-32 px-6 bg-background">
                <div className="max-w-[1200px] mx-auto">
                    <ScrollSection>
                        <h2 className="font-display text-4xl md:text-5xl text-center mb-4 text-foreground">
                            Milestone-Based Delivery
                        </h2>
                        <p className="font-body text-lg text-muted-foreground text-center max-w-xl mx-auto mb-16">
                            Pay as we build. Each milestone is a deliverable you can see up and running.
                        </p>
                    </ScrollSection>

                    <div className="relative">
                        {/* Connector Line */}
                        <div className="hidden md:block absolute top-[40px] left-[12%] right-[12%] h-[2px] border-t-2 border-dotted border-border z-0" />

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            {milestones.map((milestone, index) => (
                                <ScrollSection key={milestone.week} delay={index * 0.15}>
                                    <div className="text-center relative z-10">
                                        <div className="w-20 h-20 bg-primary text-primary-foreground rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                                            <span className="font-display text-lg">{milestone.week.split(" ")[1]}</span>
                                        </div>
                                        <span className="font-body text-xs uppercase tracking-widest text-destructive mb-2 block">
                                            {milestone.week}
                                        </span>
                                        <h3 className="font-display text-xl mb-2 text-foreground">
                                            {milestone.title}
                                        </h3>
                                        <p className="font-body text-sm text-muted-foreground">
                                            {milestone.description}
                                        </p>
                                    </div>
                                </ScrollSection>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Target Audience + Use Case */}
            <section className="py-24 md:py-32 px-6 bg-secondary">
                <div className="max-w-[1200px] mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16">
                        <ScrollSection>
                            <div className="space-y-6">
                                <h2 className="font-display text-4xl md:text-5xl text-foreground">
                                    Who This Is For
                                </h2>
                                <ul className="space-y-4">
                                    {[
                                        "SaaS founders who have an idea but no tech team to build it",
                                        "Mid-sized businesses that need custom internal tools or dashboards",
                                        "Startups preparing for fundraising that need a working MVP fast",
                                        "Companies replacing outdated legacy systems with modern solutions",
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
                                    "Tinder for Jobs" — From Idea to App Store
                                </h3>
                                <p className="text-primary-foreground/70 leading-relaxed mb-6">
                                    A founder came to us with a concept for a swipe-based job matching
                                    app. We designed and built the complete product — mobile app, web
                                    dashboard, matching algorithm, and backend — in just 6 weeks using
                                    AI-native coding workflows.
                                </p>
                                <div className="flex items-center gap-6 border-t border-primary-foreground/20 pt-6">
                                    <div>
                                        <span className="font-display text-2xl">6 Weeks</span>
                                        <span className="text-xs text-primary-foreground/50 block">Delivered In</span>
                                    </div>
                                    <div>
                                        <span className="font-display text-2xl">3x</span>
                                        <span className="text-xs text-primary-foreground/50 block">Faster Than Average</span>
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
                            Got an idea?
                            <br />
                            Let's build it.
                        </h2>
                    </ScrollSection>
                    <ScrollSection delay={0.1}>
                        <p className="font-body text-xl text-primary-foreground/70 max-w-xl mx-auto mb-12 leading-relaxed">
                            Tell us your vision and we'll turn it into a product —
                            faster than you thought possible.
                        </p>
                    </ScrollSection>
                    <ScrollSection delay={0.2}>
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 bg-destructive text-destructive-foreground px-8 py-4 text-lg font-medium hover:bg-destructive/90 transition-colors group"
                        >
                            Start Building
                            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </Link>
                    </ScrollSection>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default FullStackProduct;
