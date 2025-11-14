# 🌸 Ghibli-Inspired Developer Portfolio

A beautiful, modern one-page developer portfolio website with a Studio Ghibli aesthetic theme. Built with Next.js, TypeScript, and Tailwind CSS.

## ✨ Features

### Design & Aesthetics
- 🎨 **Studio Ghibli Theme**: Soft pastel colors (greens, blues, ambers, purples)
- 🌬️ **Animated Background**: Floating gradient orbs and smooth transitions
- ✨ **Smooth Animations**: Fade-in, floating, scroll-reveal, and glow effects
- 📱 **Fully Responsive**: Beautiful on mobile, tablet, and desktop

### Sections

1. **Hero Section**
   - Ghibli-inspired gradient background with floating elements
   - Eye-catching introduction with smooth fade-in animation
   - Call-to-action buttons (Hire Me & View Projects)
   - Animated scroll indicator

2. **About Section**
   - Two-column layout with illustration placeholder
   - Bio and personal story
   - Skills showcase with tag styling
   - Scroll-reveal animation

3. **Projects Section**
   - Responsive grid layout (1-2 columns)
   - Hover animations with scale and shadow effects
   - Project cards with descriptions and technology tags
   - Smooth transitions and interactive elements

4. **Experience Section**
   - Timeline layout with alternating cards
   - Ghibli-styled vine/leaf timeline design
   - Professional journey showcase
   - Scroll-triggered animations

5. **Contact Section**
   - Clean, functional contact form with validation
   - Contact information cards (email, phone, location)
   - Social media links with emoji icons
   - Glow effect on submit button
   - Success message feedback

6. **Navigation & Footer**
   - Sticky navigation with smooth scroll behavior
   - Mobile-responsive hamburger menu
   - Footer with quick links and social connections

## 🚀 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) - React-based framework with App Router
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Package Manager**: npm

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ and npm installed
- Basic knowledge of React and Next.js

### Steps

1. **Navigate to the project directory**
   ```bash
   cd nana
   ```

2. **Install dependencies** (if not already installed)
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Navigate to `http://localhost:3000`
   - The page will auto-refresh as you make changes

## 📂 Project Structure

```
nana/
├── app/
│   ├── components/          # Reusable React components
│   │   ├── Navigation.tsx    # Sticky navigation bar
│   │   ├── HeroSection.tsx   # Hero/intro section
│   │   ├── AboutSection.tsx  # About & skills section
│   │   ├── ProjectsSection.tsx  # Portfolio projects
│   │   ├── ExperienceSection.tsx # Timeline & experience
│   │   ├── ContactSection.tsx    # Contact form & info
│   │   └── Footer.tsx        # Footer with links
│   ├── globals.css          # Global styles & animations
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main home page
├── public/                  # Static assets
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
├── next.config.ts          # Next.js configuration
└── package.json            # Project dependencies
```

## 🎨 Customization Guide

### Update Personal Information

1. **Hero Section** (`app/components/HeroSection.tsx`)
   ```tsx
   <span className="bg-gradient-to-r from-blue-600 via-green-500 to-amber-600 text-transparent bg-clip-text">
     Nandani  // <- Change this to your name
   </span>
   ```
   - Change the name "Nandani" to your name
   - Update the title "Full-Stack Developer & DevOps"
   - Modify the description

2. **About Section** (`app/components/AboutSection.tsx`)
   - Replace placeholder illustration with your image
   - Update bio text
   - Modify skills list in the array

3. **Projects Section** (`app/components/ProjectsSection.tsx`)
   ```tsx
   const projects: Project[] = [
     {
       id: 1,
       title: 'Your Project Name',
       description: 'Your project description...',
       technologies: ['Tech1', 'Tech2'],
       color: 'from-blue-100 to-cyan-100',
       icon: '🛍️',
     },
     // Add more projects...
   ];
   ```

4. **Experience Section** (`app/components/ExperienceSection.tsx`)
   ```tsx
   const experiences: Experience[] = [
     {
       id: 1,
       company: 'Your Company',
       position: 'Your Position',
       period: '2023 - Present',
       description: 'Your description...',
       skills: ['Skill1', 'Skill2'],
       icon: '🚀',
     },
     // Add more experiences...
   ];
   ```

5. **Contact Section** (`app/components/ContactSection.tsx`)
   ```tsx
   <a href="mailto:your-email@example.com">
     nandani@example.com  // <- Change this
   </a>
   ```
   - Update email address
   - Update phone number
   - Add social media links
   - Update location

### Color Customization

The Ghibli color palette uses Tailwind classes throughout:

**Primary Colors**:
- Green: `from-green-500`, `to-green-600`
- Blue: `from-blue-600`, `via-blue-500`
- Purple: `from-purple-500`, `to-pink-500`
- Amber/Orange: `from-amber-600`, `to-orange-100`

**Background Gradients**:
- `from-blue-100 via-green-50 to-amber-50`
- `from-green-50 to-blue-50`
- `from-amber-50 to-green-50`

To customize globally, update the class names in components or create custom CSS in `globals.css`.

### Animation Customization

Key animations defined in `globals.css`:

```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }  /* Adjust distance */
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes glow {
  0%, 100% { box-shadow: 0 0 20px rgba(167, 139, 250, 0.5); }
  50% { box-shadow: 0 0 30px rgba(167, 139, 250, 0.8); }
}
```

