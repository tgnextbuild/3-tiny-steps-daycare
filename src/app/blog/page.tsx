import type { Metadata } from "next";
import { ClassroomGallery } from "@/components/blog/ClassroomGallery";
import { LearningFocus } from "@/components/blog/LearningFocus";
import { LookingBack } from "@/components/blog/LookingBack";
import { MonthlyRecap } from "@/components/blog/MonthlyRecap";
import { ComingSoon } from "@/components/shared/ComingSoon";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Photo } from "@/components/ui/Photo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { blogHero, lookingBack } from "@/data/blog";
import { currentPost, previousPosts } from "@/data/blog-posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Monthly recaps from 3 Tiny Steps Home Daycare — what we did, what we learned, and photos from the classroom.",
};

export default function BlogPage() {
  if (!currentPost) {
    return (
      <ComingSoon
        title="Blog"
        body="Monthly recaps, classroom gallery highlights, and the current learning focus will be posted here soon."
      />
    );
  }

  // Photos are rendered here on the server so the interactive Looking Back
  // cards stay a client component without pulling image handling into the browser.
  const lookingBackItems = previousPosts.map((post) => ({
    id: post.id,
    month: post.month,
    title: post.title,
    subtitle: post.subtitle,
    description: post.description,
    focus: post.focus,
    accent: post.accent,
    hasMorePhotos: post.gallery.length > 0,
    thumbnail: <Photo photo={post.image} compact sizes="6rem" />,
    cover: <Photo photo={post.image} sizes="(min-width: 640px) 40rem, 100vw" />,
  }));

  return (
    <>
      <PageHero
        heading={blogHero.heading}
        body={blogHero.body}
        image={blogHero.image}
        headingClassName="text-green-dark"
        uppercase
      />

      <section className="py-10 sm:py-14">
        <Container>
          <MonthlyRecap post={currentPost} />
        </Container>
      </section>

      <section className="pb-12 sm:pb-16">
        <Container>
          <ClassroomGallery photos={currentPost.gallery} />
        </Container>
      </section>

      <section className="pb-12 sm:pb-16">
        <Container>
          <LearningFocus focus={currentPost.focus} />
        </Container>
      </section>

      {lookingBackItems.length > 0 && (
        <section className="pb-14 sm:pb-20">
          <Container>
            <SectionHeading
              title={lookingBack.heading}
              className="text-green-dark uppercase"
              subtitle={lookingBack.subheading}
              subtitleClassName="mt-2"
            />
            <LookingBack items={lookingBackItems} />
          </Container>
        </section>
      )}
    </>
  );
}
