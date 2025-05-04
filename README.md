# Test Task

## Project Overview

This project is an automated test suite built using **Cypress** for **end-to-end (E2E)** and **API testing**. It includes tests for a sample e-commerce website ([https://www.saucedemo.com](https://www.saucedemo.com)) and RESTful API endpoints ([https://jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com)).

---

## Features

- **UI Tests** – Verifies user interactions and workflows on the web interface.
- **API Tests** – Validates the functionality of REST API endpoints.
- **Reusable Configurations** – Centralized base URLs and environment variable management.
- **Custom Commands** – Simplifies repetitive tasks like login and form filling.

---

## Technologies Used

- **JavaScript** – Main programming language
- **Cypress** – E2E and API testing framework
- **Node.js** – Runtime environment

---

## Project Structure

```
test_task/
├── cypress.config.js               # Cypress configuration (baseUrl, env)
├── cypress/
│   └── e2e/
│       ├── ui-tests.cy.js         # UI test cases for saucedemo.com
│       └── api-test.cy.js         # API test cases for JSONPlaceholder
└── package.json                   # Dependencies and scripts
```

---

## Prerequisites

- **Node.js** v16 or higher
- **npm** v8 or higher

---

## Installation

```bash
# 1. Clone the repository
git clone <repository-url>

# 2. Navigate to the project directory
cd test_task

# 3. Install dependencies
npm install
```

---

## Running Tests

### UI Tests (in Cypress Test Runner)
```bash
npx cypress open
```

### API Tests (in headless mode)
```bash
npx cypress run --spec cypress/e2e/api-test.cy.js
```

---

## Custom Commands

- `cy.loginAsUser()` – Logs in using valid user credentials
- `cy.fillShippingInfo()` – Automatically fills in shipping information during checkout

---

## Environment Variables

- `baseUrl` – Base URL for UI tests: `https://www.saucedemo.com`
- `apiUrl` – Base URL for API tests: `https://jsonplaceholder.typicode.com`

---
