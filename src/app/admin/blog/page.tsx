"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminBlogPage() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        title: "",
        slug: "",
        excerpt: "",
        content: "",
        password: ""
    });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        if (name === "title" && !formData.slug) {
            // Auto-generate slug from title
            setFormData(prev => ({
                ...prev,
                slug: value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')
            }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (formData.password !== "homepros2026") {
            setMessage("Incorrect Password");
            return;
        }

        setLoading(true);
        setMessage("");

        try {
            const res = await fetch('/api/blog', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (res.ok) {
                setMessage("Post created successfully!");
                // Reset form (except password)
                setFormData(prev => ({ ...prev, title: "", slug: "", excerpt: "", content: "" }));
                router.refresh();
            } else {
                const data = await res.json();
                setMessage(`Error: ${data.error}`);
            }
        } catch (err) {
            setMessage("Something went wrong.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4">
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md">
                <h1 className="text-3xl font-bold mb-8">Create Blog Post</h1>

                {message && (
                    <div className={`p-4 rounded-md mb-6 ${message.includes('Error') || message.includes('Incorrect') ? 'bg-red-50 text-red-800' : 'bg-green-50 text-green-800'}`}>
                        {message}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-2">
                        <Label htmlFor="title">Post Title</Label>
                        <Input
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                            placeholder="e.g. 5 Tips for Cleaner Air"
                        />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="slug">Slug (URL)</Label>
                        <Input
                            id="slug"
                            name="slug"
                            value={formData.slug}
                            onChange={handleChange}
                            required
                            placeholder="e.g. 5-tips-for-cleaner-air"
                        />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="excerpt">Excerpt (Short Summary)</Label>
                        <Textarea
                            id="excerpt"
                            name="excerpt"
                            value={formData.excerpt}
                            onChange={handleChange}
                            required
                            placeholder="Appears on the main blog page..."
                            rows={2}
                        />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="content">HTML Content</Label>
                        <Textarea
                            id="content"
                            name="content"
                            value={formData.content}
                            onChange={handleChange}
                            required
                            placeholder="<p>Write your article here...</p>"
                            className="font-mono text-sm"
                            rows={12}
                        />
                        <p className="text-xs text-muted-foreground">Accepts HTML tags.</p>
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="password">Admin Password</Label>
                        <Input
                            id="password"
                            name="password"
                            type="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <Button type="submit" size="lg" className="w-full" disabled={loading}>
                        {loading ? "Saving..." : "Publish Post"}
                    </Button>
                </form>
            </div>
        </div>
    );
}
