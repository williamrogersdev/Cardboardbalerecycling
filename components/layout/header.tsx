"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Recycle, Mail, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Services", href: "/services" },
  { name: "How It Works", href: "/how-it-works" },
  { name: "Service Areas", href: "/service-areas" },
  { name: "Pricing", href: "/pricing" },
  { name: "Resources", href: "/resources" },
];

export function Header(): JSX.Element {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top Contact Bar */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container-max">
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Clock className="w-4 h-4" />
              <span>Mon-Fri: 8AM-6PM EST</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Mail className="w-4 h-4" />
              <a
                href="mailto:support@cardboardbalerecycling.com"
                className="hover:text-primary-600 transition-colors"
              >
                support@cardboardbalerecycling.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container-max">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center justify-center w-10 h-10 bg-primary-500 rounded-lg">
              <Recycle className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-xl font-bold text-gray-900">
                Cardboard Bale Recycling
              </div>
              <div className="text-xs text-gray-500 hidden sm:block">
                Turn Your Waste Into Revenue
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="/quote" className="btn-primary">
              Get Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-primary-600 font-medium py-2 transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              <div className="pt-4 border-t border-gray-200">
                <Link
                  href="/quote"
                  className="btn-primary w-full justify-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
