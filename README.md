# Hope for Little Hearts Landing Page

A modern React landing page for a pediatric care fundraising campaign. The site focuses on urgent medical support for children and provides clear donation paths, transparency, and impact reporting.

## Features

- Purpose-built fundraising layout for pediatric care
- Responsive design with Tailwind CSS utilities
- Payment options: PayPal, Grey USD transfer, and direct sponsorship
- Modal system with file upload and validation
- Progress tracking and funding breakdown
- Accessibility-friendly interactions and smooth scrolling

## Tech Stack

- React 18
- Tailwind CSS
- Vite
- Custom hooks for modal and file upload management

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
  - Rebranded the site to a pediatric care fundraising campaign
  - Added hero imagery from `src/assets`
  - Updated copy, timelines, and funding breakdown for medical relief
  - Adjusted color palette and typography
  - Updated contact details and placeholders in payment config

## License

MIT