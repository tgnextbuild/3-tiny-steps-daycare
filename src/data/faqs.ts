/* ------------------------------------------------------------------ *
 * FREQUENTLY ASKED QUESTIONS (Parent Resources page)
 *
 * To ADD a question: copy one `{ ... },` block and change the text.
 * To REMOVE one: delete its whole `{ ... },` block.
 * Questions appear in the order listed here.
 * ------------------------------------------------------------------ */
export interface FaqItem {
  question: string;
  answer: string;
}

export const faqHeading = "Frequently Asked Questions";

export const faqItems: FaqItem[] = [
  {
    question: "What is your sick policy?",
    answer:
      "To keep everyone healthy, please keep your child home if they have a fever, are vomiting, or have a contagious illness. Children may return once they've been symptom- and fever-free for 24 hours without medication. Placeholder policy — replace with your official written sick policy.",
  },
  {
    question: "What happens if my child is injured while at the daycare?",
    answer:
      "Minor injuries are cleaned and treated with our on-site first aid kit, and you'll receive a note or call about what happened. For anything more serious, we contact you immediately and call 911 if needed. Placeholder policy — replace with your official written policy.",
  },
  {
    question: "Are your staff certified in CPR and First Aid?",
    answer:
      "Yes — all of our staff are certified in CPR and First Aid, and complete ongoing health and safety training.",
  },
  {
    question: "How do you keep your children safe during drop-off and pick-up?",
    answer:
      "Children are only released to parents/guardians or people you've listed on your written authorization form, and we verify photo ID for anyone we don't recognize. Placeholder policy — replace with your official written procedure.",
  },
  {
    question: "Do I need to provide meals and snacks?",
    answer:
      "Placeholder answer — let us know your actual meal policy (e.g. meals/snacks provided by the daycare, or packed by parents) and we'll update this.",
  },
  {
    question: "How will I receive updates about my child's day?",
    answer:
      "You'll receive updates on meals, naps, diapering, and daily activities — let us know which app or method you use (e.g. a daily report app, photos, or a notebook) so we can describe it accurately here.",
  },
];
