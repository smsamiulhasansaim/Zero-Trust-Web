"use client";

import { Section } from "@/components/Section";
import { motion } from "framer-motion";
import { ShieldCheck, Zap, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";

const features = [
  {
    icon: ShieldCheck,
    title: "Security First",
    description: "Every line of code is written with security in mind, implementing Zero Trust principles from the ground up."
  },
  {
    icon: Zap,
    title: "High Performance",
    description: "Lightning fast load times and optimized performance to ensure the best user experience and SEO rankings."
  },
  {
    icon: Users,
    title: "Client-Centric",
    description: "We work closely with you to understand your vision and deliver solutions that exceed expectations."
  }
];

export default function About() {
  return (
    <Section id="about" className="bg-brand-dark/50">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Building the Future of <br />
            <span className="text-brand-cyan">Secure Web Development</span>
          </h2>
          <p className="text-brand-light/80 text-lg mb-6 leading-relaxed">
            At Zero Trust Web, we believe that security shouldn't be an afterthought. 
            It's the foundation of everything we build. In an era of increasing digital threats, 
            we provide peace of mind through robust, secure, and scalable web solutions.
          </p>
          <p className="text-brand-light/80 text-lg mb-8 leading-relaxed">
            Our mission is to empower businesses with digital tools that are not only beautiful 
            and functional but also unshakeable in their security posture.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-brand-dark border-brand-light/10 hover:border-brand-cyan/50 transition-colors">
                <CardContent className="flex items-start space-x-4 p-6">
                  <div className="bg-brand-cyan/10 p-3 rounded-lg">
                    <feature.icon className="h-6 w-6 text-brand-cyan" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-brand-light/70">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
