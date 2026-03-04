import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollSection from "@/components/ScrollSection";
import { motion } from "framer-motion";
import { ArrowUpRight, Workflow, Mail, BarChart3, Plug, Clock, Target, CheckCircle, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
    { icon: Plug, title: "App Integration", description: "Connect Gmail, Slack, CRM, Sheets, and 100+ tools into one seamless automated workflow." },
    { icon: Workflow, title: "Process Automation", description: "Eliminate repetitive tasks — data entry, lead routing, report generation, invoice processing." },
    { icon: Mail, title: "Intelligent Notifications", description: "AI-powered alerts that know when something needs your attention vs. when to handle it alone." },
    { icon: BarChart3, title: "Analytics Dashboard", description: "See exactly how much time and money your automations save with real-time ROI tracking." },
    { icon: TrendingUp, title: "Scalable Workflows", description: "Start with one automation, scale to hundreds. Our systems grow with your business." },
    { icon: Clock, title: "Rapid Deployment", description: "Most automations go live within 1-2 weeks. Start saving time and money immediately." },
];

const WorkflowAutomation = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />

            {/* Hero */}
            <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 px-6 overflow-hidden">
                <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-destructive/5 rounded-full blur-3xl pointer-events-none" />
                <div className="max-w-[1400px] mx-auto relative z-10">
                    <ScrollSection>
                        <div className="flex items-center gap-3 mb-6">
                            <span className="h-2 w-2 bg-destructive rounded-full" />
                            <p className="font-body text-sm font-medium uppercase tracking-wide text-primary">Service 04</p>
                        </div>
                    </ScrollSection>
                    <ScrollSection delay={0.1}>
                        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.9] text-foreground mb-8">
                            Intelligent Workflow<br />Automation
                        </h1>
                    </ScrollSection>
                    <ScrollSection delay={0.2}>
                        <p className="font-body text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
                            We're selling you time. Connect your apps, automate the manual work, and let AI handle
                            the tasks that are burning 40+ hours every week.
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
                                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80" alt="Workflow dashboard" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                                <motion.div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-md text-white px-6 py-3 rounded-2xl" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                                    <span className="font-display text-2xl">40 hrs</span>
                                    <span className="text-white/70 text-sm ml-2">saved per week</span>
                                </motion.div>
                            </div>
                        </ScrollSection>
                        <div className="space-y-8">
                            <ScrollSection delay={0.1}>
                                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight">The Easiest ROI You'll Ever See</h2>
                            </ScrollSection>
                            <ScrollSection delay={0.2}>
                                <div className="space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed">
                                    <p>This is the easiest service to justify because the ROI is crystal clear. If your team spends 40 hours a week on manual data entry, we automate it — freeing your people and budget for what actually matters.</p>
                                    <p>We connect all the tools your team already uses — Gmail, Slack, CRM, spreadsheets — and let AI handle the repetitive work so your people can focus on what actually matters.</p>
                                </div>
                            </ScrollSection>
                            <ScrollSection delay={0.3}>
                                <div className="flex flex-wrap gap-4">
                                    <div className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-full">
                                        <Target className="w-4 h-4 text-destructive" />
                                        <span className="text-sm font-medium">Fixed Project</span>
                                    </div>
                                    <div className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-full">
                                        <Clock className="w-4 h-4 text-destructive" />
                                        <span className="text-sm font-medium">ROI in 2.5 Months</span>
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
                        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-center mb-4 text-foreground">What We Automate</h2>
                        <p className="font-body text-lg text-muted-foreground text-center max-w-xl mx-auto mb-16">Stop paying humans to do robot work.</p>
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
                                    {["Operations-heavy businesses like logistics and supply chain", "HR departments drowning in manual onboarding and reporting tasks", "Marketing agencies juggling 20+ client accounts manually", "Sales teams spending more time on CRM data entry than selling", "Any business where staff spend 10+ hours/week on repetitive tasks"].map((item, i) => (
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
                                <h3 className="font-display text-3xl mb-4">40 Hours/Week → Zero Manual Entry</h3>
                                <p className="text-primary-foreground/70 leading-relaxed mb-6">A company spent 40 hours every week manually entering leads from email into a spreadsheet. We automated the entire pipeline — email parsing, data extraction, CRM entry, and team notifications. The project paid for itself within weeks.</p>
                                <div className="flex items-center gap-6 border-t border-primary-foreground/20 pt-6">
                                    <div><span className="font-display text-2xl">40 hrs</span><span className="text-xs text-primary-foreground/50 block">Saved Weekly</span></div>
                                    <div><span className="font-display text-2xl">Fast ROI</span><span className="text-xs text-primary-foreground/50 block">Pays For Itself</span></div>
                                    <div><span className="font-display text-2xl">2.5 mo</span><span className="text-xs text-primary-foreground/50 block">Pays For Itself</span></div>
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
                        <h2 className="font-display text-4xl md:text-6xl lg:text-7xl mb-8 leading-tight">Stop wasting<br />time.</h2>
                    </ScrollSection>
                    <ScrollSection delay={0.1}>
                        <p className="font-body text-xl text-primary-foreground/70 max-w-xl mx-auto mb-12 leading-relaxed">Every week you wait is another 40 hours wasted. Let's automate it.</p>
                    </ScrollSection>
                    <ScrollSection delay={0.2}>
                        <Link to="/contact" className="inline-flex items-center gap-2 bg-destructive text-destructive-foreground px-8 py-4 text-lg font-medium hover:bg-destructive/90 transition-colors group">
                            Automate Your Workflow
                            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </Link>
                    </ScrollSection>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default WorkflowAutomation;
