import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ScrollSection from "./ScrollSection";

const services = [
  {
    number: "01",
    title: "Brand Engineering & Identity",
    description: "We create visual and verbal brand systems—logo, typography, colors, and voice—that give your business a million-dollar competitive edge.",
    categories: ["AI Audit", "Brand", "Visual"],
    slug: "/services/brand-engineering",
    images: [
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1558655146-d09347e0c766?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1626785774583-b63d04f2dbe1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    ]
  },
  {
    number: "02",
    title: "Full-Stack Product Engineering",
    description: "We build the complete engine of your company—Web Apps, Mobile Apps, and Databases—with AI-native workflows that deliver in weeks, not months.",
    categories: ["Web App", "Mobile", "SaaS"],
    slug: "/services/full-stack-product",
    images: [
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1605379399642-870262d3d051?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    ]
  },
  {
    number: "03",
    title: "Custom AI Agents & LLM Integration",
    description: "We give your business a brain—AI that knows your data, answers support tickets, trains employees, and analyzes insights using RAG.",
    categories: ["AI Agents", "RAG", "LLM"],
    slug: "/services/ai-agents",
    images: [
      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    ]
  },
  {
    number: "04",
    title: "Intelligent Workflow Automation",
    description: "We sell you time back. We connect your apps—Gmail, Slack, CRM—so AI handles the manual work, with clear ROI from day one.",
    categories: ["Automation", "Integration", "ROI"],
    slug: "/services/workflow-automation",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    ]
  },
  {
    number: "05",
    title: "AI Strategy & Venture Partnership",
    description: "We become your Fractional CTO—high-level advisory that tells you what to build, not just how. Strategy, not code.",
    categories: ["Consulting", "Strategy", "CTO"],
    slug: "/services/ai-strategy",
    images: [
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    ]
  }
];

const ServicesSection = () => {
  return (
    <section className="min-h-screen py-24 md:py-32 px-6 bg-background text-foreground">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-24 md:mb-32">
          <ScrollSection>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-primary/80"></span>
              <p className="font-body text-sm font-medium uppercase tracking-wide">
                Service
              </p>
            </div>
          </ScrollSection>

          <ScrollSection delay={0.1} className="max-w-xl">
            <h2 className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.9] mb-8">
              What we do
            </h2>
            <p className="font-body text-xl text-muted-foreground/90 leading-relaxed">
              From brand identity to AI-powered automation—we build, launch, and scale your digital products faster than anyone.
            </p>
          </ScrollSection>
        </div>

        <div className="space-y-32">
          {services.map((service, index) => (
            <ScrollSection key={service.number} delay={0.1}>
              <Link to={service.slug}>
                <motion.div
                  className="group relative grid grid-cols-1 md:grid-cols-12 gap-y-8 md:gap-8 items-center"
                  initial="initial"
                  whileHover="hover"
                  animate="initial"
                >
                  {/* Number */}
                  <div className="md:col-span-1">
                    <span className="font-display italic text-2xl text-muted-foreground/60">
                      ({service.number})
                    </span>
                  </div>

                  {/* Images (Desktop Only - Visual Centerpiece) */}
                  <div className="hidden md:block md:col-span-5 relative h-[200px] w-full flex items-center justify-center">
                    <div className="relative w-40 h-40">
                      {service.images.map((img, i) => (
                        <motion.img
                          key={i}
                          src={img}
                          alt={`${service.title} preview ${i + 1}`}
                          className="absolute top-0 left-0 w-full h-full object-cover rounded-xl shadow-lg"
                          variants={{
                            initial: {
                              x: 0,
                              scale: 1,
                              rotate: 0,
                              zIndex: 3 - i,
                              opacity: i === 0 ? 1 : 0
                            },
                            hover: {
                              x: (i - 1) * 60,
                              scale: 1.1,
                              rotate: (i - 1) * 10,
                              zIndex: i + 1,
                              opacity: 1,
                              transition: { duration: 0.4, ease: "backOut" }
                            }
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="md:col-span-4 pl-0 md:pl-8">
                    <h3 className="font-display text-4xl mb-4 group-hover:text-destructive transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="font-body text-muted-foreground text-lg mb-6 max-w-sm">
                      {service.description}
                    </p>
                  </div>

                  {/* Categories */}
                  <div className="md:col-span-2 flex flex-col items-start gap-4">
                    <span className="font-body text-lg">Category</span>
                    <div className="flex flex-wrap gap-2">
                      {service.categories.map((cat, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 border border-border rounded-lg text-sm font-medium hover:bg-secondary transition-colors cursor-default"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>

                </motion.div>
              </Link>
            </ScrollSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
