
import ScrollSection from "./ScrollSection";

const processSteps = [
    {
        id: 1,
        title: "Assess & Strategize",
        description:
            "We begin by evaluating your current systems, processes, and challenges to develop.",
    },
    {
        id: 2,
        title: "Design & Implement",
        description:
            "We develop practical, scalable solutions and integrate them into your operations' impact.",
    },
    {
        id: 3,
        title: "Optimize & Support",
        description:
            "We continuously monitor performance, fine-tune processes, and provide guidance.",
    },
];

const ProcessSection = () => {
    return (
        <section className="py-24 md:py-32 px-6 bg-background relative overflow-hidden">
            {/* Vertical Dashed Lines Decoration */}
            <div className="absolute top-0 bottom-0 left-8 md:left-24 w-px border-l-2 border-dashed border-border opacity-50" />
            <div className="absolute top-0 bottom-0 right-8 md:right-24 w-px border-r-2 border-dashed border-border opacity-50" />
            <div className="absolute top-0 bottom-0 left-12 md:left-32 w-px border-l border-dashed border-border opacity-40" />
            <div className="absolute top-0 bottom-0 right-12 md:right-32 w-px border-r border-dashed border-border opacity-40" />

            <div className="max-w-[1200px] mx-auto relative z-10">
                <ScrollSection>
                    <h2 className="text-center font-display text-4xl md:text-5xl lg:text-5xl text-foreground mb-24 max-w-3xl mx-auto leading-tight">
                        A smarter way to solve industrial challenges
                    </h2>
                </ScrollSection>

                <div className="relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-[28px] left-[16%] right-[16%] h-[2px] border-t-2 border-dotted border-border z-0" />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
                        {processSteps.map((step, index) => (
                            <ScrollSection key={step.id} delay={index * 0.2}>
                                <div className="flex flex-col items-center text-center">
                                    {/* Hexagon/Arrow Shape Marker */}
                                    <div className="relative w-16 h-14 bg-primary mb-8 flex items-center justify-center text-primary-foreground font-bold text-xl shadow-lg shadow-muted/50"
                                        style={{
                                            clipPath: "polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 0 50%, 0% 0%)",
                                            borderRadius: "4px"
                                        }}
                                    >
                                        <span className="relative z-10 pr-2">{step.id}</span>
                                    </div>

                                    <h3 className="font-display text-2xl mb-4 text-foreground">
                                        {step.title}
                                    </h3>
                                    <p className="font-body text-muted-foreground leading-relaxed max-w-xs text-sm">
                                        {step.description}
                                    </p>
                                </div>
                            </ScrollSection>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;
