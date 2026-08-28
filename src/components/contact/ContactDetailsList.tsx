import { Icon } from "@/components/ui/Icon";
import { contactDetails } from "@/data/contact";
import { slugify } from "@/lib/slugify";

/** Opens web links (maps, etc.) in a new tab; leaves tel:/mailto: links to switch apps in place. */
function externalLinkProps(href: string) {
  return href.startsWith("http") ? { target: "_blank" as const, rel: "noreferrer noopener" } : {};
}

/**
 * Phone, hours, email, and address on the Contact page — the left column
 * beside the form. Each entry comes from `contactDetails` in
 * `src/data/contact.ts`, and gets an `id` from its label so search results
 * can deep-link straight to it (e.g. /contact#call-us).
 */
export function ContactDetailsList() {
  return (
    <ul className="mt-6 flex flex-col gap-5">
      {contactDetails.map((detail) => {
        // One markup definition for every entry: icon, label, and lines,
        // plus the "pick a maps app" buttons when a detail carries them.
        // Only the wrapper differs below.
        const info = (
          <>
            <Icon name={detail.icon} className="mt-0.5 size-5 shrink-0 text-azure" />
            <div>
              <p className="font-heading text-h3 text-ink">{detail.label}</p>
              {detail.lines.map((line) => (
                <p key={line} className="text-body text-ink/70">
                  {line}
                </p>
              ))}
              {detail.links && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {detail.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      {...externalLinkProps(link.href)}
                      className="rounded-full bg-azure-tint px-3 py-1 text-[13px] font-medium text-azure transition-colors hover:bg-azure hover:text-white"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </>
        );

        return (
          <li
            key={detail.label}
            id={slugify(detail.label)}
            className={detail.href ? undefined : "flex items-start gap-3"}
          >
            {detail.href ? (
              // A whole entry that's one tap target (tel:, mailto:).
              <a
                href={detail.href}
                {...externalLinkProps(detail.href)}
                className="-mx-2 -my-1 flex items-start gap-3 rounded-xl px-2 py-1 transition-colors hover:bg-white/60"
              >
                {info}
              </a>
            ) : (
              info
            )}
          </li>
        );
      })}
    </ul>
  );
}
