
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Activity, Disc, Gem, ShieldCheck } from "lucide-react"; // Logos placeholders

const testimonials = [
    {
        id: 1,
        review:
            "The level of communication and collaboration we experienced while working with this agency was unparalleled. They were not only responsive but also proactive providing us with regular updates.",
        title: "Unparalleled Communication and Commitment to Success",
        name: "Michael Philips",
        role: "CEO",
        company: "DigiMinds",
        avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=200&auto=format&fit=crop&q=60",
        logo: Activity,
    },
    {
        id: 2,
        review:
            "The level of communication and collaboration we experienced while working with this agency was unparalleled. They were not only responsive but also proactive providing us with regular updates.",
        title: "An Effortless Experience from Start to Finish",
        name: "Alex Jones",
        role: "Marketing Director",
        company: "Eleganza",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&auto=format&fit=crop&q=60",
        logo: Gem,
    },
    {
        id: 3,
        review:
            "Their attention to detail and ability to understand our unique needs made all the difference. We saw an immediate increase in customer engagement!",
        title: "Transformation that exceeded expectations",
        name: "Sarah Miller",
        role: "Founder",
        company: "LuxeAura",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=60",
        logo: Disc,
    },
    {
        id: 4,
        review:
            "Professional, efficient, and incredibly talented. The team delivered a product that not only looks great but functions perfectly.",
        title: "A true partner in digital growth",
        name: "David Chen",
        role: "CTO",
        company: "TechFlow",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=60",
        logo: ShieldCheck,
    },
];

const TestimonialsSection = () => {
    return (
        <section className="py-24 md:py-32 px-6 bg-background relative">
            <div className="max-w-[1400px] mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground max-w-xl">
                        <span className="text-black font-bold">Why our</span> <br />
                        <span className="text-muted-foreground opacity-50">Clients Love Us</span>
                    </h2>

                    {/* Navigation buttons will be placed by the Carousel component, but we can also custom place them if needed. 
                Using the default relative positioning of shadcn carousel controls for now, or wrapping to position. 
            */}
                </div>

                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full"
                >
                    <div className="absolute -top-32 right-0 hidden md:flex gap-4">
                        <CarouselPrevious className="static translate-y-0 translate-x-0 h-14 w-14 border-none bg-gray-100 hover:bg-gray-200" />
                        <CarouselNext className="static translate-y-0 translate-x-0 h-14 w-14 border-none bg-gray-100 hover:bg-gray-200" />
                    </div>

                    <CarouselContent className="-ml-8">
                        {testimonials.map((testimonial) => (
                            <CarouselItem key={testimonial.id} className="pl-8 md:basis-1/2 lg:basis-1/3">
                                <div className="bg-white border border-gray-100 shadow-xl shadow-gray-100/50 rounded-[2rem] p-10 h-full flex flex-col justify-between hover:shadow-2xl transition-shadow duration-300">
                                    <div>
                                        <h3 className="font-body font-semibold text-lg md:text-xl mb-6 leading-tight">
                                            {testimonial.title}
                                        </h3>
                                        <p className="font-body text-muted-foreground leading-relaxed mb-8">
                                            "{testimonial.review}"
                                        </p>
                                    </div>

                                    <div className="flex items-center justify-between mt-auto pt-8 border-t border-gray-50">
                                        <div className="flex items-center gap-4">
                                            <Avatar className="h-12 w-12">
                                                <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                                                <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <h4 className="font-bold text-sm text-foreground">{testimonial.name}</h4>
                                                <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2 text-muted-foreground opacity-70">
                                            <testimonial.logo className="h-5 w-5" />
                                            <span className="font-body font-semibold text-sm">{testimonial.company}</span>
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>

            </div>
        </section>
    );
};

export default TestimonialsSection;
