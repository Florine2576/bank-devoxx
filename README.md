# 🏦 Banking Application Frontend

[![Vue.js](https://img.shields.io/badge/Vue.js-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)](https://vuejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Cypress](https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white)](https://www.cypress.io/)

This project serves as a frontend for a banking application demo. It provides user interfaces for viewing account information, transactions, and managing banking operations.

## 🛠️ Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)

## 📥 Installation

Clone the repository and install dependencies:

```bash
# Clone the repository
git clone <repository-url>

# Navigate to the project directory
cd bank-front

# Install dependencies
npm install
```

## 🚀 Running the Application

To start the development server:

```bash
npm run dev
```

This will launch the application in development mode. Open your browser and navigate to the URL shown in the terminal (typically http://localhost:5173).

## 🧪 Testing

The project includes two types of tests:

### End-to-End Tests (Cypress)

Run Cypress tests in headless mode:

```bash
npm run test:e2e:headless
```

### Hexagonal Architecture Tests

Verify that the code follows hexagonal architecture principles:

```bash
npm run test:unit
```

## 🔄 Backend Repository

The backend for this application can be found at:
[https://github.com/cvirieux/bank-devoxx-back](https://github.com/cvirieux/bank-devoxx-back)
