# Personal Portfolio Website

A modern, professional personal portfolio website built with Next.js, featuring smooth animations, a clean UI, and a consistent theme.

## 🚀 Features

- **Responsive Design**: Fully responsive and mobile-friendly
- **Smooth Animations**: Framer Motion animations throughout
- **Modern UI**: Clean, professional design with dark theme
- **Interactive Sections**: Hover effects and smooth scrolling
- **Contact Form**: Working contact form with email integration
- **Resume Download**: Direct PDF download functionality
- **SEO Optimized**: Meta tags and structured data

## 📋 Sections

1. **Header & Navigation**: Sticky navbar with smooth scroll
2. **About Section**: Introduction with resume download button
3. **Experience Section**: Timeline layout with work history
4. **Projects Section**: Grid layout with project showcases
5. **Skills Section**: Technical skills with progress bars
6. **Freelance Section**: Contact form for project inquiries
7. **Contact Section**: Footer with social media links

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Email**: Nodemailer
- **Language**: TypeScript

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd vznu-port
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Configure your email settings in `.env.local`:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your.email@gmail.com
SMTP_PASS=your_app_password
CONTACT_EMAIL=your.email@gmail.com
```

5. Add your resume file:
   - Place your resume as `public/resume.pdf`

6. Run the development server:
```bash
npm run dev
```

7. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📧 Email Setup

For the contact form to work, you need to configure email settings:

### Gmail Setup
1. Enable 2-factor authentication on your Gmail account
2. Generate an app password:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a password for "Mail"
3. Use this app password as `SMTP_PASS` in your `.env.local`

### Other Email Providers
Update the SMTP settings in `.env.local` according to your email provider's documentation.

## 🎨 Customization

### Personal Information
Update the following files with your information:

1. **Personal Details**: 
   - `components/sections/About.tsx` - Name, description, stats
   - `components/Navigation.tsx` - Name in navbar
   - `app/layout.tsx` - Meta tags and title

2. **Experience**: 
   - `components/sections/Experience.tsx` - Work history

3. **Projects**: 
   - `components/sections/Projects.tsx` - Project details and links

4. **Skills**: 
   - `components/sections/Skills.tsx` - Technical skills and levels

5. **Contact Information**: 
   - `components/sections/Contact.tsx` - Social links and contact details
   - `components/sections/Freelance.tsx` - Pricing and services

### Styling
- Colors: Modify `tailwind.config.js` for color scheme
- Fonts: Update `app/globals.css` for typography
- Animations: Customize in individual component files

### Images
- Replace placeholder images in the Projects section
- Add your profile photo in the About section
- Update the resume file in `public/resume.pdf`

## 📱 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms
The site can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform

## 🔧 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `SMTP_HOST` | SMTP server hostname | Yes |
| `SMTP_PORT` | SMTP server port | Yes |
| `SMTP_USER` | Email username | Yes |
| `SMTP_PASS` | Email password/app password | Yes |
| `CONTACT_EMAIL` | Email to receive contact form submissions | Yes |

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](../../issues).

## 📞 Support

If you have any questions or need help with setup, feel free to reach out:

- Email: your.email@example.com
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourusername)
- GitHub: [Your GitHub](https://github.com/yourusername)

---

⭐ Star this repository if you found it helpful!
