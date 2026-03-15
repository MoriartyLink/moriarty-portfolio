# System OS Portfolio

A cyberpunk-inspired portfolio website built with Next.js, featuring a terminal interface aesthetic with Matrix green styling and CRT effects.

## Features

- **System Boot Sequence**: 2-second animated boot process with progress bar
- **Terminal Dashboard**: Bento-style grid layout with window-like components
- **CRT Effects**: Scanlines and flicker animations for authentic retro display
- **Typewriter Animations**: Sequential text rendering for all content
- **Framer Motion**: Smooth transitions and hover effects
- **Glitch Effects**: Interactive hover animations on buttons and links
- **Responsive Design**: Adapts to different screen sizes

## Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling with custom theme
- **Framer Motion** - Animation library
- **JetBrains Mono** - Monospace font for terminal aesthetic

## System Architecture

The application operates in two main states:

1. **Booting State**: Shows system initialization with progress bar
2. **Active State**: Displays the main terminal dashboard

### Components Structure

```
src/
├── components/
│   ├── BootSequence.tsx      # Initial boot animation
│   ├── CRTOverlay.tsx        # Scanline and flicker effects
│   ├── TerminalWindow.tsx    # Reusable window component
│   ├── TypewriterText.tsx    # Text animation component
│   ├── WhoAmI.tsx           # Personal information section
│   ├── Projects.tsx         # Project showcase section
│   └── Connect.tsx          # Contact links section
└── app/
    ├── page.tsx             # Main application logic
    └── globals.css          # Global styles and CRT effects
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customization

### Color Scheme
- **Matrix Green**: `#00FF41`
- **True Black**: `#000000`

### Typography
- **Primary Font**: JetBrains Mono
- **Fallback**: Fira Code, monospace

### Animation Timing
- **Boot Sequence**: 2 seconds
- **Window Scale**: 0.9 → 1.0 on load
- **Typewriter Speed**: 50ms per character
- **CRT Scanline**: 8s linear infinite

## Deployment

The easiest way to deploy is using the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
