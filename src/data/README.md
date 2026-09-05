# Editing the website content

Everything on the site that you'd want to change over time — text, photos,
staff, forms, blog posts — lives in this folder. Each file covers one part of
the site, and each file starts with instructions for that part.

**You do not need to touch any other folder to update the site's content.**

**Exception: Blog Recaps and Gallery Photos are edited at `/admin`, not
here.** Go to your site's URL followed by `/admin` (e.g.
`https://yoursite.com/admin`), log in, and you'll see two sections there —
"Blog Recaps" and "Gallery Photos" — with forms instead of code. See "How
photos and recaps fit together" below for how those two connect. Everything
else in this table is still a plain file you edit directly.

## Which file do I edit?

| I want to change...                      | Edit this file       |
| ---------------------------------------- | -------------------- |
| Daycare name, menu links, social links   | `site.ts`            |
| Home page                                | `home.ts`            |
| Mission, core values, facility           | `about.ts`           |
| **Ms. Libia's bio and photo**            | `provider.ts`        |
| **Adding or removing a staff member**    | `staff.ts`           |
| Programs page, age groups, curriculum    | `programs.ts`        |
| **The daily schedule**                   | `daily-schedule.ts`  |
| **Forms and downloadable resources**     | `resources.ts`       |
| Frequently asked questions               | `faqs.ts`            |
| Parent reviews                           | `testimonials.ts`    |
| **Every photo on the Blog or Gallery page** | `/admin` (Gallery Photos) |
| **Monthly recap write-ups (the Blog page)** | `/admin` (Blog Recaps) |
| Phone, hours, email, address             | `contact.ts`         |
| **The Privacy Policy page**              | `legal.ts`            |

## The three rules

**1. Only change what's inside the quotation marks.**

```ts
name: "Ms. Lilieth",
```

Change `Ms. Lilieth`. Leave `name:`, the quotes, and the comma alone.

**2. To add an item, copy a whole block and paste it below.**

A block starts with `{` and ends with `},`. Copy from the `{` to the `},`,
paste it right after, then edit the copy. To remove an item, delete its whole
block including the closing `},`.

**3. Apostrophes need a backslash inside single quotes — or just use double
quotes.**

```ts
body: "Your child's first day",   ✅ double quotes, apostrophe is fine
```

## Adding photos

Everywhere else on the site (staff photos, page headers, program photos —
anywhere you see a `filename`/`label` pair that isn't in `gallery.ts`), save
the photo into `public/images/` and use its exact file name:

```ts
photo: { filename: "staff-ms-anna.jpg", label: "Photo of Ms. Anna" },
```

Blog and Gallery photos are the one exception — those are uploaded through
`/admin` (see "How photos and recaps fit together" below), not saved into a
folder by hand.

`label` is the description read aloud by screen readers and shown if the photo
can't load, so keep it short and accurate.

If the file isn't there yet, the site shows a labelled placeholder naming the
file it's waiting for — nothing breaks. Drop the photo in later and it
appears automatically.

## Adding PDFs (forms, handbooks, calendars)

Save the PDF into `public/documents/`, then reference its file name in
`resources.ts`. To publish an **updated version** of an existing form, just
overwrite the PDF using the same file name — no code change needed.

## How photos and recaps fit together

Both live at `/admin`, as two separate sections — **Gallery Photos** and
**Blog Recaps** — and the order matters:

1. **Add the photo in Gallery Photos first.** Upload it, write a caption,
   and (optionally) set a month — that's what controls its sort order on
   the Gallery page.
2. **Then, if it belongs in a monthly recap too**, create or edit that
   recap in Blog Recaps and pick the photo from a dropdown for its cover
   photo and/or its gallery strip. You can only pick photos that already
   exist in Gallery Photos — that's why step 1 comes first.

- **Just want a photo in the Gallery, no recap attached?** You're done after
  step 1 — nothing else to do.
- **Want it in a monthly recap too?** Do step 2.

While a recap is recent it shows in THREE places — as the featured recap and
one of the 3 "Looking Back" cards on the Blog page, and as the big photo
banner on the Home page — no matter how many recaps pile up over time, so you
never need to delete old ones. Posting a new recap automatically updates all
three; there's nothing to change on the Home page itself.

**Deleting a recap in Blog Recaps only removes its write-up — never its
photos.** The photos live in Gallery Photos and keep showing in the Gallery
regardless of what happens to the recap. To actually remove a photo, delete
it from Gallery Photos — and if a recap still uses it, that recap will just
show a placeholder where the photo used to be (nothing breaks).

## Colors

Blog Recaps are the one exception — recap panel colors are picked
automatically, in rotation, so there's no color to set there. Everywhere
else, where a file
asks for an `accent`, use one of these exact words:

`"green"` · `"crimson"` (pink) · `"azure"` (blue) · `"pastelAzure"` (light
blue) · `"yellow"`

## The search bar in the header

Nothing to maintain here — `search-index.ts` builds the list of searchable
staff, FAQs, resources, recaps, and page sections automatically from the
same files described above, so editing content (renaming a staff member,
adding an FAQ, posting a recap) keeps search up to date on its own. You'd
only ever touch `search-index.ts` if you added a whole new kind of content
this file doesn't already know about.

## If something breaks

The site won't build if a quote, comma, or bracket is missing. Undo your change
(Cmd+Z) and try again one small edit at a time.
