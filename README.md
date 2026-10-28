# INNSPIRA HOSPITALITY LLP
## Premium Corporate Hospitality Consultancy Website — Phase 1 Prototype

This repository contains the complete, production-ready static HTML/CSS/JS prototype for **Innspira Hospitality LLP**, a specialist hospitality consultancy founded by **Kshitij Singh**, providing advisory across India and international markets.

---

### Project Structure

```text
InnspiraHospitality/
│
├── index.html              # 1. Home Page (Hero, Intro, 8 Services, 6 Client Types, 4-Stage Approach, Projects, Founder, Insights, CTA)
├── about.html              # 2. About Us (Company Profile, Mission, Vision, Principles, Founder Credentials, Education, Engagement Models)
├── services.html           # 3. Our Services (All 8 Core Services with #anchor navigation, areas of support, client value)
├── projects.html           # 4. Our Projects (Verified Project Records with rigorous attribution notices)
├── insights.html           # 5. Insights & Perspectives (Featured Article & 6 Proposed Thought Leadership Topics)
├── contact.html            # 6. Contact Us (Direct channels & interactive form with local validation)
├── privacy-policy.html     # Legal Placeholder: Privacy Statement (Marked for review)
├── terms.html              # Legal Placeholder: Terms & Conditions (Marked for review)
│
├── css/
│   └── style.css           # Custom Design Tokens, typography, card hover, sticky header, and transitions
│
├── js/
│   └── main.js             # Sticky header handler, mobile menu drawer, Lucide icon initialiser, contact form validation
│
└── assets/
    ├── images/
    │   └── logo.png        # Official Innspira Hospitality LLP Brand Logo
    └── icons/
```

---

### How to Run Locally

You can open and view the website prototype using any standard local web server:

#### Option 1: Using Python (Recommended)
Open PowerShell or Terminal in this directory and run:
```bash
python -m http.server 8000
```
Then visit: `http://localhost:8000`

#### Option 2: Using Node `npx serve`
```bash
npx serve .
```

#### Option 3: VS Code / IDE Live Server
Right-click `index.html` and choose **"Open with Live Server"**.

---

### Brand Design Tokens & Palette

- **Primary Navy:** `#142B3B`
- **Deep Navy:** `#0B1D2A`
- **Muted Gold:** `#B79A65`
- **Warm Ivory:** `#F7F5F0`
- **White:** `#FFFFFF`
- **Body Text:** `#4C5962`
- **Light Border:** `#E4E7E9`
- **Dark Text:** `#182630`
- **Typography:** *Playfair Display* (Headings) & *Inter* (Body / Navigation)

---

### Important Client & Attribution Rules

1. **Brand Identity:** Innspira Hospitality LLP remains the primary brand throughout; founder Kshitij Singh’s professional education and operational background provide leadership credibility.
2. **Attribution Transparency:** Distinguishes between company advisory, founder executive background (Managing Director at The Gauri Hotels and Resorts), academic project exposure (UNSW projects involving Raffles Jakarta and Aurecon & Transgrid), and hotel operations training (Taj Palace, New Delhi).
3. **Form Submissions:** The contact enquiry form on `contact.html` validates all required fields and demonstrates the confirmed client prototype message without storing or transmitting user data externally.
4. **Draft Copy:** Mission, vision, tagline, and proposed article topics are identified as draft copy for client approval.
