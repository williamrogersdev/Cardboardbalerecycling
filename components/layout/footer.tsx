import Link from "next/link";
import { Recycle, Mail, MapPin, Clock } from "lucide-react";

const footerNavigation = {
  services: [
    { name: "Cardboard Bale Collection", href: "/services" },
    { name: "Bale Processing", href: "/services" },
    { name: "Revenue Sharing", href: "/services" },
    { name: "Equipment Rental", href: "/services" },
    { name: "Compliance Support", href: "/services" },
  ],
  company: [
    { name: "How It Works", href: "/how-it-works" },
    { name: "Service Areas", href: "/service-areas" },
    { name: "Pricing", href: "/pricing" },
    { name: "Resources", href: "/resources" },
    { name: "Get Quote", href: "/quote" },
  ],
  legal: [
    { name: "Service Areas", href: "/service-areas" },
    { name: "Contact Us", href: "/quote" },
    { name: "About", href: "/#about" },
  ],
};

export function Footer(): JSX.Element {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max">
        <div className="section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <div className="flex items-center justify-center w-10 h-10 bg-primary-500 rounded-lg">
                  <Recycle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-xl font-bold">
                    Cardboard Bale Recycling
                  </div>
                  <div className="text-sm text-gray-300">
                    Turn Your Waste Into Revenue
                  </div>
                </div>
              </Link>

              <p className="text-gray-300 mb-6 max-w-md">
                Professional cardboard bale recycling services helping
                businesses nationwide turn their waste into revenue while
                supporting environmental sustainability.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-gray-300">
                  <Mail className="w-4 h-4 text-primary-400" />
                  <a
                    href="mailto:support@cardboardbalerecycling.com"
                    className="hover:text-white transition-colors"
                  >
                    support@cardboardbalerecycling.com
                  </a>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <MapPin className="w-4 h-4 text-primary-400" />
                  <span>Serving 25+ States Nationwide</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Clock className="w-4 h-4 text-primary-400" />
                  <span>Mon-Fri: 8AM-6PM EST</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                {footerNavigation.services.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                {footerNavigation.company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <h4 className="text-sm font-semibold mt-6 mb-2 text-gray-200">
                Get Started
              </h4>
              <Link href="/quote" className="btn-primary text-sm">
                Request Quote
              </Link>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Cardboard Bale Recycling. All
                rights reserved.
              </div>

              <div className="flex gap-6">
                {footerNavigation.legal.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
