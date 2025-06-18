# DevLoopLB - New Pages Documentation

## Overview

This document describes the newly added About Us and Contact Us pages for the DevLoopLB website.

## Pages Added

### 1. About Us Page (`/about`)

- **Location**: `src/pages/AboutUs.tsx` and `src/pages/AboutUs.css`
- **Route**: `/about`
- **Features**:
  - Modern hero section with gradient background
  - Mission statement section
  - Values section with animated cards
  - Services/What We Do section
  - Team section with placeholder avatars
  - Call-to-action section with navigation buttons

### 2. Contact Us Page (`/contact`)

- **Location**: `src/pages/ContactUs.tsx` and `src/pages/ContactUs.css`
- **Route**: `/contact`
- **Features**:
  - Hero component at the top (as requested)
  - Glassy contact form with modern design
  - reCAPTCHA v2 integration (no domain required)
  - Contact information section
  - FAQ section
  - Form validation and submission handling

## Technical Implementation

### Dependencies Added

- `react-router-dom` - For client-side routing
- `react-google-recaptcha` - For CAPTCHA functionality

### Routing Setup

The app now uses React Router with the following routes:

- `/` - Home page (existing)
- `/about` - About Us page
- `/contact` - Contact Us page

### Navigation

The navbar has been updated to include proper navigation links using React Router's `Link` component.

## reCAPTCHA Configuration

### Current Setup

- Using reCAPTCHA v2 with the test site key: `6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI`
- This is a test key that works without domain verification

### Production Setup

To use in production:

1. Go to [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin)
2. Register a new site
3. Choose reCAPTCHA v2
4. Add your domain
5. Replace the site key in `ContactUs.tsx` line 147

## Styling

### Design System

Both pages use a consistent design system:

- Dark theme with gradient backgrounds
- Glass morphism effects with backdrop blur
- Purple/blue gradient accents (#667eea to #764ba2)
- Responsive design for all screen sizes
- Smooth animations and hover effects

### CSS Features

- Glass morphism with `backdrop-filter: blur()`
- CSS Grid and Flexbox for layouts
- CSS custom properties for consistent theming
- Mobile-first responsive design
- Smooth transitions and transforms

## Form Handling

### Contact Form Features

- Real-time form validation
- reCAPTCHA integration
- Loading states during submission
- Success/error message display
- Form reset after successful submission

### Form Fields

- Full Name (required)
- Email Address (required, email validation)
- Subject (dropdown with predefined options)
- Message (required, textarea)
- reCAPTCHA verification

## Usage

### Development

```bash
npm run dev
```

Navigate to:

- `http://localhost:5173/` - Home page
- `http://localhost:5173/about` - About Us page
- `http://localhost:5173/contact` - Contact Us page

### Building for Production

```bash
npm run build
```

## Customization

### Content Updates

- Edit the content in the respective `.tsx` files
- Update contact information in `ContactUs.tsx`
- Modify team information in `AboutUs.tsx`

### Styling Updates

- Modify the respective `.css` files
- Update color scheme by changing CSS custom properties
- Adjust animations and transitions

### Form Integration

- Replace the simulated form submission in `ContactUs.tsx` with actual API calls
- Update the reCAPTCHA site key for production
- Add additional form validation as needed

## Browser Support

- Modern browsers with CSS Grid and Flexbox support
- Backdrop filter support for glass morphism effects
- JavaScript enabled for React Router and reCAPTCHA

## Notes

- The reCAPTCHA currently uses a test key that works without domain verification
- Form submission is currently simulated - replace with actual backend integration
- All images and avatars are placeholder emojis - replace with actual assets
- Contact information is placeholder data - update with actual contact details
