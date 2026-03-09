import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight, Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logo/propilo-header.png";

const serviceLinks = [
  { name: "Brand Engineering & Identity", href: "/services/brand-engineering" },
  { name: "Full-Stack Product Engineering", href: "/services/full-stack-product" },
  { name: "Custom AI Agents & LLM", href: "/services/ai-agents" },
  { name: "Workflow Automation", href: "/services/workflow-automation" },
  { name: "AI Strategy & Partnership", href: "/services/ai-strategy" },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const isServicesActive = location.pathname.startsWith("/services");

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setServicesOpen(false);
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Propilo" className="h-8 md:h-10 w-auto object-contain" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {/* Home & About */}
          {navLinks.slice(0, 2).map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`px-4 py-2 text-sm font-medium transition-all duration-200 rounded-full ${location.pathname === link.href
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Services Dropdown */}
          <div
            className="relative h-full flex items-center"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
            ref={servicesRef}
          >
            <button
              className={`px-4 py-2 text-sm font-medium transition-all duration-200 rounded-full flex items-center gap-1 ${isServicesActive
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
            >
              Services
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
            </button>

            {/* Dropdown Panel */}
            {servicesOpen && (
              <div className="absolute top-[calc(100%-8px)] left-1/2 -translate-x-1/2 mt-2 w-72 bg-background border border-border rounded-2xl shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="p-2">
                  {serviceLinks.map((service) => (
                    <Link
                      key={service.href}
                      to={service.href}
                      className={`block px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 ${location.pathname === service.href
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                        }`}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Blog & Contact */}
          {navLinks.slice(2).map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`px-4 py-2 text-sm font-medium transition-all duration-200 rounded-full ${location.pathname === link.href
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Contact Us Button */}
        <Link
          to="/contact"
          className="hidden md:flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-foreground border border-border rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        >
          Contact us
          <ArrowUpRight className="w-4 h-4" />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-muted rounded-md transition-colors"
          aria-label="Toggle menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 text-foreground" />
          ) : (
            <Menu className="w-6 h-6 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <nav className="container mx-auto px-6 py-4 flex flex-col gap-2">
            {/* Home & About */}
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`px-4 py-3 text-sm font-medium transition-all duration-200 rounded-lg ${location.pathname === link.href
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            {/* Mobile Services Accordion */}
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className={`px-4 py-3 text-sm font-medium transition-all duration-200 rounded-lg flex items-center justify-between ${isServicesActive
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
            >
              Services
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`} />
            </button>

            {mobileServicesOpen && (
              <div className="pl-4 flex flex-col gap-1">
                {serviceLinks.map((service) => (
                  <Link
                    key={service.href}
                    to={service.href}
                    className={`px-4 py-2.5 text-sm font-medium transition-all duration-200 rounded-lg ${location.pathname === service.href
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                      }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}

            {/* Blog & Contact */}
            {navLinks.slice(2).map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`px-4 py-3 text-sm font-medium transition-all duration-200 rounded-lg ${location.pathname === link.href
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            <Link
              to="/contact"
              className="mt-2 flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-foreground border border-border rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact us
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
