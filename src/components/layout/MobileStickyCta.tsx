"use client";

import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

/**
 * A persistent "Contact Us" bar pinned to the bottom of the screen on
 * mobile only (the desktop nav already keeps a search box and the full
 * menu visible at all times, so this would be redundant there).
 *
 * Added because the audit found several pages' hero CTA sitting below the
 * fold on phones — rather than fix that page-by-page, this guarantees a
 * way to get in touch is always reachable regardless of scroll position or
 * a given page's layout. Hidden on /contact itself, since showing "Contact
 * Us" while already on that exact page is pointless.
 */
export function MobileStickyCta() {
  const pathname = usePathname();
  if (pathname === "/contact") return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-ink/10 bg-cream/95 px-4 pt-2.5 backdrop-blur supports-[backdrop-filter]:bg-cream/85 lg:hidden"
      style={{ paddingBottom: "calc(0.625rem + env(safe-area-inset-bottom))" }}
    >
      <Button href="/contact" variant="secondary" className="w-full">
        <Icon name="phone" className="size-4" />
        Contact Us
      </Button>
    </div>
  );
}
