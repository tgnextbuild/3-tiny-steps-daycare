import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { SocialBadge } from "@/components/ui/SocialBadge";
import { footerLinks, siteConfig, socialLinks } from "@/data/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-ink/10 bg-cream-dark text-ink">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <Image
            src="/images/logo.png"
            alt={siteConfig.name}
            width={96}
            height={96}
            className="h-20 w-20 object-contain"
          />
          <p className="mt-4 max-w-xs text-body text-ink/70">
            {siteConfig.description}
          </p>
        </div>

        <div>
          <h2 className="font-heading text-h3 text-green-dark">Explore</h2>
          <ul className="mt-3 space-y-2">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-body text-ink/75 transition-colors hover:text-ink"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-heading text-h3 text-green-dark">
            Let&rsquo;s Connect
          </h2>
          <p className="mt-3 text-body text-ink/70">
            Questions about enrollment or a tour? We&rsquo;d love to hear
            from you.
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-green px-5 py-2.5 font-heading text-button text-white transition-colors hover:bg-green-dark"
          >
            <Icon name="phone" className="size-4" />
            Contact Us
          </Link>

          <ul className="mt-5 flex flex-wrap gap-3">
            {socialLinks.map((social) => (
              <li key={social.label}>
                <SocialBadge social={social} className="ring-1 ring-ink/5" />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-ink/10 py-5">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-2 px-5 text-center sm:flex-row sm:justify-between sm:px-8 sm:text-left">
          <p className="text-body text-ink/55">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          <Link href="/privacy-policy" className="text-body text-ink/55 hover:text-ink">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
