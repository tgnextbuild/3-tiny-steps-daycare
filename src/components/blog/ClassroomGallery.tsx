import { Button } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { classroomGalleryCtaLabel, classroomGalleryHeading } from "@/data/blog";
import type { Photo as PhotoData } from "@/types/content";

/** This month's photo strip, with the way through to the full gallery. */
export function ClassroomGallery({ photos }: { photos: PhotoData[] }) {
  if (photos.length === 0) return null;

  return (
    <div>
      <SectionHeading
        title={classroomGalleryHeading}
        className="text-green-dark uppercase"
        ornament={{
          icon: "sparkle",
          className: "size-5 text-light-yellow",
          placement: "trailing",
          gap: "gap-2",
        }}
      />

      <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
        {photos.map((photo) => (
          <li
            key={photo.filename}
            className="relative aspect-square overflow-hidden rounded-[1.25rem] bg-cream-dark shadow-[0_12px_24px_-18px_rgba(43,36,32,0.5)]"
          >
            <Photo
              photo={photo}
              sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
            />
          </li>
        ))}
      </ul>

      <div className="mt-8 flex justify-center">
        <Button href="/blog/gallery" variant="secondary">
          {classroomGalleryCtaLabel}
        </Button>
      </div>
    </div>
  );
}
