"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Recycle } from "lucide-react";

const navigation = [
  { name: "Services", href: "/services" },
  { name: "How It Works", href: "/how-it-works" },
  { name: "Service Areas", href: "/service-areas" },
  { name: "Pricing", href: "/pricing" },
  { name: "Resources", href: "/resources" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
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
                Cardboard recycling requests
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
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
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
