# 🤖 Cursor AI Integration Prompts

## Essential Prompts for EFTDM Development

This document contains a comprehensive collection of prompts optimized for Cursor AI to accelerate development using the EFTDM methodology.

## 🚀 Project Initialization Prompts

### Create Project Structure
```
Create a complete Vue.js 3 + TypeScript project structure with:
- Vite configuration
- TailwindCSS setup
- Pinia state management
- Vue Router
- Component architecture (ui/, forms/, layout/, business/)
- Type definitions
- ESLint and Prettier configuration
- Test setup with Vitest
```

### Backend Setup
```
Create a Node.js + Express + TypeScript backend with:
- Express server configuration
- Middleware setup (cors, helmet, morgan, compression)
- Authentication with JWT
- Database integration with Knex.js
- Error handling middleware
- Logging with Winston
- API route structure
- Type definitions
- Test setup with Jest
```

## 📋 Documentation Prompts

### Generate FSD
```
Create a comprehensive Functional Specification Document for [PROJECT_NAME] including:
- Project overview and goals
- User personas and stories
- Functional requirements
- Business rules
- UI/UX requirements
- Non-functional requirements
- Acceptance criteria
- Risk assessment
- Timeline and milestones
```

### Generate TSD
```
Create a detailed Technical Specification Document for [PROJECT_NAME] including:
- System architecture
- Technology stack decisions
- Database design
- API specifications
- Security requirements
- Performance requirements
- Testing strategy
- Deployment specifications
```

### Generate RTSD
```
Create a Refined Technical Specification Document integrating:
- UI/UX design specifications
- Component architecture
- State management patterns
- API integration details
- Performance optimizations
- Accessibility requirements
- Responsive design specifications
```

## 🎨 Frontend Development Prompts

### Component Generation
```
Create a [COMPONENT_NAME] Vue component with:
- TypeScript interfaces
- Props and emits definitions
- Composition API setup
- TailwindCSS styling
- Accessibility features
- Error handling
- Loading states
- Unit tests
```

### Page Component
```
Create a [PAGE_NAME] page component with:
- Vue Router integration
- State management with Pinia
- API service integration
- Form validation
- Error handling
- Loading states
- Responsive design
- SEO optimization
```

### Form Component
```
Create a [FORM_NAME] form component with:
- Zod validation schema
- Form state management
- Error display
- Success feedback
- Accessibility features
- Responsive design
- Submit handling
- Reset functionality
```

## 🔧 Backend Development Prompts

### API Controller
```
Create a [ENTITY] controller with:
- CRUD operations
- Input validation
- Error handling
- Response formatting
- Authentication middleware
- Authorization checks
- Logging
- TypeScript types
```

### Service Layer
```
Create a [ENTITY] service with:
- Business logic implementation
- Database operations
- Data validation
- Error handling
- Caching strategies
- Performance optimization
- TypeScript interfaces
- Unit tests
```

### Database Model
```
Create a [ENTITY] database model with:
- Knex.js migration
- Table schema definition
- Indexes and constraints
- Relationships
- Seed data
- Validation rules
- Performance optimization
```

## 🧪 Testing Prompts

### Unit Tests
```
Create comprehensive unit tests for [COMPONENT/SERVICE] including:
- Happy path scenarios
- Edge cases
- Error conditions
- Mock implementations
- Test coverage
- TypeScript types
- Jest/Vitest configuration
```

### Integration Tests
```
Create integration tests for [API_ENDPOINT] including:
- Authentication flow
- CRUD operations
- Error handling
- Response validation
- Database interactions
- Mock data setup
- Test cleanup
```

### E2E Tests
```
Create end-to-end tests for [USER_FLOW] including:
- User journey testing
- Cross-browser compatibility
- Mobile responsiveness
- Performance testing
- Accessibility testing
- Error scenarios
- Data persistence
```

## 🔒 Security Prompts

### Authentication
```
Implement secure authentication with:
- JWT token generation
- Password hashing with bcrypt
- Token validation middleware
- Session management
- Password reset flow
- Account lockout protection
- Rate limiting
- Security headers
```

### Authorization
```
Implement role-based authorization with:
- Permission checking
- Route protection
- Resource access control
- Admin panel security
- API endpoint protection
- Frontend route guards
- Component-level permissions
```

## 📊 Performance Prompts

