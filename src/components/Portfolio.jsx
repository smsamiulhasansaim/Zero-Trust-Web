"use client";

import { Section } from "@/components/Section";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

const projects = [
  {
    title: "FinTech Secure Dashboard",
    category: "Web App & Security",
    description: "A high-security financial dashboard with real-time data visualization and biometric authentication.",
    image: "/placeholder-1.jpg", // Placeholder
    tags: ["Next.js", "TypeScript", "Tailwind", "OAuth 2.0"],
    link: "#",
    github: "#"
  },
  {
    title: "E-Commerce Zero Trust",
    category: "E-Commerce",
    description: "Scalable e-commerce platform implementing Zero Trust principals for customer data protection.",
    image: "/placeholder-2.jpg", // Placeholder
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "#",
    github: "#"
  },
  {
    title: "Healthcare Patient Portal",
    category: "Healthcare",
    description: "HIPAA-compliant patient portal with encrypted messaging and secure record access.",
    image: "/placeholder-3.jpg", // Placeholder
    tags: ["Vue.js", "Python", "PostgreSQL", "Encryption"],
    link: "#",
    github: "#"
  }
];

export default function Portfolio() {
  return (
    <Section id="portfolio" className="bg-brand-dark/30">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Work</h2>
        <p className="text-brand-light/80 text-lg">
          Explore how we've helped businesses achieve their digital goals with security and style.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="overflow-hidden border-brand-light/10 bg-brand-dark group hover:border-brand-cyan/50 transition-colors">
              <div className="relative h-48 bg-brand-dark/50 overflow-hidden">
                {/* Fallback for image since we don't have real assets yet */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-brand-dark to-brand-cyan/20 text-brand-light/20 text-4xl font-bold">
                  {project.title[0]}
                </div>
                {/* <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" /> */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <Button size="icon" variant="ghost" className="text-white hover:text-brand-cyan hover:bg-white/10 rounded-full">
                        <ExternalLink className="h-6 w-6" />
                    </Button>
                    <Button size="icon" variant="ghost" className="text-white hover:text-brand-cyan hover:bg-white/10 rounded-full">
                        <Github className="h-6 w-6" />
                    </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="text-xs font-semibold text-brand-cyan uppercase tracking-wider mb-2">
                    {project.category}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-cyan transition-colors">
                    {project.title}
                </h3>
                <p className="text-brand-light/70 text-sm mb-4 line-clamp-3">
                    {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                        <span key={tag} className="text-xs px-2 py-1 rounded-full bg-brand-light/5 text-brand-light/60 border border-brand-light/10">
                            {tag}
                        </span>
                    ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
       <div className="mt-12 text-center">
            <Button variant="outline" size="lg" className="border-brand-cyan text-brand-cyan hover:bg-brand-cyan/10">
                View All Projects
            </Button>
       </div>
    </Section>
  );
}
