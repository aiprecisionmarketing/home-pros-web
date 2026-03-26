import Link from "next/link";

export function ArticleSidebar({ relatedSlugs }: { relatedSlugs?: { title: string; slug: string }[] }) {
  return (
    <aside className="lg:col-span-4 space-y-6">
      {/* Quick Contact Card */}
      <div className="bg-gradient-to-br from-[#e9261c] to-red-700 rounded-2xl shadow-xl p-6 text-white sticky top-6">
        <h3 className="text-2xl font-black mb-4">Need Help Now?</h3>
        <p className="mb-6 text-white/90">
          Call us today for your free quote!
        </p>
        <a
          href="tel:17809327337"
          className="block w-full py-4 px-6 bg-white text-[#e9261c] text-center text-lg font-bold rounded-xl hover:bg-slate-100 transition-all shadow-lg no-underline"
        >
          +1 (780) 932-7337
        </a>
        <div className="mt-6 pt-6 border-t border-white/20">
          <div className="space-y-3 text-sm text-white/90">
            <div className="flex items-start gap-2"><span>&#10003;</span><span>Flat-rate pricing</span></div>
            <div className="flex items-start gap-2"><span>&#10003;</span><span>No hidden fees</span></div>
            <div className="flex items-start gap-2"><span>&#10003;</span><span>Local family-owned</span></div>
            <div className="flex items-start gap-2"><span>&#10003;</span><span>Serving since 2018</span></div>
          </div>
        </div>
      </div>

      {/* Service Areas Card */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-xl font-black mb-4 text-slate-900">Service Areas</h3>
        <ul className="space-y-2 text-sm text-slate-600 list-none pl-0 mb-0">
          {["Stony Plain", "Spruce Grove", "Parkland County", "Wabamun", "Duffield", "Entwistle"].map(area => (
            <li key={area} className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#e9261c] rounded-full flex-shrink-0" />
              {area}
            </li>
          ))}
        </ul>
      </div>

      {/* Related Articles */}
      {relatedSlugs && relatedSlugs.length > 0 && (
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-black mb-4 text-slate-900">Related Articles</h3>
          <ul className="space-y-3 list-none pl-0 mb-0">
            {relatedSlugs.map((article) => (
              <li key={article.slug}>
                <Link
                  href={`/blog/${article.slug}`}
                  className="text-sm font-medium text-slate-700 hover:text-[#e9261c] transition-colors no-underline leading-snug block"
                >
                  {article.title} &rarr;
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </aside>
  );
}
