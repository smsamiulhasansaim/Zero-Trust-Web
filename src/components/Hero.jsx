"use client";

import { Button } from "@/components/ui/Button";
import { Section } from "@/components/Section";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Lock, Globe } from "lucide-react";

export default function Hero() {
  return (
    <Section className="pt-32 pb-16 md:pt-48 md:pb-32 flex flex-col items-center justify-center min-h-screen relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-dark via-brand-dark to-black opacity-100" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-4xl px-4"
      >
        <div className="inline-flex items-center space-x-2 bg-brand-light/5 border border-brand-light/10 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm">
          <span className="flex h-2 w-2 rounded-full bg-brand-cyan animate-pulse" />
          <span className="text-sm font-medium text-brand-light">Zero Trust Architecture</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-blue-500">
            Secure Code.
          </span>{" "}
          <br className="hidden md:block" />
          Trusted Web.
        </h1>

        <p className="text-lg md:text-xl text-brand-light/80 mb-10 max-w-2xl mx-auto leading-relaxed">
          We build high-performance, secure, and scalable web solutions. 
          Protect your digital assets with our security-first development approach.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="w-full sm:w-auto text-base group" onClick={() => window.location.href='#contact'}>
            Get a Free Quote
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto text-base border-brand-light/20 text-brand-light hover:bg-brand-light/10" onClick={() => window.location.href='#portfolio'}>
            View Our Work
          </Button>
        </div>
      </motion.div>

      {/* Floating Icons */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-[10%] opacity-20 hidden lg:block"
      >
        <Code2 className="h-24 w-24 text-brand-cyan" />
      </motion.div>
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 left-[10%] opacity-20 hidden lg:block"
      >
        <Lock className="h-20 w-20 text-blue-500" />
      </motion.div>
    </Section>
  );
}
