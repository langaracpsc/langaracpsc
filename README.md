# Langara CPSC Club Website

The official website for the Langara Computer Science Club. Built with modern web technologies to serve as a central hub for club information, events, and resources.

## Stack

### Core
- Vite + React + TypeScript
- Tailwind CSS + ShadCN Components
- Zustand for state management
- React Router for navigation
- Framer Motion for animations

### Infrastructure
- Docker & Docker Compose
- Nginx
- GitHub Actions

## Getting Started

### Prerequisites
- Node.js >= 18
- Docker & Docker Compose (for containerized development)

### Local Development
```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

### Docker Development
```bash
# Build and start containers
docker-compose up -d

# Watch logs
docker-compose logs -f

# Tear down
docker-compose down
```

## Project Structure
```
src/
├── components/
│   ├── ui/          # shadcn components
│   ├── layout/      # layout components
│   ├── about/       # about page components
│   └── events/      # events page components
├── pages/           # page components
├── store/           # zustand stores
├── api/             # api integration
├── types/           # typescript types
├── utils/           # helper functions
├── hooks/           # custom hooks
├── styles/          # global styles
│   └── globals.css
├── lib/            # shared configuration
└── assets/
    ├── images/     # image assets
    └── icons/      # icon assets
```

## Features
- Dark theme with orange accent
- Responsive design
- Interactive event calendar
- Team member profiles
- Event registration integration
- Course planning tools
- Resource library

## Contributing
1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Commands
```bash
npm run dev         # Start development server
npm run build       # Build for production
npm run preview     # Preview production build
npm run lint        # Run ESLint
npm run lint:fix    # Fix ESLint errors
```

## License
MIT

## Authors
Langara Computer Science Club