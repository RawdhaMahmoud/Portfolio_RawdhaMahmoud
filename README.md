# Portfolio - Rawdha Mahmoud

A modern, responsive, and feature-rich portfolio website built with Next.js 16, showcasing professional projects, skills, education, and certifications. The site features a sleek dark theme with smooth animations and an integrated contact form.

## ✨ Features

- **Responsive Design** - Fully optimized for desktop, tablet, and mobile devices
- **Modern UI/UX** - Clean dark theme with gradient accents and smooth transitions
- **Project Showcase** - Interactive project cards with detailed descriptions and live demos
- **Skills & Expertise** - Comprehensive display of technical skills and proficiencies
- **Education Timeline** - Visual representation of academic background
- **Certifications** - Professional certifications and achievements
- **Contact Form** - Fully functional email integration using EmailJS with toast notifications
- **Smooth Scrolling** - Seamless navigation between sections
- **Loading States** - Professional loading indicators for async operations
- **SEO Optimized** - Built with Next.js best practices for search engine optimization

## 🚀 Technologies Used

### Frontend
- **Next.js 16** - React framework with App Router
- **React 19** - Modern React with latest features
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first CSS framework

### Libraries & Tools
- **Lucide React** - Beautiful icon library
- **EmailJS** - Email service integration for contact form
- **React Hot Toast** - Modern toast notifications
- **ESLint** - Code linting and quality assurance

## 📦 Getting Started

### Prerequisites
- Node.js 20.x or higher
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/portfolio-rawdha-mahmoud.git
cd portfolio-rawdha-mahmoud
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

4. Run the development server
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
portfolio-rawdha-mahmoud/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Home page
│   ├── globals.css          # Global styles
│   └── NotFound.tsx         # 404 page
├── components/
│   ├── layout/              # Layout components
│   │   ├── Header.tsx       # Navigation header
│   │   └── Footer.tsx       # Footer component
│   ├── sections/            # Main sections
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Projects.tsx
│   │   └── Profile/
│   │       ├── Profile.tsx
│   │       ├── Skills.tsx
│   │       ├── Certifications.tsx
│   │       └── EducationTimeline.tsx
│   ├── ui/                  # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── CertificationCard.tsx
│   │   ├── InputField.tsx
│   │   ├── TextAreaField.tsx
│   │   ├── Logo.tsx
│   │   ├── Navbar.tsx
│   │   └── SocialIcon.tsx
│   ├── ContactForm.tsx      # Contact form with EmailJS
│   └── CodeAnimations.tsx   # Animated code snippets
├── data/                    # Static data
│   ├── Projects.ts
│   ├── Skills.ts
│   ├── Certifications.ts
│   └── Education.ts
├── public/                  # Static assets
│   ├── certifications/
│   ├── projects/
│   ├── cv/
│   └── image_logo/
└── Configuration files
```

## 🎨 Customization

### Update Personal Information
- Modify data files in `/data` directory
- Update metadata in `app/layout.tsx`
- Replace images in `/public` directory

### Styling
- Global styles: `app/globals.css`
- Tailwind configuration: `tailwind.config.ts`
- Component-specific styles: Inline Tailwind classes

### EmailJS Setup
1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Set up an email service
3. Create an email template
4. Add credentials to `.env.local`

Built with ❤️ using Next.js and Tailwind CSS
