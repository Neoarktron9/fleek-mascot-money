import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="container mx-auto py-16 md:py-24">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">FAQ</h2>
        <p className="text-muted-foreground mt-2">Got questions? We’ve got very serious answers.</p>
      </div>

      <Accordion type="single" collapsible className="max-w-3xl mx-auto">
        <AccordionItem value="item-1">
          <AccordionTrigger>What is $FLEEKCOIN?</AccordionTrigger>
          <AccordionContent>
            A parody meme coin celebrating impeccable style and good vibes. No promises, only memes.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is there a roadmap?</AccordionTrigger>
          <AccordionContent>
            Yes. It’s ambitious and extremely on-fleek. See the roadmap section.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is this financial advice?</AccordionTrigger>
          <AccordionContent>
            Absolutely not. Memes only. Always do your own research (DYOR).
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is $FLEEKCOIN?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A parody meme coin celebrating impeccable style and good vibes. No promises, only memes.",
                },
              },
              {
                "@type": "Question",
                name: "Is there a roadmap?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. It’s ambitious and extremely on-fleek. See the roadmap section.",
                },
              },
              {
                "@type": "Question",
                name: "Is this financial advice?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Absolutely not. Memes only. Always do your own research (DYOR).",
                },
              },
            ],
          }),
        }}
      />
    </section>
  );
};

export default FAQ;