Adjust duration values (e.g., `3s`, `0.8s`, `2s`) and transform values to customize speeds.

## 🔧 Scripts

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 📱 Responsive Design

Fully responsive with Tailwind breakpoints:
- **Mobile**: Default (< 640px)
- **Tablet**: `sm:` (640px), `md:` (768px)
- **Desktop**: `lg:` (1024px), `xl:` (1280px)

Example:
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  {/* Mobile: 1 column, Desktop: 2 columns */}
</div>
```

## ✨ Animation Features

### Using Animations in Components

```tsx
// Fade in on load
<div className="fade-in">Content</div>

// Floating animation
<div className="float">Content</div>

// Scroll reveal (triggers on viewport entry)
<div className="scroll-reveal">Content</div>

// Glow effect (usually for buttons)
<button className="glow-button">Click me</button>

// Slide up animation
<div className="slide-in-up">Content</div>
```

### Making Custom Animations

1. Define in `globals.css`:
```css
@keyframes customAnimation {
  from { /* start state */ }
  to { /* end state */ }
}

.custom-class {
  animation: customAnimation 1s ease-out;
}
```

2. Use in components:
```tsx
<div className="custom-class">Content</div>
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Click "New Project" and import your repository
4. Vercel auto-detects Next.js and deploys automatically!

### Other Deployment Options

- **Netlify**: Connect GitHub repo, select Next.js preset
- **AWS Amplify**: Follow AWS documentation for Next.js
- **Docker**: Containerize with Next.js Docker image
- **Traditional Server**: Use `npm run build` and `npm start`

## 📝 SEO Optimization

Already included:
- Semantic HTML (proper heading hierarchy)
- Meta tags in `layout.tsx`
- Open Graph tags for social sharing
- Proper semantic structure for accessibility

To enhance further:
- Add JSON-LD schema markup
- Create sitemap.xml
- Add robots.txt
- Implement analytics (Google Analytics, etc.)

## 🤝 Making the Form Work

Currently, the contact form simulates submission. To make it functional:

### Option 1: EmailJS (Easiest)
```tsx
import emailjs from '@emailjs/browser';

const handleSubmit = (e) => {
  emailjs.init("YOUR_PUBLIC_KEY");
  emailjs.send("SERVICE_ID", "TEMPLATE_ID", formData)
    .then(() => setIsSubmitted(true));
};
```

### Option 2: Formspree (No Backend)
```tsx
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  {/* Form fields */}
</form>
```

### Option 3: Custom Backend
```tsx
const handleSubmit = async (e) => {
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(formData),
  });
};
```

## 🖼️ Adding Images

Replace emoji placeholders with real images:

1. Add image to `public/images/`
2. Use Next.js Image component:
```tsx
import Image from 'next/image';

<Image
  src="/images/your-image.jpg"
  alt="Description"
  width={600}
  height={400}
/>
```

## 💡 Tips & Best Practices

### Performance
- Use Next.js Image component for optimization
- Lazy load off-screen content
- Check performance with Lighthouse
- Minimize bundle size

### Accessibility
- Ensure color contrast (WCAG AA)
- Add ARIA labels
- Use semantic HTML
- Test with screen readers

### Mobile First
- Design for mobile first
- Test on real devices
- Optimize touch targets (44px minimum)

### Code Quality
- Keep components small and reusable
- Use TypeScript for type safety
- Add comments for complex logic
- Follow naming conventions

## 🎯 Common Tasks

### Add New Section
1. Create component: `app/components/NewSection.tsx`
2. Add scroll-reveal logic using IntersectionObserver
3. Import in `app/page.tsx`
4. Add to render order

### Change Font
```tsx
// In app/layout.tsx
import { YourFont } from "next/font/google";
const yourFont = YourFont({ variable: "--font-custom" });
```

### Add Dark Mode
Extend `globals.css`:
```css
@media (prefers-color-scheme: dark) {
  body {
    @apply bg-gray-900 text-gray-100;
  }
}
```

### Disable Animations
Remove animation classes or update `globals.css`:
```css
.float, .fade-in, .glow-button {
  animation: none !important;
}
```

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| Styles not applying | Restart dev server and clear `.next` folder |
| Animations not working | Check Tailwind config, ensure `globals.css` is imported |
| Mobile looks off | Test in DevTools, check viewport meta tag |
| Images not loading | Ensure images are in `public/` folder |
| Form not working | Implement EmailJS or custom backend |

## 📚 Learning Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/animation)
- [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)

## 📄 Code Comments

All components include detailed comments explaining:
- Component purpose and features
- How each section works
- How to customize elements
- Animation logic

Read the comments in each component to understand implementation details!

## 🌟 Credits

- Inspired by **Studio Ghibli** aesthetic & design philosophy
- Built with **Next.js** - The React Framework
- Styled with **Tailwind CSS** - Utility-First CSS
- Developed with ❤️

## 📖 More Information

- Original README: See `README.md` for Next.js setup info
- For questions, refer to component comments
- Explore the code to understand React patterns

---

**Enjoy building your beautiful portfolio! ✨🌸**

*May your code be as elegant as a Ghibli landscape.*
