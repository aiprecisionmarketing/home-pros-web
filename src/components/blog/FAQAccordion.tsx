"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  return (
    <Accordion type="single" collapsible className="space-y-3">
      {items.map((faq, index) => (
        <AccordionItem
          key={index}
          value={`faq-${index}`}
          className="border-0 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden group"
          itemScope
          itemProp="mainEntity"
          itemType="https://schema.org/Question"
        >
          <AccordionTrigger className="px-6 py-5 text-left font-bold text-slate-900 hover:no-underline hover:text-[#e9261c] transition-colors [&[data-state=open]]:text-[#e9261c] [&[data-state=open]]:bg-red-50/50 text-base gap-4">
            <span itemProp="name" className="pr-2">{faq.question}</span>
          </AccordionTrigger>
          <AccordionContent
            className="px-6 pb-6"
            itemScope
            itemProp="acceptedAnswer"
            itemType="https://schema.org/Answer"
          >
            <div className="border-t border-slate-100 pt-4">
              <p
                className="text-base text-slate-600 leading-relaxed mb-0"
                itemProp="text"
              >
                {faq.answer}
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
