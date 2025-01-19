# Shopping Cart Demo

This is a **Shopping Cart Demo** built using [Next.js](https://nextjs.org), a modern React framework. The project demonstrates a simple shopping cart functionality with product listing, add-to-cart feature, and a dynamic cart count displayed in the header. It includes multiple branches to showcase different features and implementation approaches.

## Branch Overview

This project includes multiple branches to demonstrate different features and improvements step-by-step:

1. **Basic**(current):
   - Basic shopping cart functionality.
   - Product listing and dynamic cart count in the header.
2. **Prop Drilling**:
   - Adds a product details page.
   - Demonstrates prop drilling to update the cart from the product details page.
3. **Redux Integration**:
   - Introduces Redux for global state management.
   - Includes a checkout page with detailed cart items.
4. **Modularization**:
   - Refactors the `addToCart` functionality into a reusable component.
   - Adds a shared **Add to Cart Button** used across the project.
   - Adds a checkout page.

Switch between these branches to learn about incremental improvements in the project. Use the following command to switch branches:

git checkout branch-name

# Features
Product List: Displays a list of products with their names, prices, and an "Add to Cart" button.
Dynamic Shopping Cart: The cart count updates dynamically as products are added.
Modular Components: Reusable Header and ProductCard components for better code organization.

# Getting Started
To get started with this project, clone the repository and install dependencies.

Install Dependencies
Run the following command to install dependencies:

npm install

Run Development Server
Start the development server with:

npm run dev

Open http://localhost:3000 in your browser to see the app.

# Project Structure
![image](https://github.com/user-attachments/assets/d255b7dc-d60b-47f8-845d-66c1759d608c)

# Usage
Add to Cart: Click on the "Add to Cart" button for any product to increase the cart count.

Dynamic Cart Count: The cart count in the header updates automatically when products are added.

# Learn More
To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - An interactive Next.js tutorial.
