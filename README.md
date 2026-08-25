<div align="center">

# 📝 React-Redux Todo List App

### Centralized State Management & Task Manager

> A modern, responsive task management app built with React and Redux Toolkit for clean, centralized state handling.

<p>

<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
<img src="https://img.shields.io/badge/Redux%20Toolkit-764ABC?style=for-the-badge&logo=redux&logoColor=white"/>
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
<img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white"/>
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>

</p>

</div>

---

## ✨ Features

- ➕ **Add Tasks:** Quick and seamless task creation
- 🗑️ **Delete Tasks:** Instant task removal with global state updates
- ⚡ **Centralized State:** State managed using Redux Toolkit (`createSlice`)
- 🔄 **Predictable Data Flow:** Clean action dispatching to store reducers
- 🎯 **Decoupled Architecture:** UI components independent of business logic
- 📱 **Responsive UI:** Clean, modern, and mobile-friendly interface
- ⚡ **Vite Powered:** Fast development build and instant updates

---

## 🛠 Tech Stack

<p align="center">

<img src="https://skillicons.dev/icons?i=react,redux,js,vite,css,html,git,github,vscode"/>

</p>

**Core Technologies**

- React
- Redux Toolkit (`@reduxjs/toolkit` & `react-redux`)
- JavaScript (ES6+)
- Vite
- HTML5 & CSS3

---

## 🌍 Live Demo
🔗 [Redux-TodoList App](https://redux-todo-list-beige.vercel.app/)

---
<br/> <br/>
## 🏗️ Application Flow

```text
User Action
  │
  ▼
Component Dispatch
  │
  ▼
Redux Action (addTodo / deleteTodo)
  │
  ▼
Redux Store Reducer
  │
  ▼
Global State Updated
  │
  ▼
UI Re-rendered via useSelector
