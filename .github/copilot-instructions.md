# EarendelFood - AI Agent Instructions

## Project Overview
EarendelFood is a React-based restaurant menu and food ordering application built with Vite. The application allows users to browse food items, add them to a cart, and manage their orders.

## Core Architecture

### Tech Stack
- React 18 with Vite
- React Router for navigation
- Bootstrap/React Bootstrap for UI
- Zod for schema validation
- js-cookie for cart persistence

### Key Components
1. **Context System**
   - Cart management via `Context/ContexCart.jsx`
   - Uses cookies for persistence (see `utils/CartCookies.jsx`)

2. **Views Structure**
   - `Views/Main.jsx` - Main landing page
   - `Views/LetterMenu.jsx` - Menu item display component
   - `Views/Cart.jsx` - Shopping cart management
   - `Views/Register.jsx` - User registration

3. **Data Management**
   - Food data stored in `public/data/FoodData.json`
   - Images organized by category in `public/img/Food{Category}/`

## Development Workflow

### Setup & Running
```bash
npm install  # Install dependencies
npm run dev  # Start development server
npm run build  # Create production build
```

### Project Conventions

1. **Component Patterns**
   - Use functional components with hooks
   - Context for global state management
   - Example: `LetterMenu.jsx` demonstrates standard component structure

2. **State Management**
   - Cart state managed through Context API
   - Persistent storage using cookies
   - See `CartProvider` in `ContexCart.jsx` for implementation

3. **Asset Organization**
   - Food images must be placed in category-specific folders under `public/img/`
   - Food data follows schema in `schemas/userSchema.jsx`

## Integration Points

1. **Cart System**
   - Add to cart: `AddCart` function from `CartContext`
   - Cart persistence: `CartCookies.jsx` utilities
   - Example usage in `LetterMenu.jsx`

2. **Data Loading**
   - Food data loaded from `FoodData.json`
   - Images referenced relative to `public/img/` directory

## Common Tasks

1. **Adding New Food Items**
   - Add image to appropriate category folder in `public/img/Food{Category}/`
   - Update `FoodData.json` with new item details
   - Ensure schema compliance with `userSchema.jsx`

2. **Modifying Cart Behavior**
   - Edit cart logic in `ContexCart.jsx`
   - Update persistence in `CartCookies.jsx`