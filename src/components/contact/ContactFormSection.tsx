"use client";

import { useEffect, useRef, useState, type FormEvent, type HTMLAttributes } from "react";
import { ContactDetailsList } from "@/components/contact/ContactDetailsList";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { contactDetails } from "@/data/contact";

/**
 * Today's date as "YYYY-MM-DD", in the visitor's local timezone — matches
 * the format a `type="date"` input's value comes in as, so it can be
 * compared or used as that input's `min` directly. Built from local
 * date parts rather than `toISOString()` (which is UTC and can read as
 * tomorrow or yesterday depending on the time of day).
 */
function getTodayDateString() {
  const now = new Date();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${now.getFullYear()}-${month}-${day}`;
}

/** Formats up to 10 digits as "(203) 123-4567", building up as the digits arrive. */
function formatPhoneNumber(digits: string) {
  if (digits.length === 0) return "";
  if (digits.length < 4) return `(${digits}`;
  if (digits.length < 7) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
}

/**
 * Strips anything that isn't a digit (so pasting "203-123-4567" or letters
 * can't sneak in) and reformats live as the user types, e.g. "2031234567"
 * becomes "(203) 123-4567" as each digit lands.
 *
 * Rewriting `.value` on every keystroke would otherwise bounce the cursor
 * to the end of the field, which makes editing a digit in the middle of an
 * already-typed number (e.g. fixing a typo) feel broken. To avoid that, we
 * count how many digits sit before the caret *before* reformatting, then
 * walk the newly formatted string and put the caret back right after that
 * same digit.
 */
function handlePhoneInput(e: FormEvent<HTMLInputElement>) {
  const input = e.currentTarget;
  const caretPos = input.selectionStart ?? input.value.length;
  const digitsBeforeCaret = input.value.slice(0, caretPos).replace(/\D/g, "").length;

  const digits = input.value.replace(/\D/g, "").slice(0, 10);
  const formatted = formatPhoneNumber(digits);
  input.value = formatted;

  let newCaretPos = formatted.length;
  if (digitsBeforeCaret > 0) {
    let digitsSeen = 0;
    for (let i = 0; i < formatted.length; i++) {
      if (/\d/.test(formatted[i])) {
        digitsSeen++;
        if (digitsSeen === digitsBeforeCaret) {
          newCaretPos = i + 1;
          break;
        }
      }
    }
  } else {
    newCaretPos = 0;
  }
  input.setSelectionRange(newCaretPos, newCaretPos);
}

const REQUIRED_FIELDS = [
  "firstName",
  "lastName",
  "phone",
  "email",
  "message",
] as const;

type FieldName =
  | (typeof REQUIRED_FIELDS)[number]
  | "childFirstName"
  | "childLastName"
  | "childDob"
  | "startDate";

// Top-to-bottom order fields actually appear in the form — used to find
// the *first* invalid field after a failed validation, regardless of
// which fields it happens to be (required-empty, bad email, short phone,
// past start date, ...).
const FIELD_ORDER: FieldName[] = [
  "firstName",
  "lastName",
  "phone",
  "email",
  "childFirstName",
  "childLastName",
  "childDob",
  "startDate",
  "message",
];

const FIELD_LABELS: Record<FieldName, string> = {
  firstName: "First name",
  lastName: "Last name",
  phone: "Phone number",
  email: "Email",
  message: "Message",
  childFirstName: "Child's first name",
  childLastName: "Child's last name",
  childDob: "Child's date of birth",
  startDate: "Desired start date",
};

/**
 * Web3Forms turns each JSON key it receives straight into a label in the
 * notification email, with no reformatting — a camelCase key like
 * "childFirstName" shows up as the literal text "ChildFirstName". These
 * spaced-out labels are what get sent as the keys instead, in the order
 * they should appear in the email.
 */
const EMAIL_FIELD_LABELS: Record<FieldName, string> = {
  firstName: "First Name",
  lastName: "Last Name",
  phone: "Phone",
  email: "Email",
  childFirstName: "Child First Name",
  childLastName: "Child Last Name",
  childDob: "Child Date of Birth",
  startDate: "Desired Start Date",
  message: "Message",
};

/**
 * The one place every validation rule lives, so the "check on blur" and
 * "check on submit" paths can never drift out of sync with each other.
 */
function validateField(field: FieldName, rawValue: string): string | undefined {
  const value = rawValue.trim();

  if ((REQUIRED_FIELDS as readonly string[]).includes(field) && !value) {
    return `${FIELD_LABELS[field]} is required.`;
  }
  if (field === "phone") {
    const digits = rawValue.replace(/\D/g, "");
    if (digits.length > 0 && digits.length < 10) {
      return "Enter a complete 10-digit phone number.";
    }
  }
  if (field === "email" && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    return "Enter a valid email address.";
  }
  if (field === "startDate" && value && value < getTodayDateString()) {
    return "Start date can't be in the past.";
  }
  return undefined;
}

function Field({
  name,
  label,
  type = "text",
  required,
  error,
  textarea,
  placeholder,
  inputMode,
  onInput,
  onBlur,
  onFocus,
  min,
}: {
  name: FieldName;
  label: string;
  type?: string;
  required?: boolean;
  error?: string;
  textarea?: boolean;
  placeholder?: string;
  inputMode?: HTMLAttributes<HTMLInputElement>["inputMode"];
  onInput?: (e: FormEvent<HTMLInputElement>) => void;
  onBlur?: (value: string) => void;
  onFocus?: () => void;
  min?: string;
}) {
  const baseClasses =
    `min-w-0 max-w-full rounded-xl border bg-white px-4 py-2.5 text-body text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-azure ${error ? "border-pastel-red" : "border-ink/15"}`;

  return (
    <div className="min-w-0">
      <label htmlFor={name} className="mb-1 block pl-1 text-[13px] font-medium text-ink/60">
        {label}
        {required ? " *" : ""}
      </label>
      {textarea ? (
        <textarea
          id={name}
          name={name}
          rows={4}
          onFocus={onFocus}
          onBlur={onBlur ? (e) => onBlur(e.currentTarget.value) : undefined}
          aria-required={required}
          aria-invalid={!!error}
          aria-describedby={error ? `${name}-error` : undefined}
          className={`${baseClasses} w-full`}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          inputMode={inputMode}
          onInput={onInput}
          onFocus={onFocus}
          onBlur={onBlur ? (e) => onBlur(e.currentTarget.value) : undefined}
          min={min}
          aria-required={required}
          aria-invalid={!!error}
          aria-describedby={error ? `${name}-error` : undefined}
          className={`${baseClasses} ${type === "date" ? "w-px min-w-full text-sm" : "w-full"}`}
        />
      )}
      {error && (
        <p id={`${name}-error`} className="mt-1 text-[13px] text-pastel-red">
          {error}
        </p>
      )}
    </div>
  );
}

// Reused in the success message's "call us directly" fallback line.
const businessPhone = contactDetails.find((detail) => detail.icon === "phone")?.lines[0] ?? "";

// Shown to every visitor on any failure, regardless of cause — the actual
// reason (missing access key, Web3Forms error, network failure) only goes
// to the browser console, so a technical detail never surfaces on-screen.
const GENERIC_SUBMIT_ERROR = `Your message didn't go through. Please try again, or call us directly at ${businessPhone}.`;

export function ContactFormSection() {
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submittedContact, setSubmittedContact] = useState<{ email: string; phone: string } | null>(
    null,
  );
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [formKey, setFormKey] = useState(0);
  const successRef = useRef<HTMLDivElement>(null);
  const errorRef = useRef<HTMLDivElement>(null);
  // Left unset until mount so the site's static build date never gets baked
  // into the page as the date picker's floor — it's filled in with the
  // visitor's actual "today" once the client runs.
  const [minStartDate, setMinStartDate] = useState<string | undefined>(undefined);

  // On mobile especially, the success card is much shorter than the form
  // it replaces — if the page stayed scrolled to wherever the form's
  // Submit button was, the success message ends up off-screen above the
  // viewport. Scroll it into view whenever it appears.
  useEffect(() => {
    if (submitted) {
      successRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [submitted]);

  // The failure card inserts new height above the Submit button without
  // the page's scroll position changing — on mobile that can just as
  // easily push the button (and the card explaining what to do) off the
  // bottom of the screen. Bring it into view the same way as the success
  // card above.
  useEffect(() => {
    if (submitError) {
      errorRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [submitError]);

  useEffect(() => {
    setMinStartDate(getTodayDateString());
  }, []);

  // Validates a single field the moment the user leaves it, instead of
  // making them wait until Submit to find out a required field is empty
  // or their email/phone doesn't look right.
  const handleFieldBlur = (field: FieldName) => (value: string) => {
    const message = validateField(field, value);
    setErrors((prev) => {
      if (!message && !prev[field]) return prev;
      const next = { ...prev };
      if (message) next[field] = message;
      else delete next[field];
      return next;
    });
  };

  // Clears a field's error the moment the user clicks/tabs back into it —
  // re-engaging with the problem field should feel like a clean slate, not
  // like it's still being scolded. handleFieldBlur re-checks it (and shows
  // the error again if it's still invalid) once they leave.
  const handleFieldFocus = (field: FieldName) => () => {
    setErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const nextErrors: Partial<Record<FieldName, string>> = {};
    for (const field of FIELD_ORDER) {
      const message = validateField(field, String(data.get(field) ?? ""));
      if (message) nextErrors[field] = message;
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      // On mobile especially, Submit is often tapped while the invalid
      // field is scrolled off-screen — without this, the error message
      // renders somewhere the user never sees, and nothing appears to
      // happen when they tap Submit.
      const firstInvalidField = FIELD_ORDER.find((field) => nextErrors[field]);
      const el = firstInvalidField ? document.getElementById(firstInvalidField) : null;
      el?.scrollIntoView({ behavior: "smooth", block: "center" });
      window.setTimeout(() => el?.focus(), 300);
      return;
    }

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      console.error(
        "Contact form: NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY is not set — see .env.local.example.",
      );
      setSubmitError(GENERIC_SUBMIT_ERROR);
      return;
    }

    setSubmitError(null);
    setSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          subject: "New inquiry from the 3 Tiny Steps website",
          from_name: `${data.get("firstName")} ${data.get("lastName")}`.trim(),
          // Lets whoever checks the daycare inbox just hit "Reply" and have
          // it go straight to the submitting parent.
          replyto: data.get("email"),
          ...Object.fromEntries(
            Object.entries(EMAIL_FIELD_LABELS).map(([field, label]) => [
              label,
              data.get(field),
            ]),
          ),
        }),
      });
      const result = await response.json();

      if (result.success) {
        setSubmittedContact({
          email: String(data.get("email") ?? ""),
          phone: String(data.get("phone") ?? ""),
        });
        setSubmitted(true);
        setFormKey((k) => k + 1);
      } else {
        console.error("Web3Forms submission failed:", result.message);
        setSubmitError(GENERIC_SUBMIT_ERROR);
      }
    } catch (err) {
      console.error("Web3Forms submission error:", err);
      setSubmitError(GENERIC_SUBMIT_ERROR);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="pb-10 sm:pb-14">
      <Container>
        <div className="relative overflow-hidden rounded-[2.5rem] bg-green/25 px-6 py-10 sm:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <h2 className="font-heading text-h2 text-ink">Contact Us</h2>
              <ContactDetailsList />
            </div>

            <div className="relative">
              <h2 className="font-heading text-h2 text-ink">Get in Touch</h2>

              {submitted ? (
                <div
                  ref={successRef}
                  role="status"
                  className="mt-5 flex flex-col items-start gap-2 rounded-2xl bg-white p-6"
                >
                  <Icon name="check" className="size-8 text-green-dark" />
                  <p className="font-heading text-h3 text-ink">Thanks for reaching out!</p>
                  <p className="text-body text-ink/70">
                    We&rsquo;ve received your message and will follow up within 3&ndash;5 business
                    days at {submittedContact?.phone} or {submittedContact?.email}. If you
                    haven&rsquo;t heard from us by then, please call us directly at{" "}
                    {businessPhone}.
                  </p>
                  <Button
                    type="button"
                    variant="outline"
                    className="mt-2"
                    onClick={() => setSubmitted(false)}
                  >
                    Send another message
                  </Button>
                </div>
              ) : (
                <form key={formKey} onSubmit={handleSubmit} noValidate className="mt-4">
                  <p className="font-heading text-button text-ink/70 uppercase">
                    Parent Information
                  </p>
                  <div className="mt-2 grid gap-3 sm:grid-cols-2">
                    <Field
                      name="firstName"
                      label="First Name"
                      required
                      error={errors.firstName}
                      onFocus={handleFieldFocus("firstName")}
                      onBlur={handleFieldBlur("firstName")}
                    />
                    <Field
                      name="lastName"
                      label="Last Name"
                      required
                      error={errors.lastName}
                      onFocus={handleFieldFocus("lastName")}
                      onBlur={handleFieldBlur("lastName")}
                    />
                    <Field
                      name="phone"
                      label="Phone Number (US)"
                      type="tel"
                      inputMode="numeric"
                      placeholder="(203) 555-0123"
                      onInput={handlePhoneInput}
                      onFocus={handleFieldFocus("phone")}
                      onBlur={handleFieldBlur("phone")}
                      required
                      error={errors.phone}
                    />
                    <Field
                      name="email"
                      label="Email"
                      type="email"
                      required
                      error={errors.email}
                      onFocus={handleFieldFocus("email")}
                      onBlur={handleFieldBlur("email")}
                    />
                  </div>

                  <p className="mt-4 font-heading text-button text-ink/70 uppercase">
                    Child Information
                  </p>
                  <div className="mt-2 grid gap-3 sm:grid-cols-2">
                    <Field name="childFirstName" label="Child's First Name" />
                    <Field name="childLastName" label="Child's Last Name" />
                    <Field name="childDob" label="Child's Date of Birth" type="date" />
                    <Field
                      name="startDate"
                      label="Desired Start Date"
                      type="date"
                      min={minStartDate}
                      error={errors.startDate}
                      onFocus={handleFieldFocus("startDate")}
                      onBlur={handleFieldBlur("startDate")}
                    />
                  </div>

                  <div className="mt-4">
                    <Field
                      name="message"
                      label="Message"
                      required
                      error={errors.message}
                      textarea
                      onFocus={handleFieldFocus("message")}
                      onBlur={handleFieldBlur("message")}
                    />
                  </div>

                  {submitError && (
                    <div
                      ref={errorRef}
                      role="alert"
                      className="mt-4 flex flex-col items-start gap-2 rounded-2xl bg-pastel-red/15 p-6"
                    >
                      <Icon name="error-circle" className="size-8 text-pastel-red" />
                      <p className="font-heading text-h3 text-ink">Something went wrong</p>
                      <p className="text-body text-ink/70">{submitError}</p>
                    </div>
                  )}

                  <Button
                    type="submit"
                    variant="secondary"
                    disabled={submitting}
                    className={`mt-5 w-full sm:w-auto ${submitting ? "opacity-60" : ""}`}
                  >
                    {submitting ? "Sending…" : "Submit"}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
