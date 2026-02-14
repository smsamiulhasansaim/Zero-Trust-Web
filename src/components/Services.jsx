"use client";

import { Section } from "@/components/Section";
import { motion } from "framer-motion";
import { Code, Database, Server, Lock, Smartphone, Cloud } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Modern, responsive websites built with Next.js, React, and Tailwind CSS."
  },
  {
    icon: Database,
    title: "Backend & API",
    description: "Robust backend solutions using Node.js, Python, and scalable databases."
  },
  {
    icon: Lock,
    title: "Security Implementation",
    description: "Zero Trust architecture, security audits, and vulnerability assessments."
  },
  {
    icon: Server,
    title: "Hosting & Maintenance",
    description: "Reliable hosting setup, CI/CD pipelines, and ongoing maintenance."
  },
  {
    icon: Smartphone,
    title: "Mobile Solutions",
    description: "PWA development and responsive design for all devices."
  },
  {
    icon: Cloud,
    title: "Cloud Intergration",
    description: "Seamless integration with AWS, Azure, or Google Cloud services."
  }
];

export default function Services() {
  return (
    <Section id="services">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Services</h2>
        <p className="text-brand-light/80 text-lg">
          Comprehensive web solutions tailored to your business needs, with security at the core.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full bg-brand-dark/40 border-brand-light/10 hover:border-brand-cyan/50 hover:-translate-y-1 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-brand-cyan/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-brand-cyan" />
                </div>
                <CardTitle className="text-xl text-white">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-brand-light/70">{service.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
