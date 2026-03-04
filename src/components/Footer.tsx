
import { Facebook, Instagram, Linkedin, Twitter, Youtube, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";


const Footer = () => {
    // Links matching the Navbar and structure
    const pageLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Blog", href: "/blog" },
        { name: "Contact", href: "/contact" },
    ];

    const utilityLinks = [
        { name: "Style Guide", href: "#" },
        { name: "Instructions", href: "#" },
        { name: "Licenses", href: "#" },
        { name: "Changelog", href: "#" },
        { name: "Coming Soon", href: "#" },
    ];

    return (
        <footer className="relative mt-24 md:mt-32 bg-background pb-12 pr-12 lg:pr-24">
            <div className="bg-primary text-primary-foreground relative rounded-tr-[3rem] pt-24 pb-12 pl-12 lg:pl-24 pr-12 lg:pr-24 ml-0 md:ml-12 lg:ml-24 rounded-bl-[3rem]">
                <div className="absolute top-0 left-[-3rem] md:left-[-3rem] lg:left-[-6rem] h-24 bg-background w-[calc(100%+2rem)] md:w-[calc(100%+3rem)] lg:w-[calc(100%+6rem)] z-10 hidden">
                </div>

                {/* Actual Top Left Brand Tab */}
                <div className="absolute -top-[1px] -left-1 bg-background pl-6 pr-8 pt-4 pb-4 rounded-br-[2rem] hidden md:block">
                    {/* Curve Smoother: Top Right of this white block needs to curve into the black */}
                </div>

                {/* PROPER IMPLEMENTATION OF TOP LEFT TAB */}
                <div className="absolute -top-[1px] left-0">
                    <div className="bg-background pr-8 py-6 rounded-br-[2rem] relative z-20">
                        <span className="text-3xl font-display italic tracking-wide font-bold text-foreground pl-4">Propilo</span>
                        {/* Curve Connector */}
                    </div>
                </div>

                {/* Top Left Overlay Logic for "Propilo" */}
                <div className="absolute top-0 left-0 bg-background pr-10 pb-6 rounded-br-[2.5rem] z-10">
                    <span className="text-3xl font-display italic tracking-wide font-bold text-foreground">Propilo</span>
                </div>

                {/* Bottom Right Overlay Logic for "Designed By" */}
                <div className="absolute bottom-0 right-0 bg-background pl-10 pt-6 rounded-tl-[2.5rem] z-10">
                    <p className="text-xs font-medium text-foreground pr-2 pb-2">
                        Let's build it <span className="text-destructive">together</span>
                    </p>
                </div>

                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                        {/* Links Column */}
                        <div className="flex flex-col md:flex-row gap-16 md:gap-24">
                            {/* Pages */}
                            <div className="flex flex-col gap-4">
                                <h4 className="font-display text-2xl mb-4">Pages</h4>
                                {pageLinks.map(link => (
                                    <Link key={link.name} to={link.href} className="text-muted-foreground hover:text-primary-foreground transition-colors">
                                        {link.name}
                                    </Link>
                                ))}
                            </div>

                            {/* Utility */}
                            <div className="flex flex-col gap-4">
                                <h4 className="font-display text-2xl mb-4">Utility</h4>
                                {utilityLinks.map(link => (
                                    <a key={link.name} href={link.href} className="text-muted-foreground hover:text-primary-foreground transition-colors">
                                        {link.name}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Right Side: content */}
                        <div className="flex flex-col gap-12">
                            <div>
                                <h2 className="font-display text-5xl md:text-6xl text-primary-foreground mb-8 leading-tight">
                                    Let's bring your vision to life
                                </h2>
                                <button className="bg-destructive text-destructive-foreground px-8 py-4 text-lg font-medium hover:bg-destructive/90 transition-colors flex items-center gap-2 group">
                                    Contact us now
                                    <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-gray-400">
                                <div>
                                    <p className="font-medium text-white mb-1">Call us on:</p>
                                    <a href="tel:+555845889" className="hover:text-primary-foreground transition-colors">+(555) 845 889</a>
                                </div>
                                <div>
                                    <p className="font-medium text-white mb-1">Email us on:</p>
                                    <a href="mailto:example@propilo.com" className="hover:text-primary-foreground transition-colors">example@propilo.com</a>
                                </div>
                                <div className="md:col-span-2">
                                    <p className="font-medium text-white mb-1">Address:</p>
                                    <p>Chicago HQ Estica Cop. Macomb, MI 48042</p>
                                </div>
                            </div>

                            <div>
                                <p className="text-gray-400 mb-4">Social media links:</p>
                                <div className="flex gap-4">
                                    {[Facebook, Instagram, Linkedin, Twitter, Youtube].map((Icon, i) => (
                                        <a key={i} href="#" className="w-10 h-10 bg-secondary/10 flex items-center justify-center hover:bg-destructive transition-colors text-primary-foreground">
                                            <Icon size={18} />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
