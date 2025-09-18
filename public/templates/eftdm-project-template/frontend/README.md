# EFTDM Frontend

A modern Vue.js 3 application built with TypeScript and TailwindCSS following the EFTDM (Enhanced Fast-Track Development Methodology).

## 🚀 Features

- **Vue.js 3** with Composition API
- **TypeScript** for type safety
- **TailwindCSS** for utility-first styling
- **Pinia** for state management
- **Vue Router** for navigation
- **Axios** for API communication
- **Vue Toastification** for notifications
- **Headless UI** for accessible components
- **Heroicons** for consistent iconography

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/            # Base UI components (Button, Input, etc.)
│   ├── forms/         # Form-specific components
│   ├── layout/        # Layout components (Header, Footer, etc.)
│   └── business/      # Business logic components
├── views/             # Page components
├── stores/            # Pinia stores for state management
├── services/          # API services
├── utils/             # Utility functions
├── types/             # TypeScript type definitions
├── assets/            # Static assets (CSS, images, etc.)
└── router/            # Vue Router configuration
```

## 🎨 Design System

The project uses a comprehensive design system with:

- **Color Palette**: Primary (blue) and Secondary (green) color schemes
- **Typography**: Inter font family with consistent sizing
- **Spacing**: TailwindCSS spacing scale
- **Components**: Reusable UI components with consistent styling

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test` - Run tests
- `npm run lint` - Lint code
- `npm run type-check` - Type check TypeScript

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_BASE_URL=http://localhost:3000/api
VITE_APP_NAME=EFTDM Project
```

## 🧪 Testing

The project includes:

- **Unit Tests**: Component testing with Vitest
- **E2E Tests**: End-to-end testing with Playwright
- **Type Checking**: TypeScript compilation checks

## 📱 Responsive Design

The application is built mobile-first with responsive breakpoints:

- **Mobile**: 320px - 640px
- **Tablet**: 640px - 1024px
- **Desktop**: 1024px - 1280px
- **Large Desktop**: 1280px+

## 🔒 Security

- Input validation and sanitization
- XSS protection
- CSRF protection
- Secure authentication with JWT tokens

## 🚀 Deployment

The application can be deployed to:

- **Vercel**: Zero-config deployment
- **Netlify**: Static site hosting
- **AWS S3**: Static website hosting
- **Docker**: Containerized deployment

## 📚 Documentation

- [Vue.js 3 Documentation](https://vuejs.org/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [TailwindCSS Documentation](https://tailwindcss.com/)
- [Pinia Documentation](https://pinia.vuejs.org/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.
