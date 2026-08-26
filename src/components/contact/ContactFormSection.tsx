"use client";

import { useState, type FormEvent } from "react";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { contactDetails } from "@/data/contact";
import { slugify } from "@/lib/slugify";

/** Opens web links (maps, etc.) in a new tab; leaves tel:/mailto: links to switch apps in place. */
function externalLinkProps(href: string) {
  return href.startsWith("http") ? { target: "_blank" as const, rel: "noreferrer noopener" } : {};
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

function Field({
  name,
  label,
  type = "text",
  required,
  error,
  textarea,
  placeholder,
}: {
  name: FieldName;
  label: string;
  type?: string;
  required?: boolean;
  error?: string;
  textarea?: boolean;
  placeholder?: string;
}) {
  const baseClasses =
    "min-w-0 max-w-full rounded-xl border border-ink/15 bg-white px-4 py-2.5 text-body text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-azure";
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

export function ContactFormSection() {
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [formKey, setFormKey] = useState(0);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const nextErrors: Partial<Record<FieldName, string>> = {};

    for (const field of REQUIRED_FIELDS) {
      const value = String(data.get(field) ?? "").trim();
      if (!value) nextErrors[field] = `${FIELD_LABELS[field]} is required.`;
    }
    const email = String(data.get("email") ?? "").trim();
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "Enter a valid email address.";
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    // No email service is connected yet — this just confirms receipt in the UI.
    // TODO: wire this to a real email service (e.g. Resend) once credentials exist.
    setSubmitted(true);
    setFormKey((k) => k + 1);
  };

  return (
    <section className="pb-10 sm:pb-14">
      <Container>
        <div className="relative overflow-hidden rounded-[2.5rem] bg-green/25 px-6 py-10 sm:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <h2 className="font-heading text-h2 text-ink">Contact Us</h2>
              <ul className="mt-6 flex flex-col gap-5">
                {contactDetails.map((detail) => {
                  const info = (
                    <>
                      <Icon name={detail.icon} className="mt-0.5 size-5 shrink-0 text-azure" />
                      <div>
                        <p className="font-heading text-h3 text-ink">{detail.label}</p>
                        {detail.lines.map((line) => (
                          <p key={line} className="text-body text-ink/70">
                            {line}
                          </p>
                        ))}
                      </div>
                    </>
                  );

                  if (detail.href) {
                    return (
                      <li key={detail.label} id={slugify(detail.label)}>
                        <a
                          href={detail.href}
                          {...externalLinkProps(detail.href)}
                          className="-mx-2 -my-1 flex items-start gap-3 rounded-xl px-2 py-1 transition-colors hover:bg-white/60"
                        >
                          {info}
                        </a>
                      </li>
                    );
                  }

                  if (detail.links) {
                    return (
                      <li
                        key={detail.label}
                        id={slugify(detail.label)}
                        className="flex items-start gap-3"
                      >
                        <Icon name={detail.icon} className="mt-0.5 size-5 shrink-0 text-azure" />
                        <div>
                          <p className="font-heading text-h3 text-ink">{detail.label}</p>
                          {detail.lines.map((line) => (
                            <p key={line} className="text-body text-ink/70">
                              {line}
                            </p>
                          ))}
                          <div className="mt-2 flex flex-wrap gap-2">
                            {detail.links.map((link) => (
                              <a
                                key={link.label}
                                href={link.href}
                                {...externalLinkProps(link.href)}
                                className="rounded-full bg-azure-tint px-3 py-1 text-[13px] font-medium text-azure transition-colors hover:bg-azure hover:text-white"
                              >
                                {link.label}
                              </a>
                            ))}
                          </div>
                        </div>
                      </li>
                    );
                  }

                  return (
                    <li
                      key={detail.label}
                      id={slugify(detail.label)}
                      className="flex items-start gap-3"
                    >
                      {info}
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="relative">
              <h2 className="font-heading text-h2 text-ink">Get in Touch</h2>

              {submitted ? (
                <div
                  role="status"
                  className="mt-5 flex flex-col items-start gap-2 rounded-2xl bg-white p-6"
                >
                  <Icon name="check" className="size-8 text-green-dark" />
                  <p className="font-heading text-h3 text-ink">Thanks for reaching out!</p>
                  <p className="text-body text-ink/70">
                    We&rsquo;ve received your message and will get back to you soon.
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
                    <Field name="firstName" label="First Name" required error={errors.firstName} />
                    <Field name="lastName" label="Last Name" required error={errors.lastName} />
                    <Field
                      name="phone"
                      label="Phone number"
                      type="tel"
                      placeholder="(203) 555-0123"
                      required
                      error={errors.phone}
                    />
                    <Field name="email" label="Email" type="email" required error={errors.email} />
                  </div>

                  <p className="mt-4 font-heading text-button text-ink/70 uppercase">
                    Child Information
                  </p>
                  <div className="mt-2 grid gap-3 sm:grid-cols-2">
                    <Field name="childFirstName" label="Child's First Name" />
                    <Field name="childLastName" label="Child's Last Name" />
                    <Field name="childDob" label="Child's Date of Birth" type="date" />
                    <Field name="startDate" label="Desired Start Date" type="date" />
                  </div>

                  <div className="mt-4">
                    <Field name="message" label="Message" required error={errors.message} textarea />
                  </div>

                  <Button type="submit" variant="secondary" className="mt-5 w-full sm:w-auto">
                    Submit
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
