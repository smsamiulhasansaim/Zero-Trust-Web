"use client";

import { Section } from "@/components/Section";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Send } from "lucide-react";

export default function Contact() {
  return (
    <Section id="contact" className="bg-brand-dark/50">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
        <p className="text-brand-light/80 text-lg">
          Ready to start your next project? Contact us today for a free consultation and quote.
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="border-brand-light/10 bg-brand-dark p-2">
            <CardContent className="p-6 md:p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-brand-light">Name</label>
                    <input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      className="w-full h-11 px-4 rounded-md bg-brand-light/5 border border-brand-light/10 text-white placeholder:text-brand-light/30 focus:outline-none focus:ring-2 focus:ring-brand-cyan/50 focus:border-brand-cyan/50 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-brand-light">Email</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      className="w-full h-11 px-4 rounded-md bg-brand-light/5 border border-brand-light/10 text-white placeholder:text-brand-light/30 focus:outline-none focus:ring-2 focus:ring-brand-cyan/50 focus:border-brand-cyan/50 transition-all"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-brand-light">Subject</label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="Project Inquiry"
                    className="w-full h-11 px-4 rounded-md bg-brand-light/5 border border-brand-light/10 text-white placeholder:text-brand-light/30 focus:outline-none focus:ring-2 focus:ring-brand-cyan/50 focus:border-brand-cyan/50 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-brand-light">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Tell us about your project..."
                    className="w-full px-4 py-3 rounded-md bg-brand-light/5 border border-brand-light/10 text-white placeholder:text-brand-light/30 focus:outline-none focus:ring-2 focus:ring-brand-cyan/50 focus:border-brand-cyan/50 transition-all resize-none"
                  />
                </div>

                <Button className="w-full text-base" size="lg">
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
}
