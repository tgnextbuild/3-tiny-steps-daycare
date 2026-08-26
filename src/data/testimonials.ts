/* ------------------------------------------------------------------ *
 * WHAT PARENTS ARE SAYING (Parent Resources page)
 *
 * `preview` is the text shown before the reader clicks "read more";
 * `more` is the rest of the review, revealed on click.
 * `rating` is the number of stars, 1 to 5.
 *
 * To ADD a review: copy one `{ ... },` block and change the text.
 * To REMOVE one: delete its whole `{ ... },` block.
 * ------------------------------------------------------------------ */
export interface Testimonial {
  name: string;
  rating: number;
  preview: string;
  more: string;
}

export const testimonialsHeading = "What Parents Are Saying";

export const testimonials: Testimonial[] = [
  {
    name: "Danielle P.",
    rating: 5,
    preview:
      "I started my son at Three Tiny Steps at 5 months old when I had to go back to work. He instantly bonded with Libia. The first day of drop off was so difficult. I cried on my way home lol but by the second day, my son already seemed relaxed at drop",
    more: "off. Libia sends photo updates throughout the day so I never feel like I'm missing a thing, and I love that he's picking up Spanish words already. Choosing 3 Tiny Steps was the best decision we made for our family. (Placeholder text — replace with the real testimonial.)",
  },
  {
    name: "Karly R.",
    rating: 5,
    preview:
      "Miss Libia is an incredible teacher who is kind, sweet and loving. We stumbled upon her using the Winnie app search for daycares in Norwalk and we are so lucky we did. Without her I would have never been able to return to work without feeling",
    more: "confident about who was caring for my daughter. She treats every child like her own, and the little touches — the crafts, the songs, the outdoor time — make it feel like a second home. (Placeholder text — replace with the real testimonial.)",
  },
  {
    name: "Patricia L.",
    rating: 5,
    preview:
      "Tengo una linda experiencia en este Daycare mis hijos aprendieron mucho 📚🎨👩‍🏫 Libia es una proveedora y profesora muy cariñosa… 🥰 Muy Recomendada 🌟🧸🌸",
    more: "Mis hijos siempre llegan felices a casa y hablan de las actividades del día. Se nota el cariño y la dedicación de Libia con cada niño. (Texto de muestra — reemplazar con el testimonio real.)",
  },
];
