import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollSection from "@/components/ScrollSection";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const posts = [
    {
        id: 1,
        date: "Sep 18, 2024",
        title: "5 Key strategies for growing your business in 2024",
        author: "Amanda Reed",
        category: "Strategy",
        image:
            "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop&q=60",
        excerpt:
            "Discover the most effective approaches to scaling your brand presence and driving sustainable growth in today's competitive landscape.",
    },
    {
        id: 2,
        date: "Sep 12, 2024",
        title: "The future of AI: what to expect in the next decade",
        author: "Bryan Knight",
        category: "Technology",
        image:
            "https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=800&auto=format&fit=crop&q=60",
        excerpt:
            "Artificial intelligence is evolving rapidly. Here's what businesses need to prepare for in the years ahead.",
    },
    {
        id: 3,
        date: "Aug 28, 2024",
        title: "Why minimalist design still dominates the web",
        author: "Sophia Lin",
        category: "Design",
        image:
            "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=60",
        excerpt:
            "Clean, purposeful design isn't just a trend — it's an approach that improves usability, performance, and brand perception.",
    },
    {
        id: 4,
        date: "Aug 15, 2024",
        title: "Building a brand identity that resonates",
        author: "James Carter",
        category: "Branding",
        image:
            "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&auto=format&fit=crop&q=60",
        excerpt:
            "A strong brand goes beyond a logo. Learn how to craft an identity that connects emotionally with your audience.",
    },
    {
        id: 5,
        date: "Jul 30, 2024",
        title: "The psychology of color in digital design",
        author: "Amara Osei",
        category: "Design",
        image:
            "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop&q=60",
        excerpt:
            "Color choices influence perception, trust, and conversion. Here's how to use them intentionally in your digital products.",
    },
    {
        id: 6,
        date: "Jul 18, 2024",
        title: "How to optimize your website for performance",
        author: "Marcus Reed",
        category: "Engineering",
        image:
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60",
        excerpt:
            "Speed matters. Explore practical techniques to make your website faster and improve user experience.",
    },
];

const Blog = () => {
    const [featured, ...rest] = posts;

    return (
        <div className="min-h-screen bg-background">
            <Header />

            {/* Hero Banner */}
            <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 px-6 overflow-hidden">
                <div className="absolute -top-32 right-0 w-96 h-96 bg-destructive/5 rounded-full blur-3xl pointer-events-none" />

                <div className="max-w-[1400px] mx-auto relative z-10">
                    <ScrollSection>
                        <div className="flex items-center gap-3 mb-6">
                            <span className="h-2 w-2 bg-destructive rounded-full" />
                            <p className="font-body text-sm font-medium uppercase tracking-wide text-primary">
                                Our Blog
                            </p>
                        </div>
                    </ScrollSection>
                    <ScrollSection delay={0.1}>
                        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.9] text-foreground mb-8">
                            Insights &<br />
                            Updates
                        </h1>
                    </ScrollSection>
                    <ScrollSection delay={0.2}>
                        <p className="font-body text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
                            Thoughts on design, technology, strategy, and the digital
                            landscape — from our team to yours.
                        </p>
                    </ScrollSection>
                </div>
            </section>

            {/* Featured Post */}
            <section className="pb-16 md:pb-24 px-6">
                <div className="max-w-[1400px] mx-auto">
                    <ScrollSection>
                        <motion.div
                            className="group relative rounded-3xl overflow-hidden bg-muted/20 cursor-pointer"
                            whileHover={{ y: -4 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="grid md:grid-cols-2 min-h-[400px]">
                                {/* Image */}
                                <div className="relative h-64 md:h-auto overflow-hidden">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                        style={{ backgroundImage: `url(${featured.image})` }}
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-8 md:p-12 flex flex-col justify-center bg-card border-l border-border/50">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="px-3 py-1 bg-destructive/10 text-destructive text-xs font-medium rounded-full">
                                            {featured.category}
                                        </span>
                                        <span className="text-muted-foreground text-sm">
                                            {featured.date}
                                        </span>
                                    </div>
                                    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-4 text-foreground leading-tight">
                                        {featured.title}
                                    </h2>
                                    <p className="font-body text-muted-foreground text-lg leading-relaxed mb-6">
                                        {featured.excerpt}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <span className="font-body text-sm text-muted-foreground">
                                            by{" "}
                                            <span className="text-foreground font-medium">
                                                {featured.author}
                                            </span>
                                        </span>
                                        <span className="inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:text-destructive transition-colors">
                                            Read article
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </ScrollSection>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="pb-24 md:pb-32 px-6">
                <div className="max-w-[1400px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {rest.map((post, index) => (
                            <ScrollSection key={post.id} delay={index * 0.1}>
                                <motion.div
                                    className="group rounded-2xl overflow-hidden bg-card border border-border/50 h-full cursor-pointer hover:shadow-lg transition-shadow"
                                    whileHover={{ y: -6 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {/* Image */}
                                    <div className="relative h-52 overflow-hidden">
                                        <div
                                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                            style={{ backgroundImage: `url(${post.image})` }}
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium rounded-full text-foreground">
                                                {post.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <div className="text-destructive font-medium text-sm mb-3">
                                            {post.date}
                                        </div>
                                        <h3 className="font-display text-xl md:text-2xl mb-3 leading-tight text-foreground group-hover:text-muted-foreground transition-colors">
                                            {post.title}
                                        </h3>
                                        <p className="font-body text-muted-foreground text-sm leading-relaxed mb-4">
                                            {post.excerpt}
                                        </p>
                                        <div className="flex items-center justify-between pt-4 border-t border-border/50">
                                            <span className="font-body text-xs text-muted-foreground">
                                                by{" "}
                                                <span className="text-foreground font-medium">
                                                    {post.author}
                                                </span>
                                            </span>
                                            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-destructive group-hover:translate-x-1 transition-all" />
                                        </div>
                                    </div>
                                </motion.div>
                            </ScrollSection>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Blog;
