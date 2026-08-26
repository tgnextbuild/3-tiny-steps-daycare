import type { Photo } from "@/types/content";

/* ------------------------------------------------------------------ *
 * MEET OUR PROVIDER (About Us page)
 *
 * To edit: change the text below. `bio` is a list — each entry becomes its
 * own paragraph, so add or remove entries to add or remove paragraphs.
 * To swap the photo, save it as `public/images/provider-ms-libia.jpg`.
 * ------------------------------------------------------------------ */
export interface Provider {
  heading: string;
  name: string;
  role: string;
  photo: Photo;
  bio: string[];
}

export const provider: Provider = {
  heading: "Meet Our Provider",
  name: "Ms. Libia",
  role: "Owner & Child Care Provider",
  photo: { filename: "provider-ms-libia.jpg", label: "Photo of Ms. Libia" },
  bio: [
    "Ms. Libia, Owner and Child Care Provider, has always had a passion for working with children. She believes every child deserves a safe, loving, inclusive, and nurturing environment where they feel welcomed, respected, and encouraged to learn, play, and grow at their own pace. With four years of experience in early childhood education and certifications in CPR and First Aid, Medication Administration, Care4Kids, and Federal Health and Safety Orientation, she is committed to providing high-quality care while helping each child discover their unique strengths, build confidence, and develop a lifelong love of learning through play. Nothing brings her more joy than watching children laugh, explore, and reach new milestones each day.",
    "Ms. Libia is passionate about creating meaningful experiences that inspire curiosity, creativity, and a love for learning. Through bilingual education, she naturally introduces children to both English and Spanish, while our spacious outdoor play area encourages exploration, active play, and discovery. She is dedicated to fostering a warm, welcoming, and inclusive community where every child feels loved, every family feels valued, and everyone is celebrated for who they are.",
  ],
};
