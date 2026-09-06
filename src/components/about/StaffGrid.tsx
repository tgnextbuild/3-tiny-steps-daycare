import { Container } from "@/components/ui/Container";
import { Photo } from "@/components/ui/Photo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { staffHeading, staffMembers } from "@/data/staff";
import { accentClasses } from "@/lib/accent";
import { slugify } from "@/lib/slugify";

// Literal class names (not template-built) so Tailwind's compiler can see
// them statically — one tilt per card, alternating like snapshots pinned
// slightly askew on a board.
const tilts = ["-rotate-3", "rotate-2", "-rotate-2", "rotate-3"];

export function StaffGrid() {
  return (
    <section className="bg-green/15 py-14 sm:py-20">
      <Container>
        <SectionHeading
          title={staffHeading}
          className="text-azure"
          ornament={{ icon: "leaf", className: "size-5 text-green-dark" }}
        />

        {/* flex-wrap instead of a fixed grid so a partial last row (2
            staff, or 4, etc.) centers as a group instead of hugging the
            left edge — the grid's empty trailing cell was what looked
            lopsided with an odd count. */}
        <ul className="mx-auto mt-12 flex max-w-4xl flex-wrap justify-center gap-x-8 gap-y-14">
          {staffMembers.map((member, index) => {
            const colors = accentClasses[member.accent];
            const tilt = tilts[index % tilts.length];
            return (
              <li key={member.name} className="flex w-full justify-center sm:basis-1/3">
                <div
                  id={`staff-${slugify(member.name)}`}
                  className={`relative w-full max-w-[15rem] scroll-mt-24 rounded-2xl bg-white pt-14 pb-6 text-center shadow-[0_16px_32px_-18px_rgba(43,36,32,0.35)] transition-transform duration-200 ${tilt} hover:rotate-0`}
                >
                  <span
                    aria-hidden
                    className={`absolute -top-12 left-1/2 z-10 size-3.5 -translate-x-1/2 rounded-full shadow-sm ${colors.bgSolid}`}
                  />
                  <div
                    className={`absolute -top-10 left-1/2 z-0 size-24 -translate-x-1/2 overflow-hidden rounded-full border-4 bg-white ${colors.border} shadow-[0_10px_25px_-14px_rgba(43,36,32,0.4)]`}
                  >
                    <Photo photo={member.photo} shape="circle" sizes="6rem" />
                  </div>
                  <p className={`font-heading text-h3 ${colors.text}`}>
                    {member.name}
                  </p>
                  <p className="mt-1 text-body text-ink/70">
                    {member.credentials}
                  </p>
                  <p className="text-body text-ink/70">{member.favorite}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
