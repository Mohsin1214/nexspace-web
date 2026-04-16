import Link from "next/link";
import { SITE_CONFIG } from "@/lib/utils";

const FOOTER_LINKS = {
  "Quick Links": [
    { label: "Home",        href: "/"            },
    { label: "IT Services", href: "/it-services" },
    { label: "Furniture",   href: "/furniture"   },
    { label: "Projects",    href: "/projects"    },
    { label: "About",       href: "/about"       },
  ],
  "Services": [
    { label: "IT Support",           href: "/it-services#support"  },
    { label: "Software Development", href: "/it-services#software" },
    { label: "Network Infrastructure",href: "/it-services#network" },
    { label: "Hardware Supply",      href: "/it-services#hardware" },
    { label: "Office Furniture",     href: "/furniture#office"     },
  ],
  "Company": [
    { label: "About Us",      href: "/about"         },
    { label: "Contact",       href: "/contact"        },
    { label: "Privacy Policy",href: "/privacy"        },
    { label: "Terms of Use",  href: "/terms"          },
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1c1c] text-[#f9f9f9]">
      <div className="container-ns py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand col */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center font-extrabold text-white text-sm"
                style={{ background: "linear-gradient(135deg, #845400 0%, #ffb347 100%)" }}
              >
                N
              </div>
              <span className="text-lg font-extrabold tracking-tight" style={{ fontFamily: "Manrope, sans-serif" }}>
                NexSpace
              </span>
            </Link>
            <p className="text-[#f9f9f9]/50 text-sm leading-relaxed max-w-xs mb-6">
              {SITE_CONFIG.description}
            </p>
            {/* Offices */}
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-[#ffb347] label-md mb-1">Germany 🇩🇪</p>
                <p className="text-[#f9f9f9]/60">{SITE_CONFIG.offices.germany.address}</p>
              </div>
              <div>
                <p className="text-[#ffb347] label-md mb-1">Pakistan 🇵🇰</p>
                <p className="text-[#f9f9f9]/60">{SITE_CONFIG.offices.pakistan.address}</p>
              </div>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-[#f9f9f9]/80 label-md mb-5">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[#f9f9f9]/50 text-sm hover:text-[#ffb347] transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[#f9f9f9]/40 text-sm">
          <p>© {year} NexSpace. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {/* Social icons */}
            {[
              { label: "LinkedIn",  href: SITE_CONFIG.social.linkedin  },
              { label: "GitHub",    href: SITE_CONFIG.social.github    },
              { label: "Twitter",   href: SITE_CONFIG.social.twitter   },
              { label: "Instagram", href: SITE_CONFIG.social.instagram },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#f9f9f9]/40 hover:text-[#ffb347] text-xs transition-colors duration-300"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
