"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { SearchBox } from "@/components/layout/SearchBox";
import { navLinks, siteConfig } from "@/data/site";

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close the mobile menu on route change.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 bg-green-tint/95 backdrop-blur supports-[backdrop-filter]:bg-green-tint/80">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-2.5 sm:px-8">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2 rounded-full"
          aria-label={`${siteConfig.name} — home`}
        >
          <Image
            src="/images/logo.png"
            alt={siteConfig.name}
            width={56}
            height={56}
            priority
            className="h-12 w-12 object-contain sm:h-14 sm:w-14"
          />
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-5 lg:flex xl:gap-7"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`font-heading text-nav whitespace-nowrap transition-colors hover:text-azure ${
                isActive(link.href) ? "text-azure" : "text-ink/80"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center lg:flex">
          <SearchBox className="w-40 xl:w-52" dropdownClassName="right-0 w-96" />
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="inline-flex items-center justify-center rounded-full p-2 text-ink lg:hidden"
        >
          <Icon name={menuOpen ? "close" : "menu"} className="size-7" />
        </button>
      </div>

      {menuOpen && (
        <nav
          id="mobile-nav"
          aria-label="Primary"
          className="border-t border-ink/10 bg-green-tint px-5 pt-2 pb-5 lg:hidden"
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={`block rounded-xl px-3 py-2.5 font-heading text-nav ${
                    isActive(link.href)
                      ? "bg-white/70 text-azure"
                      : "text-ink/80"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <SearchBox className="mt-3 w-full" />
        </nav>
      )}
    </header>
  );
}
