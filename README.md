# 🛒 MercadoLibre Challenge

[![Node.js](https://img.shields.io/badge/Node.js-18.17.0-green.svg)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.1+-blue.svg)](https://www.typescriptlang.org/)
[![Docker](https://img.shields.io/badge/Docker-Ready-blue.svg)](https://www.docker.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

> **Full-stack e-commerce product detail page** inspired by MercadoLibre, built with modern technologies and clean architecture principles.

## 📋 Table of Contents

- [Overview](#-overview)
- [Architecture](#-architecture)
- [Tech Stack](#-tech-stack)
- [Features](#-features)
- [Quick Start](#-quick-start)
- [Development](#-development)
- [Testing](#-testing)
- [API Documentation](#-api-documentation)
- [Deployment](#-deployment)
- [Contributing](#-contributing)

## 🎯 Overview

This project implements a **product detail page** that replicates the core functionality and user experience of MercadoLibre's product pages. Built with **Hexagonal Architecture** principles, it demonstrates modern full-stack development practices, clean code, and comprehensive testing.

### Key Highlights

- 🏗️ **Clean Architecture**: Hexagonal (Ports & Adapters) pattern for maintainable code
- 🧪 **Test-Driven**: 80%+ code coverage with meaningful tests
- 📱 **Responsive Design**: Mobile-first approach matching MercadoLibre's UX
- 🐳 **Container Ready**: Docker setup for consistent development and deployment
- 🚀 **Production Ready**: CI/CD pipeline with automated testing and deployment

## 🏛️ Architecture

### Backend - Hexagonal Architecture

```
┌─────────────────────────────────────────────────┐
│                Infrastructure                    │  ← Adapters (HTTP, DB, External APIs)
│  ┌─────────────────────────────────────────────┐ │
│  │              Application                    │ │  ← Use Cases & Business Logic
│  │  ┌─────────────────────────────────────────┐│ │
│  │  │            Domain                       ││ │  ← Entities & Business Rules
│  │  │                                         ││ │
│  │  └─────────────────────────────────────────┘│ │
│  └─────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────┘
```

### Frontend - Component Architecture

```
src/
├── components/
│   ├── ui/              # Reusable UI components (Button, Badge, etc.)
│   ├── product/         # Product-specific components
│   └── layout/          # Layout components (Header, Footer)
├── pages/
│   └── products/        # Next.js pages
├── hooks/               # Custom React hooks
├── services/            # API communication layer
└── utils/               # Utility functions
```

## 🛠️ Tech Stack

### Backend

| Technology     | Version | Purpose                              |
| -------------- | ------- | ------------------------------------ |
| **Node.js**    | 18.17.0 | Runtime environment                  |
| **TypeScript** | 5.1+    | Type safety and developer experience |
| **Express.js** | 4.18+   | Web framework for REST API           |
| **Jest**       | 29.6+   | Testing framework                    |

### Frontend

| Technology      | Version | Purpose                      |
| --------------- | ------- | ---------------------------- |
| **Next.js**     | 14.0+   | React framework with SSR/SSG |
| **React**       | 18.0+   | UI library                   |
| **TypeScript**  | 5.1+    | Type safety                  |
| **TailwindCSS** | 3.3+    | Utility-first CSS framework  |
| **React Query** | 4.0+    | Server state management      |

### DevOps & Tools

| Technology         | Purpose                         |
| ------------------ | ------------------------------- |
| **Docker**         | Containerization                |
| **Docker Compose** | Local development orchestration |
| **Prettier**       | Code formatting                 |


## ✨ Features

### Product Detail Page

- [ ] 🖼️ **Image Gallery**: Interactive carousel with zoom functionality
- [ ] 📝 **Product Information**: Title, description, specifications
- [ ] 💰 **Dynamic Pricing**: Price display with discounts and currency formatting
- [ ] 💳 **Payment Methods**: Visual display of available payment options
- [ ] 👤 **Seller Information**: Reputation, location, and contact details
- [ ] ⭐ **Reviews & Ratings**: Customer feedback and scoring system
- [ ] 📦 **Stock & Availability**: Real-time inventory status
- [ ] 🚚 **Shipping Information**: Costs, delivery time, and options

### API Features

- [ ] 🔍 **Product Retrieval**: GET `/api/v1/products/:id`
- [ ] 🏥 **Health Monitoring**: GET `/health`
- [ ] 📚 **API Documentation**: Interactive Swagger UI
- [ ] 🛡️ **Error Handling**: Consistent error responses
- [ ] 📊 **Request Logging**: Structured logging for monitoring

### Quality Assurance

- [ ] 🧪 **Unit Tests**: Domain and business logic testing
- [ ] 🔗 **Integration Tests**: API endpoint testing
- [ ] 📱 **E2E Tests**: Complete user flow testing
- [ ] 📈 **Coverage Reports**: 80%+ code coverage target
- [ ] 🔍 **Type Safety**: Full TypeScript coverage

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18.17.0+ (use `nvm use` for correct version)
- **Docker Desktop** (for containerized development)
- **Git** (version control)

### Option 1: Docker (Recommended)

```bash
# Clone repository
git clone https://github.com/Sydeck/mercadolibre-challenge.git
cd mercadolibre-challenge

# Use correct Node version
nvm use

# Start application with Docker
docker-compose up --build
```

### Option 2: Manual Setup

```bash
# Clone repository
git clone https://github.com/Sydeck/mercadolibre-challenge.git
cd mercadolibre-challenge

# Backend setup
cd backend
npm install
npm run dev

# Frontend setup (in new terminal)
cd frontend
npm install
npm run dev
```

### 🌐 Access the Application

| Service               | URL                          | Description            |
| --------------------- | ---------------------------- | ---------------------- |
| **Frontend**          | http://localhost:3000        | Product detail page    |
| **Backend API**       | http://localhost:3001        | REST API endpoints     |
| **API Documentation** | http://localhost:3001/docs   | Interactive Swagger UI |
| **Health Check**      | http://localhost:3001/health | Service health status  |

## 💻 Development

### Project Structure

```
mercadolibre-challenge/
├── 📁 backend/                 # Node.js + TypeScript + Express
│   ├── 📁 src/
│   │   ├── 📁 domain/          # 🎯 Business entities and rules
│   │   │   ├── entities/       # Product, Seller, etc.
│   │   │   ├── value-objects/  # Money, ProductId, etc.
│   │   │   └── exceptions/     # Domain-specific errors
│   │   ├── 📁 application/     # 🔄 Use cases and business logic
│   │   │   ├── ports/          # Interfaces (inbound/outbound)
│   │   │   ├── use-cases/      # Business operations
│   │   │   └── dto/            # Data transfer objects
│   │   └── 📁 infrastructure/  # 🔌 External integrations
│   │       ├── adapters/       # HTTP, Database, External APIs
│   │       └── config/         # Configuration and DI
│   └── 📁 tests/               # Unit, integration, fixtures
├── 📁 frontend/                # Next.js + TypeScript + TailwindCSS
│   ├── 📁 src/
│   │   ├── 📁 components/      # React components
│   │   │   ├── ui/             # Reusable UI components
│   │   │   ├── product/        # Product-specific components
│   │   │   └── layout/         # Layout components
│   │   ├── 📁 pages/           # Next.js pages and routing
│   │   ├── 📁 hooks/           # Custom React hooks
│   │   ├── 📁 services/        # API communication
│   │   └── 📁 utils/           # Utility functions
|   |   └── 📁 types/           # TypeScript type definitions
│   └── 📁 public/              # Static assets
├── 📁 docs/                    # 📚 Documentation
└── 📄 docker-compose.yml       # 🐳 Container orchestration
```

### Development Commands

```bash
# Backend development
cd backend
npm run dev           # Start development server with hot reload
npm run test:unit     # Run tests
npm run test:watch    # Run tests in watch mode
npm run test:coverage # Run tests with coverage report


# Frontend development
cd frontend
npm run dev           # Start development server
npm run build         # Build for production
npm run test:unit     # Run tests
npm run test:watch    # Run tests in watch mode
npm run test:coverage # Run tests with coverage report
```

### Environment Variables

#### Backend (.env)

```bash
NODE_ENV=development
PORT=3001

```

#### Frontend (.env.local)

```bash
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXT_PUBLIC_APP_NAME=MercadoLibre Challenge
```

## 🧪 Testing

### Testing Strategy

Our testing approach follows the **testing pyramid** principle:

```
    🔺 E2E Tests (5%)
   🔺🔺 Integration Tests (25%)
🔺🔺🔺🔺 Unit Tests (70%)
```

### Running Tests

```bash
# Backend tests
cd backend
npm test                    # Run all tests
npm run test:unit          # Run unit tests only
npm run test:integration   # Run integration tests only
npm run test:coverage      # Generate coverage report

# Frontend tests
cd frontend
npm test                   # Run all tests
npm run test:watch         # Watch mode
npm run test:coverage      # Generate coverage report

```

### Coverage Requirements

- **Minimum Coverage**: 80%
- **Domain Layer**: 95%+ (business logic)
- **Application Layer**: 90%+ (use cases)
- **Infrastructure Layer**: 70%+ (adapters)

## 📖 API Documentation

### Core Endpoints

| Method | Endpoint               | Description         | Response                   |
| ------ | ---------------------- | ------------------- | -------------------------- |
| `GET`  | `/health`              | Health check        | `200 OK`                   |
| `GET`  | `/api/v1/products/:id` | Get product details | `200 OK` / `404 Not Found` |

### Example Response

```json
{
  "data": {
    "id": "MLA123456789",
    "title": "Samsung Galaxy A54 5G 256 GB",
    "description": "Latest smartphone with advanced features...",
    "price": {
      "amount": 439.99,
      "currency": "USD",
      "discount": 12
    },
    "images": ["https://http2.mlstatic.com/image1.webp", "https://http2.mlstatic.com/image2.webp"],
    "seller": {
      "id": "SELLER123",
      "name": "TechStore Official",
      "reputation": 4.8,
      "isOfficialStore": true
    },
    "shipping": {
      "cost": 0,
      "isFree": true,
      "estimatedDays": "2-3 días"
    },
    "availability": {
      "stock": 15,
      "available": true
    }
  },
  "meta": {
    "timestamp": "2025-07-18T15:30:00Z",
    "version": "1.0"
  }
}
```

### Environment Setup

1. **Backend Environment Variables**:

   ```bash
   NODE_ENV=production
   PORT=3001
   ```

2. **Frontend Environment Variables**:
   ```bash
   NEXT_PUBLIC_API_URL=https://your-backend-url.com
   ```

## 🤝 Contributing

### Development Workflow

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/amazing-feature`
3. **Commit** changes: `git commit -m 'feat: add amazing feature'`
4. **Push** to branch: `git push origin feature/amazing-feature`
5. **Open** a Pull Request

### Commit Convention

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes
- `refactor:` Code refactoring
- `test:` Adding or updating tests
- `chore:` Maintenance tasks

### Code Quality

- **ESLint + Prettier**: Automatic code formatting and linting
- **TypeScript**: Strict type checking enabled
- **Husky**: Pre-commit hooks for quality checks
- **Jest**: Comprehensive testing suite

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙋‍♂️ Support

For questions, issues, or contributions:

- **GitHub Issues**: [Create an issue](https://github.com/Sydeck/mercadolibre-challenge/issues)
- **Documentation**: Check the [docs/](docs/) directory
- **Email**: [your.email@example.com](mailto:your.email@example.com)

---

<div align="center">

**Built with ❤️ for the MercadoLibre Technical Challenge**

[⭐ Star this repository](https://github.com/Sydeck/mercadolibre-challenge) if you found it helpful!

</div>
