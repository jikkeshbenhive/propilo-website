import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollSection from "@/components/ScrollSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    ArrowUpRight,
    Facebook,
    Instagram,
    Linkedin,
    Mail,
    MapPin,
    Phone,
    Twitter,
} from "lucide-react";
import { useState } from "react";

const contactInfo = [
    {
        icon: Phone,
        label: "Call us",
        value: "+(555) 845 889",
        href: "tel:+555845889",
    },
    {
        icon: Mail,
        label: "Email us",
        value: "example@propilo.com",
        href: "mailto:example@propilo.com",
    },
    {
        icon: MapPin,
        label: "Visit us",
        value: "Chicago HQ Estica Cop. Macomb, MI 48042",
        href: "#",
    },
];

const socials = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
];

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log("Form submitted:", formData);
    };

    return (
        <div className="min-h-screen bg-background">
            <Header />

            {/* Hero Banner */}
            <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 px-6 overflow-hidden">
                <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-destructive/5 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -top-20 -left-20 w-80 h-80 bg-muted rounded-full blur-3xl pointer-events-none" />

                <div className="max-w-[1400px] mx-auto relative z-10">
                    <ScrollSection>
                        <div className="flex items-center gap-3 mb-6">
                            <span className="h-2 w-2 bg-destructive rounded-full" />
                            <p className="font-body text-sm font-medium uppercase tracking-wide text-primary">
                                Contact
                            </p>
                        </div>
                    </ScrollSection>
                    <ScrollSection delay={0.1}>
                        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.9] text-foreground mb-8">
                            Get in
                            <br />
                            Touch
                        </h1>
                    </ScrollSection>
                    <ScrollSection delay={0.2}>
                        <p className="font-body text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
                            Have a project in mind? We'd love to hear about it. Drop us a
                            message and let's create something amazing together.
                        </p>
                    </ScrollSection>
                </div>
            </section>

            {/* Contact Form + Info */}
            <section className="py-16 md:py-24 px-6">
                <div className="max-w-[1400px] mx-auto">
                    <div className="grid lg:grid-cols-5 gap-12 lg:gap-24">
                        {/* Form — 3 columns */}
                        <div className="lg:col-span-3">
                            <ScrollSection>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block font-body text-sm font-medium text-foreground mb-2">
                                                Your Name
                                            </label>
                                            <Input
                                                name="name"
                                                placeholder="John Doe"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="h-12 rounded-xl border-border bg-card text-foreground placeholder:text-muted-foreground focus-visible:ring-destructive"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block font-body text-sm font-medium text-foreground mb-2">
                                                Your Email
                                            </label>
                                            <Input
                                                name="email"
                                                type="email"
                                                placeholder="john@example.com"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="h-12 rounded-xl border-border bg-card text-foreground placeholder:text-muted-foreground focus-visible:ring-destructive"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block font-body text-sm font-medium text-foreground mb-2">
                                            Subject
                                        </label>
                                        <Input
                                            name="subject"
                                            placeholder="What's this about?"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className="h-12 rounded-xl border-border bg-card text-foreground placeholder:text-muted-foreground focus-visible:ring-destructive"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block font-body text-sm font-medium text-foreground mb-2">
                                            Your Message
                                        </label>
                                        <Textarea
                                            name="message"
                                            placeholder="Tell us about your project..."
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={6}
                                            className="rounded-xl border-border bg-card text-foreground placeholder:text-muted-foreground focus-visible:ring-destructive resize-none"
                                            required
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        size="lg"
                                        className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-10 py-6 text-lg group shadow-xl shadow-primary/20 transition-all hover:scale-105"
                                    >
                                        Send Message
                                        <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </Button>
                                </form>
                            </ScrollSection>
                        </div>

                        {/* Contact Info — 2 columns */}
                        <div className="lg:col-span-2">
                            <div className="space-y-8">
                                {contactInfo.map((info, index) => (
                                    <ScrollSection key={info.label} delay={index * 0.1}>
                                        <a
                                            href={info.href}
                                            className="flex items-start gap-5 group p-6 rounded-2xl border border-border/50 bg-card hover:shadow-md transition-all"
                                        >
                                            <div className="w-12 h-12 bg-primary text-primary-foreground rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-destructive transition-colors">
                                                <info.icon className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="font-body text-sm text-muted-foreground mb-1">
                                                    {info.label}
                                                </p>
                                                <p className="font-display text-lg text-foreground">
                                                    {info.value}
                                                </p>
                                            </div>
                                        </a>
                                    </ScrollSection>
                                ))}

                                {/* Social Links */}
                                <ScrollSection delay={0.3}>
                                    <div className="p-6 rounded-2xl border border-border/50 bg-card">
                                        <p className="font-body text-sm text-muted-foreground mb-4">
                                            Follow us on social media
                                        </p>
                                        <div className="flex gap-3">
                                            {socials.map((social) => (
                                                <a
                                                    key={social.label}
                                                    href={social.href}
                                                    aria-label={social.label}
                                                    className="w-11 h-11 bg-secondary flex items-center justify-center rounded-xl hover:bg-destructive hover:text-white transition-colors text-foreground"
                                                >
                                                    <social.icon size={18} />
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </ScrollSection>

                                {/* Decorative Map Placeholder */}
                                <ScrollSection delay={0.4}>
                                    <div className="rounded-2xl overflow-hidden h-48 relative bg-gradient-to-br from-muted/50 via-muted to-secondary border border-border/50">
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="text-center">
                                                <MapPin className="w-8 h-8 text-destructive mx-auto mb-2" />
                                                <p className="font-display text-sm text-muted-foreground">
                                                    Chicago, IL
                                                </p>
                                            </div>
                                        </div>
                                        {/* Decorative dots */}
                                        <div className="absolute inset-0 opacity-10">
                                            {Array.from({ length: 20 }).map((_, i) => (
                                                <div
                                                    key={i}
                                                    className="absolute w-1 h-1 bg-foreground rounded-full"
                                                    style={{
                                                        left: `${Math.random() * 100}%`,
                                                        top: `${Math.random() * 100}%`,
                                                    }}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </ScrollSection>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Contact;
