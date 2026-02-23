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

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getPost(slug);

    if (!post) {
        notFound();
    }

    return (
        <article className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
            {/* Hero Section with Featured Image */}
            {post.featured_image && (
                <div className="relative h-[400px] w-full overflow-hidden">
                    <img
                        src={post.featured_image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                        <div className="container mx-auto max-w-5xl">
                            <Button variant="ghost" asChild className="mb-4 text-white hover:text-white hover:bg-white/20">
                                <Link href="/blog"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            )}

            <div className="container mx-auto py-12 px-6 max-w-5xl">
                {/* Title Section */}
                <header className="mb-12 -mt-20 relative z-10">
                    <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="px-4 py-1.5 bg-primary/10 text-primary text-sm font-bold rounded-full">
                                {post.category}
                            </span>
                            {post.tags && post.tags.slice(0, 2).map((tag: string, i: number) => (
                                <span key={i} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight text-slate-900">
                            {post.title}
                        </h1>
                        <div className="flex items-center gap-6 text-sm text-slate-500">
                            <span className="flex items-center gap-2">
                                <Calendar className="h-4 w-4 text-primary" /> {post.date}
                            </span>
                            <span className="flex items-center gap-2">
                                <User className="h-4 w-4 text-primary" /> {post.author || 'Home Pros Team'}
                            </span>
                        </div>
                    </div>
                </header>

                {/* Content with Enhanced Styling */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-8">
                        <div className="bg-white rounded-2xl shadow-lg p-10 md:p-16">
                            <div
                                className="prose prose-xl max-w-none
                                    prose-headings:font-black prose-headings:text-slate-900 prose-headings:scroll-mt-20 prose-headings:tracking-tight
                                    prose-h2:text-4xl prose-h2:mt-16 prose-h2:mb-8 prose-h2:leading-tight
                                    prose-h3:text-3xl prose-h3:mt-12 prose-h3:mb-6 prose-h3:text-primary prose-h3:leading-snug
                                    prose-h4:text-2xl prose-h4:mt-10 prose-h4:mb-5 prose-h4:text-slate-800 prose-h4:font-bold
                                    prose-p:text-slate-700 prose-p:text-xl prose-p:leading-loose prose-p:mb-8 prose-p:font-light
                                    prose-a:text-primary prose-a:font-semibold prose-a:no-underline hover:prose-a:underline prose-a:transition-all
                                    prose-strong:text-slate-900 prose-strong:font-bold prose-strong:text-[1.05em]
                                    prose-ul:my-8 prose-ul:space-y-4 prose-ul:text-lg
                                    prose-ol:my-8 prose-ol:space-y-4 prose-ol:text-lg
                                    prose-li:text-slate-700 prose-li:leading-loose prose-li:text-xl
                                    prose-img:rounded-2xl prose-img:shadow-2xl prose-img:my-12 prose-img:w-full
                                    prose-blockquote:border-l-8 prose-blockquote:border-primary prose-blockquote:bg-gradient-to-r prose-blockquote:from-slate-50 prose-blockquote:to-white prose-blockquote:py-8 prose-blockquote:px-10 prose-blockquote:rounded-r-2xl prose-blockquote:my-12 prose-blockquote:text-2xl prose-blockquote:italic
                                    prose-table:shadow-2xl prose-table:rounded-xl prose-table:overflow-hidden prose-table:my-12 prose-table:text-lg
                                    prose-thead:bg-gradient-to-r prose-thead:from-primary prose-thead:to-red-600 prose-thead:text-white
                                    prose-tr:border-slate-200
                                    prose-td:p-6 prose-th:p-6 prose-th:text-left prose-th:font-bold
                                    [&_div[style*='background']]:rounded-2xl [&_div[style*='background']]:shadow-lg [&_div[style*='background']]:my-12 [&_div[style*='background']]:p-10
                                    first-letter:text-7xl first-letter:font-black first-letter:text-primary first-letter:float-left first-letter:mr-3 first-letter:leading-none first-letter:mt-1"
                                dangerouslySetInnerHTML={{ __html: post.content }}
                            />
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-4 space-y-6">
                        {/* Quick Contact Card */}
                        <div className="bg-gradient-to-br from-primary to-red-700 rounded-2xl shadow-xl p-6 text-white sticky top-6">
                            <h3 className="text-2xl font-black mb-4">Need Help Now?</h3>
                            <p className="mb-6 text-white/90">
                                Call us today for your free quote!
                            </p>
                            <a
                                href="tel:18254359977"
                                className="block w-full py-4 px-6 bg-white text-primary text-center text-lg font-bold rounded-xl hover:bg-slate-100 transition-all shadow-lg hover:scale-105"
                            >
                                📞 +1 (825) 435-9977
                            </a>
                            <div className="mt-6 pt-6 border-t border-white/20">
                                <div className="space-y-3 text-sm text-white/90">
                                    <div className="flex items-start gap-2">
                                        <span>✓</span>
                                        <span>Flat-rate pricing</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <span>✓</span>
                                        <span>No hidden fees</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <span>✓</span>
                                        <span>Local family-owned</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <span>✓</span>
                                        <span>Serving since 2018</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Service Areas Card */}
                        <div className="bg-white rounded-2xl shadow-lg p-6">
                            <h3 className="text-xl font-black mb-4 text-slate-900">Service Areas</h3>
                            <ul className="space-y-2 text-sm text-slate-600">
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                                    Stony Plain
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                                    Spruce Grove
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                                    Parkland County
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                                    Wabamun
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                                    Duffield
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                                    Entwistle
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Final CTA */}
                <div className="mt-16 bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl shadow-2xl p-12 text-center text-white">
                    <h3 className="text-4xl font-black mb-4">Ready to Get Started?</h3>
                    <p className="text-xl mb-8 text-slate-300 max-w-2xl mx-auto">
                        Serving Stony Plain, Spruce Grove, and all of Parkland County with honest, flat-rate HVAC cleaning since 2018.
                    </p>
                    <a
                        href="tel:18254359977"
                        className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-white text-2xl font-black rounded-xl hover:bg-red-600 transition-all shadow-xl hover:scale-105"
                    >
                        <span>📞</span> Call +1 (825) 435-9977 for Your Free Quote
                    </a>
                    <p className="mt-6 text-sm text-slate-400">
                        No hidden fees • Flat-rate pricing • Local family-owned business
                    </p>
                </div>
            </div>
        </article>
    );
}
