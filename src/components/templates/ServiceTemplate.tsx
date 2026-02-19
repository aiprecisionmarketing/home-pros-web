
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Phone } from "lucide-react";

interface ServiceTemplateProps {
    title: string;
    description?: string;
    city?: string;
    content?: string;
}

export function ServiceTemplate({ title, description, city, content }: ServiceTemplateProps) {
    const displayTitle = city ? `${title} in ${city}` : title;

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero */}
            <section className="bg-primary/5 py-20 text-center px-4">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 capitalize text-foreground">
                    {displayTitle}
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                    {description || `Professional ${title.toLowerCase()} services you can trust. Licensed, insured, and satisfaction guaranteed.`}
                </p>
                <Button size="lg" className="h-12 px-8 text-lg">
                    Get a Free Quote
                </Button>
            </section>

            {/* Main Content */}
            <section className="container mx-auto py-16 px-6 grid md:grid-cols-3 gap-12">
                <div className="md:col-span-2 space-y-8">
                    <Card>
                        <CardHeader>
                            <CardTitle>Why Choose Us?</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-muted-foreground">
                                We are dedicated to providing top-tier service. Our team of experts ensures that your home needs are met with precision and care.
                                Whether you need emergency repairs or routine maintenance, Home Pros Group is here to help.
                            </p>
                            <ul className="grid sm:grid-cols-2 gap-4 mt-6">
                                {["Licensed Professionals", "Up-front Pricing", "Satisfaction Guarantee", "Local Experts"].map(item => (
                                    <li key={item} className="flex items-center gap-2 font-medium">
                                        <CheckCircle2 className="text-primary h-5 w-5" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>

                    <div className="prose max-w-none text-muted-foreground">
                        <h3 className="text-2xl font-semibold text-foreground mb-4">About Our Service</h3>
                        {content ? (
                            <div dangerouslySetInnerHTML={{ __html: content }} />
                        ) : (
                            <p>
                                Our {title} service is designed to give you peace of mind. We use the updated tools and techniques to ensure quality results.
                                Contact us today to schedule an appointment.
                            </p>
                        )}
                    </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                    <Card className="bg-secondary/50 border-none">
                        <CardHeader>
                            <CardTitle>Contact Us</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center gap-3 text-lg font-bold mb-4">
                                <Phone className="text-primary h-6 w-6" />
                                <span>(555) 123-4567</span>
                            </div>
                            <p className="text-sm text-muted-foreground mb-4">
                                Available 24/7 for emergency services.
                            </p>
                            <Button className="w-full">Book Online</Button>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </div>
    );
}
