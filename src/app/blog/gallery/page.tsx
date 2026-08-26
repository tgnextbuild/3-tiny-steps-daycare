import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Photo } from "@/components/ui/Photo";
import { GalleryLightbox } from "@/components/gallery/GalleryLightbox";
import { galleryHero, sortedGalleryPhotos } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos from every monthly recap, plus general photos of the classrooms, play areas, and everyday activities at 3 Tiny Steps Home Daycare.",
};

export default function GalleryPage() {
  // Photos are rendered here on the server so the interactive lightbox stays
  // a client component without pulling the filesystem existence-check in
  // <Photo> into the browser bundle.
  const items = sortedGalleryPhotos.map((photo) => ({
    key: photo.filename,
    label: photo.label,
    thumbnail: <Photo photo={photo} sizes="(min-width: 640px) 33vw, 50vw" />,
    full: (
      <Photo photo={photo} fit="contain" sizes="(min-width: 1024px) 70vw, 90vw" priority />
    ),
  }));

  return (
    <>
      <PageHero
        heading={galleryHero.heading}
        body={galleryHero.body}
        image={galleryHero.image}
        headingClassName="text-green-dark"
        uppercase
      />

      <section className="py-10 sm:py-14">
        <Container>
          <GalleryLightbox items={items} />

          <div className="mt-10 flex justify-center">
            <Button href="/blog" variant="outline">
              Back to the Blog
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
