"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "How often should I book furnace cleaning in Spruce Grove?",
        answer: "We recommend yearly maintenance, ideally in early fall, with a full service that includes the furnace and duct cleaning if it has been several years."
    },
    {
        question: "What exactly do you clean during a furnace service?",
        answer: "Our Spruce Grove furnace cleaning includes forensic inspection and cleaning of the heat exchanger, burners, blower, and all key safety limit components."
    },
    {
        question: "Can cleaning really lower my heating bill?",
        answer: "Yes, typical efficiency improvements of 10–20% can translate into roughly $100–$300 per year in heating savings for many Alberta homes."
    },
    {
        question: "Do you also service nearby communities like Stony Plain?",
        answer: "We proudly provide furnace cleaning Stony Plain and surrounding Parkland County communities with the same detailed technical process and customer focus."
    },
    {
        question: "Can you help with plugged dryer vents too?",
        answer: "Yes, many clients bundle furnace service with Spruce Grove dryer vent cleaning for better safety and airflow in one surgical visit."
    },
    {
        question: "Do you handle commercial buildings?",
        answer: "Our team offers full Spruce Grove commercial duct cleaning for offices, shops, and multi-unit properties, using industrial-strength extraction."
    }
];

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
        }
    }))
};

export function QnASection() {
    return (
        <section className="py-32 bg-black border-t border-white/5" id="faq">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <div className="container px-4 md:px-6 mx-auto max-w-4xl">
                <div className="text-center mb-20">
                    <div className="inline-block px-3 py-1 bg-red-600/10 border border-red-500/20 rounded-md mb-4">
                        <span className="text-red-500 font-black uppercase tracking-[0.2em] text-[10px]">Technical FAQ</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 text-white uppercase italic">Laboratory Insights</h2>
                    <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">
                        Straight answers to your biggest home maintenance questions.
                    </p>
                </div>

                <Accordion type="single" collapsible className="w-full space-y-4">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`} className="border border-white/5 bg-zinc-900/50 rounded-lg px-6 overflow-hidden">
                            <AccordionTrigger className="text-left font-black uppercase text-xl py-6 hover:text-red-500 transition-colors tracking-tighter italic">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-400 pb-6 text-lg leading-relaxed font-medium">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}
