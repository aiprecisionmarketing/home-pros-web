import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowLeft } from "lucide-react";
import Link from "next/link";
import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";

// Generate static params for all posts
export async function generateStaticParams() {
    const filePath = path.join(process.cwd(), "src/data/posts.json");
    if (!fs.existsSync(filePath)) return [];
    const posts = JSON.parse(fs.readFileSync(filePath, "utf8"));
    return posts.map((post: any) => ({
        slug: post.slug,
    }));
}

async function getPost(slug: string) {
    const filePath = path.join(process.cwd(), "src/data/posts.json");
    if (!fs.existsSync(filePath)) return null;
    const posts = JSON.parse(fs.readFileSync(filePath, "utf8"));
    return posts.find((p: any) => p.slug === slug);
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
    const post = await getPost(params.slug);

    if (!post) {
        notFound();
    }

    return (
        <article className="min-h-screen bg-white">
            <div className="container mx-auto py-20 px-6 max-w-4xl">
                <div className="mb-8">
                    <Button variant="ghost" asChild className="pl-0 hover:bg-transparent hover:text-primary">
                        <Link href="/blog"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog</Link>
                    </Button>
                </div>

                <header className="mb-12 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold capitalize mb-8 leading-tight">
                        {post.title}
                    </h1>
                    <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground mb-6">
                        <span className="flex items-center gap-2"><Calendar className="h-4 w-4" /> {post.date}</span>
                        <span className="flex items-center gap-2"><User className="h-4 w-4" /> Home Pros Team</span>
                    </div>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
                </header>

                <div
                    className="prose prose-lg mx-auto text-slate-700 prose-headings:font-bold prose-headings:text-slate-900 prose-a:text-primary"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

                <div className="mt-16 pt-8 border-t text-center bg-slate-50 p-8 rounded-xl">
                    <h3 className="text-2xl font-bold mb-4">Need Professional Help?</h3>
                    <p className="mb-6 text-muted-foreground">Our experts are ready to assist you with any home improvement project.</p>
                    <Button size="lg" asChild>
                        <Link href="/#contact">Contact Us</Link>
                    </Button>
                </div>
            </div>
        </article>
    );
}
