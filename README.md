# Gumpack - Innovation in Packaging

A modern, responsive React website showcasing Gumpack's premium olive oil packaging solutions from Tunisia.

## Features

- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Modern UI**: Built with React and Tailwind CSS for a sleek, professional look
- **Smooth Navigation**: Smooth scrolling between sections with sticky navigation
- **Product Showcase**: Three distinct olive oil varieties from different Tunisian regions
- **Interactive Elements**: Hover effects, transitions, and modern animations
- **Contact Form**: Easy-to-use contact form for inquiries

## Sections

1. **Hero**: Eye-catching landing section with company branding
2. **Heritage**: Story of Tunisia's 2,500+ year olive oil tradition
3. **Products**: Showcase of three premium olive oil varieties (North, Central, South)
4. **Regions**: Detailed information about three distinct climates and their characteristics
5. **Quality**: Certification and quality assurance highlights
6. **Contact**: Contact form and company information
7. **Footer**: Quick links and additional information

## Tech Stack

- **React 18**: Modern React with hooks
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Beautiful, consistent icons
- **Create React App**: Build tooling and development server

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Design Features

### Color Palette

- **Olive Green**: Primary brand color reflecting the olive oil heritage
- **Sand/Tan**: Secondary color representing Tunisia's landscape
- **White/Cream**: Clean, modern background colors

### Typography

- **Headings**: Serif fonts for elegance and tradition
- **Body**: Sans-serif fonts for modern readability

### Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## Customization

### Adding Images

Place your product images in the `public` folder and reference them in the components:

```jsx
<img src="/logo2.png" alt="Gumpack Logo" />
```

### Updating Content

Edit the content directly in `src/App.js`:
- Product information in the `Products` component
- Regional details in the `Regions` component
- Contact information in the `Contact` and `Footer` components

### Styling

Customize colors in `tailwind.config.js`:
```js
colors: {
  olive: { ... },
  sand: { ... }
}
```

## Assets

The following assets from the `/re` folder can be integrated:
- `logo2.png`: Company logo
- `etiquette.png`: Product bottle labels
- `etiverbrun.png`: Regional label variations
- `fface1.png`, `fface2.png`: Marketing materials
- `arbre2500.jpg`: Heritage olive tree image

## Contact

For inquiries about Gumpack products and services:
- Email: contact@gumpack.com
- Phone: +216 XX XXX XXX
- Location: Tunisia

## License

© 2024 Gumpack. All rights reserved.
