import { ShieldCheck, Twitter, Linkedin, Github, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark/95 text-brand-light border-t border-brand-light/10">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 lg:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <ShieldCheck className="h-8 w-8 text-brand-cyan" />
              <span className="text-xl font-bold text-white tracking-tight">Zero Trust Web</span>
            </Link>
            <p className="text-sm text-brand-light/80 max-w-xs">
              Building secure, scalable, and high-performance web solutions for the modern digital landscape.
            </p>
            <div className="flex space-x-4 pt-2">
              <Link href="#" className="hover:text-brand-cyan transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="hover:text-brand-cyan transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="hover:text-brand-cyan transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#services" className="hover:text-brand-cyan transition-colors">Web Development</Link></li>
              <li><Link href="#services" className="hover:text-brand-cyan transition-colors">Backend & API</Link></li>
              <li><Link href="#services" className="hover:text-brand-cyan transition-colors">Security Audits</Link></li>
              <li><Link href="#services" className="hover:text-brand-cyan transition-colors">Maintenance</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#about" className="hover:text-brand-cyan transition-colors">About Us</Link></li>
              <li><Link href="#portfolio" className="hover:text-brand-cyan transition-colors">Portfolio</Link></li>
              <li><Link href="#testimonials" className="hover:text-brand-cyan transition-colors">Testimonials</Link></li>
              <li><Link href="#contact" className="hover:text-brand-cyan transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-brand-cyan mt-0.5" />
                <span>123 Secure Lane, Cyber City, Web State 40400</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-brand-cyan" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-brand-cyan" />
                <span>hello@zerotrustweb.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-brand-light/10 pt-8 flex flex-col items-center justify-between md:flex-row">
          <p className="text-xs text-brand-light/60">
            &copy; {currentYear} Zero Trust Web. All rights reserved.
          </p>
          <div className="mt-4 flex space-x-6 md:mt-0 text-xs text-brand-light/60">
            <Link href="#" className="hover:text-brand-cyan transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-brand-cyan transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