### Frontend Optimization
```
Optimize [COMPONENT/PAGE] for performance with:
- Code splitting
- Lazy loading
- Image optimization
- Bundle size reduction
- Caching strategies
- Memory management
- Render optimization
- Performance monitoring
```

### Backend Optimization
```
Optimize [API/SERVICE] for performance with:
- Database query optimization
- Caching implementation
- Connection pooling
- Response compression
- Rate limiting
- Memory management
- Performance monitoring
- Load balancing
```

## 🚀 Deployment Prompts

### Docker Configuration
```
Create Docker configuration for [SERVICE] with:
- Multi-stage build
- Security hardening
- Performance optimization
- Health checks
- Environment configuration
- Volume management
- Network configuration
- Resource limits
```

### CI/CD Pipeline
```
Create GitHub Actions workflow with:
- Automated testing
- Code quality checks
- Security scanning
- Build optimization
- Deployment automation
- Environment management
- Rollback procedures
- Monitoring integration
```

## 🔧 Maintenance Prompts

### Code Review
```
Review [CODE_FILE] for:
- Code quality
- Performance issues
- Security vulnerabilities
- Best practices
- TypeScript compliance
- Test coverage
- Documentation
- Accessibility
```

### Refactoring
```
Refactor [CODE_FILE] to improve:
- Code readability
- Performance
- Maintainability
- Type safety
- Error handling
- Test coverage
- Documentation
- Best practices
```

## 📚 Documentation Prompts

### API Documentation
```
Generate comprehensive API documentation for [ENDPOINT] including:
- Request/response schemas
- Authentication requirements
- Error codes
- Examples
- Rate limiting
- Versioning
- Changelog
- Interactive examples
```

### Component Documentation
```
Create detailed documentation for [COMPONENT] including:
- Props and events
- Usage examples
- Styling options
- Accessibility features
- Performance notes
- Browser compatibility
- Migration guide
- Troubleshooting
```

## 🎯 Project-Specific Prompts

### E-commerce Features
```
Implement e-commerce functionality with:
- Product catalog
- Shopping cart
- Checkout process
- Payment integration
- Order management
- Inventory tracking
- Customer accounts
- Admin dashboard
```

### SaaS Features
```
Implement SaaS functionality with:
- Multi-tenancy
- Subscription management
- Billing integration
- User management
- Feature flags
- Analytics dashboard
- API rate limiting
- White-label options
```

### Mobile App Features
```
Implement mobile app features with:
- Responsive design
- Touch interactions
- Offline support
- Push notifications
- Camera integration
- Geolocation
- Performance optimization
- App store compliance
```

## 🔄 Workflow Prompts

### Daily Development
```
Start daily development session with:
- Review yesterday's work
- Plan today's tasks
- Set up development environment
- Run tests
- Check for updates
- Review code quality
- Update documentation
- Commit changes
```

### Feature Development
```
Develop [FEATURE_NAME] following EFTDM:
- Create user stories
- Design API endpoints
- Implement backend logic
- Create frontend components
- Add tests
- Update documentation
- Deploy to staging
- Conduct QA testing
```

### Bug Fixing
```
Fix [BUG_DESCRIPTION] with:
- Reproduce the issue
- Identify root cause
- Write failing test
- Implement fix
- Verify solution
- Update documentation
- Deploy fix
- Monitor for regressions
```

## 📈 Advanced Prompts

### AI Integration
```
Integrate AI features with:
- OpenAI API integration
- Prompt engineering
- Response handling
- Error management
- Rate limiting
- Caching strategies
- User feedback
- Performance monitoring
```

### Real-time Features
```
Implement real-time features with:
- WebSocket connections
- Event handling
- State synchronization
- Error recovery
- Connection management
- Performance optimization
- Security considerations
- Scalability planning
```

---

## 💡 Tips for Using These Prompts

1. **Customize**: Replace placeholders with your specific project details
2. **Iterate**: Refine prompts based on results
3. **Combine**: Use multiple prompts for complex features
4. **Context**: Provide relevant project context
5. **Specificity**: Be specific about requirements and constraints

## 🔗 Related Resources

- [EFTDM Methodology](./EFTDM_METHODOLOGY.md)
- [Development Setup](./DEVELOPMENT_SETUP.md)
- [Code Standards](./CODE_STANDARDS.md)
- [Testing Guidelines](./TESTING_GUIDELINES.md)

---

**Version**: 1.0.0  
**Last Updated**: [Current Date]  
**Next Review**: [Next Review Date]
