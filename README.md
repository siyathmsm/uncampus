# UN Campus Website

A complete responsive multi-page educational institute website using the supplied logo and the main colour `#00426f`.

## Pages
- `index.html` — home, statistics, leadership, courses, why choose us, collaborations, student feedback carousel, FAQs and gallery preview
- `about.html` — story, values, leadership and milestones
- `courses.html` — filterable course catalogue and study pathways
- `staff.html` — filterable staff directory
- `gallery.html` — filterable gallery with lightbox
- `contact.html` — application enquiry form, branch details and maps

## Features
- Logo preloader
- Fully responsive layout and mobile navigation
- Dark/light mode with local storage
- Scroll reveal animations and animated counters
- Animated WhatsApp floating button with official icon and glowing effect
- Back-to-top button
- Unexa campus chatbot with editable local responses, animated icon and left-side placement
- Testimonial carousel with profile photos, ratings and controls
- FAQ accordion
- Gallery filters and image lightbox
- Course and staff filters
- Two confirmed Trincomalee branch maps in the footer and contact page
- Live Sri Lanka time display in the top bar
- Sticky navigation bar
- Contact form validation and demo success message
- Reduced-motion support

## Before publishing
The supplied information includes confirmed Google Maps locations for both Trincomalee branches. Leadership details, staff details, partner logos, phone numbers, emails, course data and student testimonials remain editable sample content.

Replace these items before deployment:
- `+94 77 000 0000` and other sample phone numbers
- `uncampus.edu.lk` sample emails
- Director, secretary and staff names, biographies and photos
- Student feedback
- Partner names and logos
- Course names, durations, fees and entry requirements
- Social media `#` links

## Run locally
Open `index.html` directly or serve the folder:

```bash
python -m http.server 8080
```

Then open `http://localhost:8080`.

## Connect live services
The contact form and Unexa assistant are functional front-end demos. Connect the form to your secure email/CRM backend and connect Unexa to a secure server-side AI endpoint. Do not place private API keys in browser JavaScript.
