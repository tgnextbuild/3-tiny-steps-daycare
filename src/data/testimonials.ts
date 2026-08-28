/* ------------------------------------------------------------------ *
 * WHAT PARENTS ARE SAYING (Parent Resources page)
 *
 * `preview` is the text shown before the reader clicks "read more";
 * `more` is the rest of the review, revealed on click. If the whole
 * review already fits in `preview`, just leave `more` out (or delete the
 * line) — the "read more" toggle only appears when `more` is set.
 * `rating` is the number of stars, 1 to 5.
 *
 * To ADD a review: copy one `{ ... },` block and change the text.
 * To REMOVE one: delete its whole `{ ... },` block.
 * ------------------------------------------------------------------ */
export interface Testimonial {
  name: string;
  rating: number;
  preview: string;
  more?: string;
}

export const testimonialsHeading = "What Parents Are Saying";

export const testimonials: Testimonial[] = [
  {
    name: "Danielle P.",
    rating: 5,
    preview:
      "I started my son at Three Tiny Steps at 5 months old when I had to go back to work. He instantly bonded with Libia. The first day of drop off was so difficult. I cried on my way home lol but by the second day, my son already seemed relaxed at drop",
    more: "off was so difficult. I cried on my way home lol but by the second day, my son already seemed relaxed at drop off. It honestly felt like I was taking him to visit a family member. As a first time mom, this level of comfort and security was priceless. Libia does amazing work with the kids and included my son even in the bigger kids activities ( as best as one can) which he loved. I felt truly heartbroken having to take my son out of this daycare when we moved. It got to the point he cried when I picked him up because he wanted Libia lol I could not recommend this place more. It is clean, organized, and thoughtful for the kiddos. Highly recommend. We miss you guys!",
  },
  {
    name: "Karly R.",
    rating: 5,
    preview:
      "Miss Libia is an incredible teacher who is kind, sweet and loving. We stumbled upon her using the Winnie app search for daycares in Norwalk and we are so lucky we did. Without her I would have never been able to return to work without feeling",
    more: "worried. She takes wonderful care of my son and she loves him, she feels like family and her daycare is clean, educational, and fun! My son is learning so many different skills at daycare with Miss Libia! We love her!",
  },
  {
    name: "Patricia L.",
    rating: 5,
    preview:
      "Tengo una linda experiencia en este Daycare mis hijos aprendieron mucho 📚🎨👩‍🏫 Libia es una proveedora y profesora muy cariñosa… 🥰 Muy Recomendada 🌟🧸🌸",
  },
];
