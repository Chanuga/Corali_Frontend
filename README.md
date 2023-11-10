# Corali task app frontend

This is the frontend of the corali task application

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development](#development)
- [Folder Structure](#folder-structure)
- [Deployment](#deployment)
- [Built With](#built-with)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Getting Started

### Prerequisites

Ensure you have the following installed on your local machine:

- [Node.js](https://nodejs.org/) - JavaScript runtime
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) - Package managers for Node.js

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Chanuga/Corali_Frontend
   ```

2. Change into the project directory:

   ```bash
   cd your-project
   ```

3. Install dependencies:

   ```bash
   npm install   # or yarn install
   ```

### Development

To start the development server:

```bash
npm run dev   # or yarn dev
```

This will open your application at [http://localhost:3000](http://localhost:3000).

## Folder Structure

```
src/
|-- components/
    |--ActionButtons.jsx
    |--AddTaskModal.jsx
    |--DataContent.jsx
    |--MainContent.jsx
    |--TopNavigation.jsx
|-- utilities/
    |--apis/
        |--apiEndPointPaths.js
        |--apiRequests.js
    |--configs/
        |--globleValues.js
|-- App.jsx
|-- index.jsx
```

## Deployment

```bash
npm run build   # or yarn build
```

The build artifacts will be in the `dist/` directory.

## Built With

- [React](https://reactjs.org/) - JavaScript library for building user interfaces.
- [Vite](https://vitejs.dev/) - Fast frontend development setup.
