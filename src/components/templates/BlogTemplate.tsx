
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge"; // Ensure we have Badge or basic span
import { Calendar, User } from "lucide-react";

interface BlogTemplateProps {
    slug: string;
}

export function BlogTemplate({ slug }: BlogTemplateProps) {
    const title = slug.split("/").pop()?.replace(/-/g, " ") || "Blog Post";

    return (
        <article className="container mx-auto py-20 px-6 max-w-4xl">
            <header className="mb-12 text-center">
                <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground mb-6">
                    <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> Jan 30, 2026</span>
                    <span className="flex items-center gap-1"><User className="h-4 w-4" /> Home Pros Team</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold capitalize mb-8 leading-tight">
                    {title}
                </h1>
                <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
            </header>

            <div className="prose prose-lg mx-auto text-muted-foreground">
                <p className="lead text-xl text-foreground font-medium mb-8">
                    This article ({slug}) has been migrated to our new platform. Content is being updated to reflect the latest industry standards.
                </p>
                <p>
                    Maintaing your home requires diligence and the right knowledge. In this post, we explore essential tips and tricks to keep your property in top condition.
                </p>
                {/* Placeholder for real content migration */}
                <div className="my-10 p-8 bg-gray-50 rounded-xl border border-dashed text-center">
                    <p className="italic text-gray-500">Full article content is being optimized...</p>
                </div>
            </div>

            <div className="mt-16 pt-8 border-t text-center">
                <h3 className="text-2xl font-bold mb-4">Need Professional Help?</h3>
                <p className="mb-6 text-muted-foreground">Our experts are ready to assist you with any home improvement project.</p>
                <Button size="lg">Contact Us</Button>
            </div>
        </article>
    );
}
