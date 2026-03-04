# React FundMe Landing Page

A modern, elegant React application for academic fundraising with integrated payment solutions.

## 🎯 Features

- **Elegant Design**: Premium aesthetics with glass morphism effects and gradients
- **Responsive Layout**: Mobile-first approach with Tailwind CSS
- **Payment Integration**: 
  - Grey USD transfer with account details and receipt upload
  - PayPal integration with amount selection
  - Direct sponsorship options
- **Interactive Components**: 
  - Sticky navigation with smooth scrolling
  - Modal system with animations
  - File upload with validation
  - Progress tracking and statistics
- **Accessibility**: Keyboard navigation, ARIA labels, focus management
- **Performance**: Optimized with React hooks and memoization

## 🚀 Tech Stack

- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Custom Hooks** for state management
- **Modern JavaScript** features
- **Responsive Design** principles

## 📦 Installation

```bash
# Clone the repository
git clone [repository-url]

# Navigate to project directory
cd react-fundme-landing

# Install dependencies
npm install

# Start development server
npm start
```

## 🎨 Design System

### Colors
- Primary Dark: `#0B1C2D`
- Secondary Dark: `#1F2933`
- Accent Blue: `#3B82F6`
- Success Green: `#22C55E`
- Elegant Gold: `#D4AF37`
- Soft Cream: `#FDF8F0`

### Typography
- **Headings**: Playfair Display (serif)
- **Body Text**: Inter (sans-serif)

## 💳 Payment Methods

### Grey USD Transfer
- Account details display
- Copy-to-clipboard functionality
- Receipt upload with file validation
- Success confirmation

### PayPal Integration
- Amount selection ($50, $100, $250, $500)
- Custom amount input
- Direct PayPal redirect
- Success confirmation

### Direct Sponsorship
- Email contact for long-term support
- Regular updates and communication

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 640px
- **Tablet**: 640px - 1024px
- **Desktop**: 1024px+

## 🔧 Custom Hooks

### useModal
```javascript
const { isOpen, openModal, closeModal, toggleModal } = useModal();
```

### useFileUpload
```javascript
const { file, preview, error, handleFileChange, removeFile } = useFileUpload();
```

## 📊 Component Structure

```
src/
├── components/
│   ├── Header.jsx          # Sticky navigation
│   ├── Hero.jsx           # Hero section with CTA
│   ├── Introduction.jsx   # About section
│   ├── Funding.jsx        # Funding breakdown
│   ├── Milestones.jsx     # Academic timeline
│   ├── Transparency.jsx   # Transparency commitment
│   ├── Donate.jsx         # Payment options
│   ├── Footer.jsx         # Contact information
│   └── modals/
│       ├── GreyUsdModal.jsx
│       ├── PayPalModal.jsx
│       └── SuccessModal.jsx
├── hooks/
│   ├── useModal.js        # Modal state management
│   └── useFileUpload.js   # File upload functionality
├── utils/
│   └── paymentConfig.js   # Payment configuration
└── App.jsx               # Main application
```

## 🧪 Testing

- Manual testing completed for all functionality
- Responsive design tested across breakpoints
- Payment flow integration verified
- Accessibility features tested

## 🚀 Deployment

```bash
# Build for production
npm run build

# Deploy to your preferred hosting service
# (Netlify, Vercel, GitHub Pages, etc.)
```

## 📧 Contact

For questions about the project:
- Email: precious@example.com
- Phone: +1 (555) 123-4567

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License.

---

**Built with ❤️ for academic success**