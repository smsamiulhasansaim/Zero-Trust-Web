"use client";

import { Section } from "@/components/Section";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/Card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Zero Trust Web transformed our outdated site into a secure, high-performing platform. Their attention to security details is unmatched.",
    author: "Sarah Johnson",
    role: "CTO, FinTech Sol",
    company: "FinTech Sol"
  },
  {
    quote: "Professional, knowledgeable, and reliable. They implemented a complex backend system that scaled perfectly with our growth.",
    author: "Michael Chen",
    role: "Director of Engineering",
    company: "TechFlow Inc."
  },
  {
    quote: "The best development team we've worked with. The communication was excellent, and the final product exceeded our expectations.",
    author: "Emily Davis",
    role: "Product Manager",
    company: "HealthGuard"
  }
];

export default function Testimonials() {
  return (
    <Section id="testimonials" className="bg-brand-dark">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
        <p className="text-brand-light/80 text-lg">
          Don't just take our word for it. Here's what industry leaders think about our work.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full bg-brand-light/5 border-brand-light/10 relative">
              <CardContent className="pt-10 p-8">
                <Quote className="absolute top-6 left-6 h-8 w-8 text-brand-cyan/20" />
                <p className="text-brand-light/90 italic mb-6 relative z-10">
                  "{item.quote}"
                </p>
                <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-brand-cyan/20 flex items-center justify-center text-brand-cyan font-bold mr-3">
                        {item.author[0]}
                    </div>
                    <div>
                        <h4 className="font-semibold text-white text-sm">{item.author}</h4>
                        <p className="text-xs text-brand-light/60">{item.role}</p>
                    </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
