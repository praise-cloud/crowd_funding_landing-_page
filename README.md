# Hope Harbor Children's Aid Landing Page

A professional React landing page for a child relief organization. The site focuses on urgent medical support, shelter, recovery services, and transparent fundraising.

## Features

- Professional nonprofit layout focused on child relief
- Responsive design with Tailwind CSS utilities
- Payment options: PayPal, Grey USD transfer, and direct sponsorship
- Modal system with file upload and validation
- Progress tracking and funding breakdown
- Scroll reveal animations and micro-interactions

## Tech Stack

- React 18
- Tailwind CSS
- Vite
- Custom hooks for modal, file upload, and scroll reveal

## Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## Design System

### Colors
- Primary Dark: `#0B1C2D`
- Secondary Dark: `#1F2933`
- Accent Rose: `#F43F5E`
- Accent Orange: `#F97316`
- Soft Cream: `#FDF8F0`

### Typography
- Headings: Fraunces (serif)
- Body: Manrope (sans-serif)

## Component Structure

```
src/
+-- components/
¦   +-- Header.jsx
¦   +-- Hero.jsx
¦   +-- Introduction.jsx
¦   +-- Funding.jsx
¦   +-- Milestones.jsx
¦   +-- Transparency.jsx
¦   +-- Donate.jsx
¦   +-- Footer.jsx
¦   +-- modals/
¦       +-- GreyUsdModal.jsx
¦       +-- PayPalModal.jsx
¦       +-- SuccessModal.jsx
+-- hooks/
¦   +-- useModal.js
¦   +-- useFileUpload.js
¦   +-- useScrollReveal.js
+-- utils/
¦   +-- paymentConfig.js
+-- App.jsx
```

## Configuration

Update these values before production use:
- `src/utils/paymentConfig.js` (Grey account details, sponsorship email, PayPal settings)
- `.env` (PayPal client ID and currency overrides)

## Update Log

- March 11, 2026
  - Rebranded the site to a professional child relief organization
  - Added scroll reveal animations and micro-interactions
  - Updated imagery and professional fundraising copy
  - Refined donation flows and organization messaging
  - Updated contact details and placeholders in payment config

## License

MIT