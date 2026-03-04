
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import ScrollSection from "./ScrollSection";

const blogs = [
    {
        id: 1,
        date: "Sep 18, 2024",
        title: "5 Key strategies for growing your business in 2024",
        author: "Amanda Reed",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop&q=60", // Red abstract
    },
    {
        id: 2,
        date: "Sep 18, 2024",
        title: "The future of AI: what to expect in the next decade",
        author: "Bryan Knight",
        image: "https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=800&auto=format&fit=crop&q=60", // Face abstract
    },
];

const TrendsSection = () => {
    return (
        <section className="py-24 md:py-32 px-6 bg-background relative overflow-hidden">
            <div className="max-w-[1200px] mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

                    {/* Left Column: Heading & CTA */}
                    <ScrollSection>
                        <div className="flex flex-col items-start text-left">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="w-2 h-2 bg-destructive rounded-sm"></span>
                                <span className="font-body text-sm font-medium uppercase tracking-wide text-primary">
                                    Trending now
                                </span>
                            </div>

                            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-8 text-foreground leading-tight">
                                Insights and <br /> updates
                            </h2>

                            <Button
                                size="lg"
                                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-8 py-6 text-lg transition-all"
                            >
                                View all blog
                            </Button>
                        </div>
                    </ScrollSection>

                    {/* Right Column: Blog List */}
                    <div className="flex flex-col gap-12">
                        {blogs.map((blog, index) => (
                            <ScrollSection key={blog.id} delay={index * 0.2}>
                                <div className="group flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start cursor-pointer">
                                    {/* Image */}
                                    <div className="w-full md:w-48 h-48 md:h-32 rounded-2xl overflow-hidden flex-shrink-0 relative">
                                        <div
                                            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                            style={{ backgroundImage: `url(${blog.image})` }}
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <div className="text-destructive font-medium text-sm mb-2">
                                            {blog.date}
                                        </div>
                                        <h3 className="font-display text-2xl lg:text-3xl mb-3 leading-tight group-hover:text-muted-foreground transition-colors">
                                            {blog.title}
                                        </h3>
                                        <div className="text-muted-foreground text-sm font-medium">
                                            by {blog.author}
                                        </div>
                                    </div>
                                </div>
                            </ScrollSection>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default TrendsSection;
