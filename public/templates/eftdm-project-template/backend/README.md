# EFTDM Backend

A modern Node.js backend built with Express, TypeScript, and PostgreSQL following the EFTDM (Enhanced Fast-Track Development Methodology).

## 🚀 Features

- **Express.js** with TypeScript
- **PostgreSQL** database with Knex.js query builder
- **JWT Authentication** with bcrypt password hashing
- **Input Validation** with Joi and express-validator
- **Security** with Helmet, CORS, and rate limiting
- **Logging** with Winston
- **Error Handling** with centralized error middleware
- **API Documentation** ready for Swagger integration

## 📦 Installation

```bash
# Install dependencies
npm install

# Copy environment variables
cp env.example .env

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🏗️ Project Structure

```
src/
├── controllers/        # Request handlers
├── services/          # Business logic
├── models/            # Data models
├── middleware/        # Custom middleware
├── routes/            # API routes
├── utils/             # Utility functions
├── config/            # Configuration files
├── types/             # TypeScript type definitions
└── tests/             # Test files
```

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build TypeScript to JavaScript
- `npm start` - Start production server
- `npm test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage
- `npm run lint` - Lint code
- `npm run lint:fix` - Fix linting issues

### Environment Variables

Create a `.env` file with the following variables:

```env
NODE_ENV=development
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_NAME=eftdm_db
DB_USER=postgres
DB_PASSWORD=password
JWT_SECRET=your-super-secret-jwt-key
JWT_EXPIRES_IN=24h
FRONTEND_URL=http://localhost:5173
```

## 🗄️ Database

### Setup

```bash
# Install PostgreSQL
# Create database
createdb eftdm_db

# Run migrations
npm run db:migrate

# Seed database
npm run db:seed
```

### Database Scripts

- `npm run db:migrate` - Run database migrations
- `npm run db:rollback` - Rollback last migration
- `npm run db:seed` - Seed database with sample data

## 🔒 Security Features

- **Helmet.js** for security headers
- **CORS** configuration
- **Rate limiting** to prevent abuse
- **JWT authentication** with secure tokens
- **Password hashing** with bcrypt
- **Input validation** and sanitization
- **SQL injection** prevention with parameterized queries

## 📡 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user
- `GET /api/auth/me` - Get current user
- `PUT /api/auth/profile` - Update user profile
- `PUT /api/auth/change-password` - Change password

### Users
- `GET /api/users` - Get all users (admin only)
- `GET /api/users/:id` - Get user by ID
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user (admin only)

### Health Check
- `GET /health` - Health check endpoint
- `GET /api/test` - API test endpoint

## 🧪 Testing

The project includes comprehensive testing:

- **Unit Tests**: Service and utility function tests
- **Integration Tests**: API endpoint tests
- **Test Coverage**: Coverage reporting with Jest

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## 📊 Logging

Logging is configured with Winston:

- **Error logs**: Written to `logs/error.log`
- **Combined logs**: Written to `logs/combined.log`
- **Console output**: In development mode
- **Structured logging**: JSON format in production

## 🚀 Deployment

### Docker Deployment

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

### Environment-Specific Configurations

- **Development**: Hot reload, detailed logging
- **Production**: Optimized build, minimal logging
- **Testing**: Test database, mock services

## 📚 API Documentation

API documentation can be generated using Swagger/OpenAPI:

```bash
# Install swagger dependencies
npm install swagger-jsdoc swagger-ui-express

# Generate documentation
npm run docs:generate
```

## 🔧 Configuration

### Database Configuration

The application supports multiple database configurations:

- **PostgreSQL** (default)
- **MySQL** (with minor changes)
- **SQLite** (for development)

### Security Configuration

- JWT secret key management
- CORS origin configuration
- Rate limiting settings
- Password complexity requirements

## 📈 Performance

### Optimization Features

- **Compression** middleware for response compression
- **Connection pooling** for database connections
- **Caching** strategies for frequently accessed data
- **Rate limiting** to prevent abuse

### Monitoring

- Health check endpoints
- Performance metrics
- Error tracking
- Request logging

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Ensure all tests pass
6. Submit a pull request

## 📄 License

This project is licensed under the MIT License.
