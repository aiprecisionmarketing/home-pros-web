import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

import Link from "next/link";
import fs from "fs";
import path from "path";

async function getPosts() {
    const filePath = path.join(process.cwd(), "src/data/posts.json");
    if (!fs.existsSync(filePath)) return [];
    const fileContents = fs.readFileSync(filePath, "utf8");
    return JSON.parse(fileContents);
}

export default async function BlogIndexPage() {
    const posts = await getPosts();

    return (
        <div className="flex flex-col min-h-screen">
            <section className="py-20 bg-slate-50">
                <div className="container px-4 mx-auto">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl font-bold tracking-tight mb-4">Latest Home Maintenance Tips</h1>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Expert advice on keeping your home safe, efficient, and comfortable.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post: any) => (
                            <Card key={post.id} className="hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <div className="text-sm text-muted-foreground mb-2">
                                        {post.date ? new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : "Recent"}
                                    </div>
                                    <CardTitle className="line-clamp-2 hover:text-primary transition-colors">
                                        <Link href={`/blog/${post.slug}`}>
                                            {post.title}
                                        </Link>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="line-clamp-3 mb-4">
                                        {post.excerpt}
                                    </CardDescription>
                                    <Button variant="link" asChild className="p-0 h-auto">
                                        <Link href={`/blog/${post.slug}`}>Read More &rarr;</Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
