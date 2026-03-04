import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollSection from "@/components/ScrollSection";
import { motion } from "framer-motion";
import { ArrowUpRight, Brain, MessageSquare, Search, Shield, Clock, Target, CheckCircle, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
    { icon: Brain, title: "RAG-Powered Knowledge", description: "Your AI knows your business inside out using Retrieval Augmented Generation." },
    { icon: MessageSquare, title: "Customer Support AI", description: "An AI agent that answers customer tickets instantly, 24/7, using your actual product knowledge." },
    { icon: BookOpen, title: "Employee Training AI", description: "A private AI tutor that trains new hires using your SOPs, playbooks, and internal docs." },
    { icon: Search, title: "Intelligent Search", description: "Search across thousands of documents in natural language. Ask a question, get the exact answer." },
    { icon: Shield, title: "Private & Secure", description: "Your data stays yours. We deploy on your infrastructure or our private cloud. No data leaks." },
    { icon: Clock, title: "Continuous Updates", description: "Monthly maintenance keeps your AI accurate and up-to-date as your business data evolves." },
];

const AIAgents = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />

            {/* Hero */}
            <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 px-6 overflow-hidden">
                <div className="absolute -top-40 right-0 w-[600px] h-[600px] bg-destructive/5 rounded-full blur-3xl pointer-events-none" />
                <div className="max-w-[1400px] mx-auto relative z-10">
                    <ScrollSection>
                        <div className="flex items-center gap-3 mb-6">
                            <span className="h-2 w-2 bg-destructive rounded-full" />
                            <p className="font-body text-sm font-medium uppercase tracking-wide text-primary">Service 03</p>
                        </div>
                    </ScrollSection>
                    <ScrollSection delay={0.1}>
                        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.9] text-foreground mb-8">
                            Custom AI Agents<br />& LLM Integration
                        </h1>
                    </ScrollSection>
                    <ScrollSection delay={0.2}>
                        <p className="font-body text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
                            We give your business a brain. An AI that knows your specific data — answering questions, training employees, and analyzing insights like a senior team member.
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
                                <img src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&auto=format&fit=crop&q=80" alt="AI visualization" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                                <motion.div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-md text-white px-6 py-3 rounded-2xl" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                                    <span className="font-display text-2xl">Your Data</span>
                                    <span className="text-white/70 text-sm ml-2">→ Your AI</span>
                                </motion.div>
                            </div>
                        </ScrollSection>
                        <div className="space-y-8">
                            <ScrollSection delay={0.1}>
                                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight">Where Propilo Stands Out</h2>
                            </ScrollSection>
                            <ScrollSection delay={0.2}>
                                <div className="space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed">
                                    <p>Anyone can plug into ChatGPT. We build AI that knows YOUR business. Using RAG, we connect LLMs to your documents, databases, and workflows — creating an AI that speaks your language.</p>
                                    <p>Whether it's 10,000 legal cases, 50,000 product SKUs, or years of medical records — your AI agent becomes the smartest person in the room, available 24/7.</p>
                                </div>
                            </ScrollSection>
                            <ScrollSection delay={0.3}>
                                <div className="flex flex-wrap gap-4">
                                    <div className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-full">
                                        <Target className="w-4 h-4 text-destructive" />
                                        <span className="text-sm font-medium">Setup + Maintenance</span>
                                    </div>
                                    <div className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-full">
                                        <Clock className="w-4 h-4 text-destructive" />
                                        <span className="text-sm font-medium">Ongoing Support</span>
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
                        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-center mb-4 text-foreground">What We Build</h2>
                        <p className="font-body text-lg text-muted-foreground text-center max-w-xl mx-auto mb-16">AI solutions that understand your business, not generic chatbots.</p>
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
                                    {["Law firms with thousands of past cases needing instant search", "Medical clinics wanting AI-powered patient triage and FAQ bots", "E-commerce stores with thousands of products and customer queries", "Companies drowning in support tickets that need 24/7 AI assistance"].map((item, i) => (
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
                                <h3 className="font-display text-3xl mb-4">Law Firm: 10,000 Cases → Instant Search</h3>
                                <p className="text-primary-foreground/70 leading-relaxed mb-6">A law firm had 10,000 past cases scattered across PDFs and emails. We built a private AI search tool. Lawyers find relevant precedents in seconds instead of hours. Zero data leaks.</p>
                                <div className="flex items-center gap-6 border-t border-primary-foreground/20 pt-6">
                                    <div><span className="font-display text-2xl">Private</span><span className="text-xs text-primary-foreground/50 block">Infrastructure</span></div>
                                    <div><span className="font-display text-2xl">24/7</span><span className="text-xs text-primary-foreground/50 block">Availability</span></div>
                                    <div><span className="font-display text-2xl">10K+</span><span className="text-xs text-primary-foreground/50 block">Cases Indexed</span></div>
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
                        <h2 className="font-display text-4xl md:text-6xl lg:text-7xl mb-8 leading-tight">Give your business<br />a brain.</h2>
                    </ScrollSection>
                    <ScrollSection delay={0.1}>
                        <p className="font-body text-xl text-primary-foreground/70 max-w-xl mx-auto mb-12 leading-relaxed">Your data is already there. Let us turn it into your company's smartest employee.</p>
                    </ScrollSection>
                    <ScrollSection delay={0.2}>
                        <Link to="/contact" className="inline-flex items-center gap-2 bg-destructive text-destructive-foreground px-8 py-4 text-lg font-medium hover:bg-destructive/90 transition-colors group">
                            Build Your AI Agent
                            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </Link>
                    </ScrollSection>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default AIAgents;
