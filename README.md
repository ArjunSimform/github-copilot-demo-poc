# User Management System

A modern User Management application built with **React**, **TypeScript**, and **Vite**. This app allows you to add, edit, and delete users, featuring form validation, responsive design, and a robust testing setup.

---

## Features

- **Add, Edit, Delete Users**: Manage users with fields for name, email, mobile, and city.
- **Form Validation**: Uses React Hook Form and Zod for type-safe validation.
- **Responsive UI**: Styled with Tailwind CSS for a clean, mobile-friendly interface.
- **Component-Based Architecture**: Modular React components for form and table.
- **Testing**: Integrated with Vitest and React Testing Library for unit and browser tests.
- **Code Quality**: ESLint and Prettier for consistent code style.

---

## Tech Stack

- **React** (19.x)
- **TypeScript** (5.x)
- **Vite** (7.x)
- **Tailwind CSS** (4.x)
- **React Hook Form** (7.x)
- **Zod** (4.x)
- **Vitest** (3.x)
- **React Testing Library**
- **ESLint** (9.x)
- **Prettier**

---

## Folder Structure

```
├── public/                # Static assets
├── src/
│   ├── App.tsx            # Main app component
│   ├── App.css            # App-specific styles
│   ├── index.css          # Global styles (includes Tailwind)
│   ├── main.tsx           # App entry point
│   ├── components/
│   │   ├── userForm.tsx   # User form component
│   │   └── userTable.tsx  # User table component
│   ├── assets/            # Images and icons
│   └── vite-env.d.ts      # Vite environment types
├── test/
│   └── userform.test.tsx  # Example test for App
├── index.html             # HTML template
├── package.json           # Project metadata and scripts
├── vite.config.ts         # Vite configuration
├── vitest.config.ts       # Vitest configuration
├── tsconfig*.json         # TypeScript configs
├── eslint.config.js       # ESLint configuration
└── README.md              # Project documentation
```

---

## Installation & Setup

1. **Clone the repository:**

   ```sh
   git clone <your-repo-url>
   cd my-app
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Start the development server:**

   ```sh
   npm run dev
   ```

4. **Run tests:**

   ```sh
   npm test
   ```

5. **Build for production:**
   ```sh
   npm run build
   ```

---

## Available npm Scripts

| Script    | Description                        |
| --------- | ---------------------------------- |
| `dev`     | Start Vite development server      |
| `build`   | Build the app for production       |
| `preview` | Preview the production build       |
| `test`    | Run Vitest tests                   |
| `lint`    | Run ESLint for code quality checks |

---

## License

This project is licensed under
