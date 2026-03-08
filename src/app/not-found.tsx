import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-6xl font-black text-slate-900 mb-4">404</h1>
      <h2 className="text-2xl font-bold text-slate-700 mb-4">Page Not Found</h2>
      <p className="text-lg text-slate-500 mb-8 max-w-md">
        Sorry, the page you&apos;re looking for doesn&apos;t exist. Let us help you find what you need.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/"
          className="px-8 py-3 bg-primary text-white font-bold rounded-xl hover:bg-red-600 transition-colors"
        >
          Go Home
        </Link>
        <a
          href="tel:18254359977"
          className="px-8 py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-700 transition-colors"
        >
          Call (825) 435-9977
        </a>
      </div>
    </div>
  );
}
