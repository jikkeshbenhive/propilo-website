import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollSection from "@/components/ScrollSection";
import ProcessSection from "@/components/ProcessSection";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
    {
        number: "01",
        title: "Brand Engineering & Identity",
        description:
            "We create visual and verbal brand systems—logo, typography, colors, and voice—that give your business a million-dollar competitive edge. Delivered in 1 week with AI-assisted design.",
        categories: ["AI Audit", "Brand", "Visual"],
        slug: "/services/brand-engineering",
        image:
            "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop&q=60",
    },
    {
        number: "02",
        title: "Full-Stack Product Engineering",
        description:
            "We build the complete engine of your company—Web Apps, Mobile Apps, UI/UX, and Databases. AI-native coding workflows deliver in 6 weeks, not 4 months.",
        categories: ["Web App", "Mobile", "SaaS"],
        slug: "/services/full-stack-product",
        image:
            "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&auto=format&fit=crop&q=60",
    },
    {
        number: "03",
        title: "Custom AI Agents & LLM Integration",
        description:
            "We give your business a brain. AI that knows your specific data—answers support tickets, trains employees, and analyzes sales using RAG technology.",
        categories: ["AI Agents", "RAG", "LLM"],
        slug: "/services/ai-agents",
        image:
            "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&auto=format&fit=crop&q=60",
    },
    {
        number: "04",
        title: "Intelligent Workflow Automation",
        description:
            "We sell you time. Connect Gmail, Slack, and CRM so AI does the manual work. Clear ROI that speaks for itself.",
        categories: ["Automation", "Integration", "ROI"],
        slug: "/services/workflow-automation",
        image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60",
    },
    {
        number: "05",
        title: "AI Strategy & Venture Partnership",
        description:
            "Your Fractional CTO. High-level advisory for CEOs who know they need AI but want expert guidance. Strategy, not code—4 hours a month of executive insight.",
        categories: ["Consulting", "Strategy", "CTO"],
        slug: "/services/ai-strategy",
        image:
            "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=60",
    },
];

const Services = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />

            {/* Hero Banner */}
            <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 px-6 overflow-hidden">
                <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-destructive/5 rounded-full blur-3xl pointer-events-none" />

                <div className="max-w-[1400px] mx-auto relative z-10">
                    <ScrollSection>
                        <div className="flex items-center gap-3 mb-6">
                            <span className="h-2 w-2 bg-destructive rounded-full" />
                            <p className="font-body text-sm font-medium uppercase tracking-wide text-primary">
                                Our Services
                            </p>
                        </div>
                    </ScrollSection>
                    <ScrollSection delay={0.1}>
                        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.9] text-foreground mb-8">
                            Less Time.
                            <br />
                            More Impact.
                        </h1>
                    </ScrollSection>
                    <ScrollSection delay={0.2}>
                        <p className="font-body text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
                            From brand identity to AI-powered automation, we build,
                            launch, and scale your digital products faster than anyone —
                            powered by AI-native workflows.
                        </p>
                    </ScrollSection>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 md:py-32 px-6 bg-background">
                <div className="max-w-[1400px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, index) => (
                            <ScrollSection key={service.number} delay={index * 0.1}>
                                <Link to={service.slug}>
                                    <motion.div
                                        className="group relative rounded-3xl overflow-hidden bg-muted/20 border border-border/50 h-full cursor-pointer"
                                        whileHover={{ y: -8 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {/* Image */}
                                        <div className="relative h-56 overflow-hidden">
                                            <div
                                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                                style={{ backgroundImage: `url(${service.image})` }}
                                            />
                                            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />
                                            <span className="absolute top-4 left-4 font-display italic text-2xl text-white/80">
                                                ({service.number})
                                            </span>

                                        </div>

                                        {/* Content */}
                                        <div className="p-8">
                                            <h3 className="font-display text-2xl md:text-3xl mb-3 text-foreground group-hover:text-destructive transition-colors duration-300">
                                                {service.title}
                                            </h3>
                                            <p className="font-body text-muted-foreground leading-relaxed mb-6">
                                                {service.description}
                                            </p>

                                            {/* Categories */}
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {service.categories.map((cat) => (
                                                    <span
                                                        key={cat}
                                                        className="px-3 py-1.5 border border-border rounded-lg text-xs font-medium text-muted-foreground"
                                                    >
                                                        {cat}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* Learn More */}
                                            <div className="flex items-center gap-2 text-sm font-medium text-foreground group-hover:text-destructive transition-colors">
                                                Learn more
                                                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                            </div>
                                        </div>
                                    </motion.div>
                                </Link>
                            </ScrollSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section (reused) */}
            <ProcessSection />

            {/* CTA Section */}
            <section className="py-24 md:py-32 px-6 bg-primary text-primary-foreground">
                <div className="max-w-[1200px] mx-auto text-center">
                    <ScrollSection>
                        <h2 className="font-display text-4xl md:text-6xl lg:text-7xl mb-8 leading-tight">
                            Ready to start
                            <br />
                            your project?
                        </h2>
                    </ScrollSection>
                    <ScrollSection delay={0.1}>
                        <p className="font-body text-xl text-primary-foreground/70 max-w-xl mx-auto mb-12 leading-relaxed">
                            Let's bring your vision to life. Start a conversation and
                            discover how we can help your brand stand out.
                        </p>
                    </ScrollSection>
                    <ScrollSection delay={0.2}>
                        <a
                            href="/contact"
                            className="inline-flex items-center gap-2 bg-destructive text-destructive-foreground px-8 py-4 text-lg font-medium hover:bg-destructive/90 transition-colors group"
                        >
                            Get in touch
                            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </a>
                    </ScrollSection>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Services;
