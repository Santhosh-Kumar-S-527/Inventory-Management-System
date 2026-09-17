# Inventory Management System

A simple Inventory Management System built using React and TypeScript. The project focuses on managing products with basic CRUD operations.

## Features

- Display all products
- Add a new product
- Update product details
- Delete a product
- Search products by name
- Filter products by category
- Form validation
- Responsive design

## Tech Stack

- React
- TypeScript
- Vite
- CSS
- HTML

## TypeScript Concepts Used

This project was built to practice and apply TypeScript concepts such as:

- Type aliases
- Interfaces
- Union types
- Literal types
- `typeof`
- `as const`
- `Omit`
- `Partial`
- Typed React props
- Typed `useState`
- Event types
- Type narrowing
- Array methods with typed data

## Project Structure

```text
src/
├── data/
│   └── products.ts
├── pages/
│   ├── Products.tsx
│   └── AddProduct.tsx
├── types/
│   └── product.ts
├── App.css
├── App.tsx
├── index.css
└── main.tsx
```

## Getting Started

1. Clone the repository:

    ```bash
    git clone https://github.com/Santhosh-Kumar-S-527/Inventory-Management-System.git
    ```

2. Navigate to the project:

    ```bash
    cd inventory_management_system
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Start the development server:

    ```bash
    npm run dev
    ```

The application will be available at the local URL shown in the terminal.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server. |
| `npm run build` | Type-check and build for production. |
| `npm run lint` | Run ESLint. |
| `npm run preview` | Preview the production build locally. |

## How It Works

Products are initially loaded from [`src/data/products.ts`](src/data/products.ts).

The product list is maintained in React state inside [`src/App.tsx`](src/App.tsx).

### Create

A new product is added to the product list with a generated ID.

### Update

The selected product is updated using its unique ID.

### Delete

The product is removed from the list using its unique ID.

### Search and Filter

The Products page filters the displayed products based on:

- Product name
- Product category

## Future Improvements

Possible future enhancements include:

- MongoDB database integration
- Node.js and Express backend
- REST API
- Persistent product storage
- Authentication and authorization
- Product images
- Inventory stock alerts

## Author

Santhosh Kumar S