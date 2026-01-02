import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AnimatedSection } from "@/components/AnimatedSection";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  faqs: FAQItem[];
  className?: string;
}

export const FAQSection = ({
  title = "Frequently Asked Questions",
  subtitle = "Everything you need to know about our services",
  faqs,
  className = "",
}: FAQSectionProps) => {
  return (
    <section className={`py-20 lg:py-32 ${className}`}>
      <div className="container-custom">
        <AnimatedSection className="text-center mb-12">
          <span className="section-label">FAQ</span>
          <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground mt-4 mb-4">
            {title}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">{subtitle}</p>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-card/80 backdrop-blur-sm border border-border rounded-xl px-6 data-[state=open]:border-primary/50 transition-all hover:border-primary/30"
                >
                  <AccordionTrigger className="text-left text-foreground hover:no-underline py-5">
                    <span className="font-medium pr-4">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
