# Bella Vista Italian Restaurant Website

A modern, elegant restaurant website featuring an AI-powered booking assistant built with Next.js, TypeScript, Tailwind CSS, and Anthropic's Claude AI.

🌐 **Live Site:** [bella-vista.xyz](https://bella-vista.xyz)

## Features

- **Stunning Hero Section** - Full-screen hero with beautiful food imagery from Unsplash
- **About Section** - Restaurant story and chef profile with elegant design
- **Menu Highlights** - Interactive menu cards showcasing signature dishes
- **Hours & Location** - Complete contact information and opening hours
- **Reservation CTA** - Compelling call-to-action sections throughout the site
- **AI Booking Chatbot** - Intelligent chatbot powered by Claude AI that can:
  - Answer questions about the menu and ingredients
  - Provide information about hours, location, and amenities
  - Handle dietary restrictions and special requests
  - Take complete reservation details conversationally
  - Assist with private dining inquiries
- **Mobile-First Design** - Fully responsive across all devices
- **Smooth Animations** - Beautiful transitions using Framer Motion
- **Professional Design** - Warm color palette (burgundy, gold, cream) perfect for an upscale Italian restaurant

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **AI**: Anthropic Claude API
- **Images**: Next.js Image Optimization with Unsplash

## Getting Started

### Prerequisites

- Node.js 18+ installed
- An Anthropic API key ([Get one here](https://console.anthropic.com/))

### Installation

1. **Clone or download this repository**

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory:
   ```bash
   cp .env.example .env.local
   ```

   Then add your Anthropic API key:
   ```env
   ANTHROPIC_API_KEY=your_actual_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

## Deployment

### Deploy to Vercel (Recommended)

1. **Push your code to GitHub**

2. **Import your repository on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository

3. **Add environment variables**
   - In your Vercel project settings, go to "Environment Variables"
   - Add `ANTHROPIC_API_KEY` with your API key

4. **Deploy**
   - Vercel will automatically build and deploy your site
   - Your site will be live at `your-project.vercel.app`

5. **Add Custom Domain (Optional)**
   - In Vercel project settings, go to "Domains"
   - Add your custom domain: `bella-vista.xyz`
   - Follow Vercel's instructions to configure DNS records in Namecheap
   - Vercel will automatically provision SSL certificate

### Other Deployment Options

This is a standard Next.js application and can be deployed to:
- Netlify
- AWS Amplify
- Cloudflare Pages
- Any Node.js hosting platform

## Customization

### Changing Restaurant Information

Edit the following files to customize for your restaurant:

1. **Restaurant Name & Branding**
   - `components/Hero.tsx` - Logo/name in hero
   - `components/Footer.tsx` - Footer branding
   - `app/layout.tsx` - Site metadata

2. **Contact Information**
   - `components/Hero.tsx` - Address and phone
   - `components/HoursLocation.tsx` - Full contact details
   - `app/api/chat/route.ts` - Chatbot system prompt

3. **Menu Items**
   - `components/Menu.tsx` - Update the `menuItems` array

4. **Opening Hours**
   - `components/HoursLocation.tsx` - Update the `hours` array
   - `app/api/chat/route.ts` - Update system prompt

5. **About Section**
   - `components/About.tsx` - Restaurant story and chef info

6. **Colors & Styling**
   - `tailwind.config.ts` - Color palette
   - `app/globals.css` - Global styles

### Changing Images

The site uses Unsplash images by default. To use your own images:

1. Add your images to the `public` folder
2. Update image paths in components:
   - `components/Hero.tsx`
   - `components/About.tsx`
   - `components/Menu.tsx`
   - `components/ReservationCTA.tsx`

### Customizing the Chatbot

Edit `app/api/chat/route.ts` to customize:
- Chatbot personality and tone
- Restaurant information
- Menu details
- Reservation process
- System prompts

## Project Structure

```
bella-vista/
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.ts          # Chatbot API endpoint
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Main page
├── components/
│   ├── About.tsx                 # About section
│   ├── Chatbot.tsx              # AI chatbot UI
│   ├── Footer.tsx               # Footer
│   ├── Hero.tsx                 # Hero section
│   ├── HoursLocation.tsx        # Hours & location
│   ├── Menu.tsx                 # Menu highlights
│   └── ReservationCTA.tsx       # Reservation CTA
├── public/                       # Static assets
├── .env.example                  # Environment variables template
├── next.config.ts               # Next.js configuration
├── tailwind.config.ts           # Tailwind configuration
├── package.json                 # Dependencies
└── README.md                    # This file
```

## Features in Detail

### AI Chatbot

The chatbot uses Claude 3.5 Sonnet and can:
- Understand natural language queries
- Provide detailed menu information
- Handle dietary restrictions (vegetarian, vegan, gluten-free)
- Take complete reservation details
- Answer questions about parking, dress code, private dining
- Maintain warm, professional Italian hospitality tone

### Responsive Design

- Mobile-first approach
- Optimized for all screen sizes
- Touch-friendly interactions
- Fast loading times

### Performance

- Next.js Image Optimization
- Code splitting
- Server-side rendering
- Optimized bundle size

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project was built by [Zane Priddle](https://zanepriddle.com).

## Support

For issues or questions:
- Open an issue on GitHub
- Contact: [Your contact information]

## Credits

- **Design & Development**: Zane Priddle
- **AI**: Anthropic Claude
- **Images**: Unsplash
- **Icons**: Heroicons
- **Fonts**: Google Fonts (Playfair Display, Inter)

---

Built with ❤️ for authentic Italian dining experiences.
