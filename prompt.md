# GitHub Copilot: User Management App Prompt Guide

This file contains a series of prompts designed to be used with GitHub Copilot Chat in VS Code to build this entire application from scratch.

---

## 1. Project Initialization & Configuration

```
/new @workspace

I want to build a User Management application. Use React, TypeScript, and Vite.

First, install all necessary dependencies for:
- Styling: `tailwindcss`, `postcss`, `autoprefixer`
- Forms: `react-hook-form`, `zod`, `@hookform/resolvers/zod`
- Testing: `vitest`, `@testing-library/react`, `@testing-library/jest-dom`, `jsdom`
- Code Quality: `eslint`, `prettier`, `@typescript-eslint/parser`, `@typescript-eslint/eslint-plugin`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`, `eslint-config-prettier`, `eslint-plugin-prettier`

Next, create the following configuration files with the specified content:

1.  **`.eslintrc.cjs`**: Set up ESLint to extend recommended rules, use the TypeScript parser, and integrate with Prettier.
2.  **`.prettierrc`**: Configure Prettier with rules for semi-colons, tab width, and single quotes.
3.  **`.prettierignore`**: Add `node_modules`, `dist`, and `.vscode` to the ignore list.
4.  **`tailwind.config.js`** and **`postcss.config.js`**: Initialize Tailwind CSS.
5.  **`vite.config.ts`**: Configure Vitest with a `jsdom` environment and a setup file.

Finally, add `lint` and `format` scripts to the `scripts` section of `package.json`.
```

---

## 2. App Structure & Core Logic

```
@workspace

Define the core structure in `src/App.tsx`.

1.  Define a `User` interface with `id`, `name`, `email`, `mobile`, and `city`.
2.  Set up state management using `useState` for a `users` list and a `userToEdit` object.
3.  Scaffold the handler functions for the main CRUD logic: `handleAddUser`, `handleUpdateUser`, and `handleDeleteUser`.
```

---

## 3. Component Development

```
@workspace

Build the UI components inside `src/components`.

1.  **`UserForm.tsx`**: Create a form for adding/editing users. Use `react-hook-form` and `zod` for validation. It should accept `onSubmit` and `initialData` props.
2.  **`UserTable.tsx`**: Create a table to display the list of users. It should have `Edit` and `Delete` buttons in each row and accept `users`, `onEdit`, and `onDelete` as props.
```

---

## 4. Styling & Final Integration

```
@workspace

Style the entire application using Tailwind CSS for a clean and responsive layout. Then, import the `UserForm` and `UserTable` components into `App.tsx` and connect them to the state and logic handlers to make the app fully functional.
```

---

## 5. Testing

```
@workspace

Create a test file at `src/test/App.test.tsx`. Write a test to verify that the main `App` component renders and the title "User Management System" is displayed. This will confirm the Vitest setup is correct.
```

---

## 6. Documentation

```
@workspace

Generate a comprehensive `README.md` for this project. It should include:

- An overview of the app and its features.
- The tech stack used.
- An explanation of the folder structure.
- Installation and setup instructions.
- A list of all available `npm` scripts.
- License information.
```
