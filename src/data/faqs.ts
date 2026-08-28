/* ------------------------------------------------------------------ *
 * FREQUENTLY ASKED QUESTIONS (Parent Resources page)
 *
 * `answer` is a list of paragraphs — each string in the array becomes
 * its own paragraph when the question is expanded. Split long answers
 * into a few short paragraphs instead of one big block.
 *
 * Within a paragraph, you can bold or underline part of the text:
 *   - **wrap text in double asterisks** to make it bold.
 *   - __wrap text in double underscores__ to underline it.
 *
 * To ADD a question: copy one `{ ... },` block and change the text.
 * To REMOVE one: delete its whole `{ ... },` block.
 * Questions appear in the order listed here.
 * ------------------------------------------------------------------ */
export interface FaqItem {
  question: string;
  answer: string[];
}

export const faqHeading = "Frequently Asked Questions";

export const faqItems: FaqItem[] = [
  {
    question: "What is your sick policy?",
    answer: [
      "Children should stay home if they have a fever of 101°F or higher, vomiting, diarrhea, excessive cold symptoms, unexplained pain/discomfort, or are too ill to participate normally in daily activities.",
      "Children may return once they meet the appropriate return-to-care requirements, such as being fever-free for 24 hours without medication or being symptom-free for 24 hours for vomiting/diarrhea. Certain illnesses require treatment before returning.",
      "**Please refer to the Parent Handbook for complete sick policy and return-to-care guidelines.**",
    ],
  },
  {
    question: "What happens if my child is injured while at the daycare?",
    answer: [
      "Staff will assess the injury and provide First Aid/CPR if needed. For serious emergencies, 911 will be called and parents notified immediately. Minor injuries will be communicated to parents, while more serious injuries will require an accident report. If parents cannot be reached, an emergency contact will be notified.",
      "**Please refer to the Parent Handbook for the full injury and emergency procedures.**",
    ],
  },
  {
    question: "Are your staff certified in CPR and First Aid?",
    answer: [
      "Yes! All 3 Tiny Steps staff members are certified in CPR and First Aid. We also ensure that all required licenses and certifications remain current and comply with state guidelines to provide the safest, highest-quality care for every child.",
    ],
  },
  {
    question: "How do you keep your children safe during drop-off and pick-up?",
    answer: [
      "For your child's safety, 3 Tiny Steps will only release children to authorized individuals listed on the Emergency Form. If someone not listed will be picking up your child, the parent must provide written authorization or, in an emergency, call the daycare with the person's name and driver's license number. All pick-up individuals must present a valid photo ID and sign the sign-in/out sheet.",
      "**Please refer to the Parent Handbook for additional information.**",
    ],
  },
  {
    question: "Do I need to provide meals and snacks?",
    answer: [
      "Good nutrition is vital to a child's health and growth. 3 Tiny Steps Home Daycare supports this by __providing nutritious snacks, fruits, and vegetables__. It is REQUIRED parents provide lunch for their child. For those children who are formula/breast milk, parents are asked to provide formula or breast milk. Families supply baby food as well. If your child has any allergies, please let our staff know and include them on the enrollment forms.",
    ],
  },
  {
    question: "How will I receive updates about my child's day?",
    answer: [
      "We're happy to keep you connected throughout your child's day! Parents can reach us by **phone call or message** for regular updates, or if their child is feeling unwell or has an injury. You're also always welcome to check in or stop by during the day to see your little one.",
    ],
  },
];
