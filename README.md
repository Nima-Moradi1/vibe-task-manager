# Vibe Task Manager -> A Frontend Code Challenge from Vibe

A **production-ready, fully type-safe task management application** built with **React, TypeScript, Vite, Redux Toolkit, Material-UI, and @dnd-kit**.  

This project demonstrates **scalable architecture, feature encapsulation, reusable design system, drag-and-drop, and localStorage persistence**.

---

## Features

- **Add, view, and manage tasks** with title and description  
- **Mark tasks as completed** with visually enhanced completed task cards  
- **Drag-and-drop to reorder tasks** using modern accessible `@dnd-kit`  
- **Filter tasks**: All / Active / Completed  
- **Persist tasks** using `localStorage` across page refreshes  
- **Fully responsive** and optimized for desktop and mobile  
- **Type-safe architecture** using TypeScript and Redux Toolkit  
- **Reusable Material-UI design system** for buttons, text fields, and layout components  

---

## Folder Structure
src/
├─ app/
│  ├─ store.ts             # Redux store configuration
│  ├─ hooks.ts             # Typed Redux hooks
│  └─ providers.tsx        # Theme + Redux providers
├─ features/
│  └─ tasks/
│     ├─ components/
│     │  ├─ TaskCard.tsx
│     │  ├─ TaskList.tsx
│     │  ├─ TaskFilters.tsx
│     │  └─ AddTaskDialog.tsx
│     ├─ hooks/
│     │  └─ useTasks.ts
│     └─ model/
│        ├─ task.types.ts
│        └─ task.slice.ts
├─ shared/
│  ├─ components/
│  │  ├─ layout/PageContainer.tsx
│  │  └─ ui/{AppButton, AppTextField, EmptyState}.tsx
│  ├─ theme/{palette,typography,theme}.ts
│  └─ utils/generateId.ts
├─ pages/TasksPage.tsx
├─ App.tsx
└─ main.tsx

> Feature-based folder structure for **scalability and maintainability**.

---

## Tech Stack

- **Frontend:** React 18 + TypeScript + Vite  
- **State Management:** Redux Toolkit with typed hooks  
- **UI Library:** Material-UI v5 with a custom design system  
- **Drag & Drop:** `@dnd-kit/core` and `@dnd-kit/sortable`  
- **Persistence:** Browser `localStorage`  
- **Build & Dev:** Vite + React Fast Refresh  

---

## Getting Started

### 1️⃣ Clone the repository

```bash
git clone <your-repo-url>
cd vibe-task-manager

### 2️⃣ Install dependencies

```bash
pnpm install

### 3️⃣ Run the development server

```bash
pnpm run dev

 ### 4️⃣ Build for production


 Usage
	•	Click the “+” button to add a new task.
	•	Fill in Title and Description and click Add.
	•	Toggle completion via the checkbox. Completed tasks get highlighted and faded with a colored border.
	•	Use filters to view All / Active / Completed tasks.
	•	Drag tasks using the handle icon to reorder them.
	•	Tasks are persisted in localStorage, so refresh won’t lose your data.