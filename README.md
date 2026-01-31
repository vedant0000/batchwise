# 🎓 BatchWise — College Community & Placement Platform

## 🚀 Overview

**BatchWise** is a modern **college networking and placement platform** built to connect students, alumni, and the Training & Placement (TnP) cell in one unified system.

It provides:

- 📢 Community interaction
- 💼 Placement/job updates
- 🔖 Bookmarking system
- 👤 Instagram-style student profiles
- 🤖 College AI Assistant
- 🧑‍💼 Dedicated TnP dashboard
- 🎤 AI Mock Interview (future scope)

Built completely using **React (Frontend Only)** for fast ideathon deployment and easy scalability.

---

## ✨ Features

### 👨‍🎓 Student Side
- Secure Login
- Home feed (posts & discussions)
- Communities
- Company & job listings
- Bookmark posts/resources (persistent after refresh)
- Instagram-style Profile page
- Floating AI Chatbot (college-trained)
- AI Mock Interview floating button
- Notifications panel

### 🧑‍💼 TnP Side
- Separate dashboard UI
- Department-wise job management
- Add new job postings
- Active / Completed toggle
- Tag placed students + package details
- Placement tracking
- Logout functionality

### 🤖 AI Assistant
- Always available floating chatbot
- Trained only on college data
- Offline knowledge base (no backend needed)

---

## 🛠 Tech Stack

| Layer | Technology |
|--------|-----------------------------|
| Frontend | React (Vite) |
| Routing | React Router DOM |
| State | Context API |
| Styling | Modular CSS |
| Storage | localStorage (auth + bookmarks) |
| Icons | Lucide / Emoji |
| Data | Static JSON modules |

---

## 📂 Project Structure

```
src/
│
├── components/
│   ├── layout/
│   ├── common/
│   ├── chatbot/
│
├── pages/
│   ├── Login
│   ├── Home
│   ├── Profile
│   ├── Bookmarks
│   ├── TnP Dashboard
│
├── context/
│   ├── AuthContext
│   ├── AppContext
│
├── data/
│   ├── users.js
│   ├── jobs.js
│   ├── notifications.js
│   ├── collegeData.js
│
├── styles/
│
└── App.jsx
```

---

## 🔐 Authentication Flow

### Behavior
- First visit → Login page
- After login → Student Layout or TnP Dashboard
- Refresh → Session persists (localStorage)
- Logout → Returns to login

### Role-based routing

```
Student → Layout (community platform)
TnP → Dashboard (admin controls)
```

---

## 💾 Persistence Strategy

| Feature | Storage |
|----------|-----------|
| Login session | localStorage |
| Bookmarks | localStorage |
| Jobs | in-memory demo |
| Notifications | static/demo |

---

## ▶️ Getting Started

### 1️⃣ Clone repository
```bash
git clone https://github.com/vedant0000/batchwise.git
cd batchwise
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Run development server
```bash
npm run dev
```

Open:
```
http://localhost:5173
```

---

## 👥 Demo Credentials

### Student
```
Email: ved.patil@dycoe.edu
Password: ved123
```

### TnP
```
Email: amit.kulkarni@dycoe.edu
Password: tnp123
```

*(Update according to your dataset if changed)*

---

## 🎨 UI Highlights

- Clean sidebar navigation
- Floating action buttons
- Centered modals with shadow
- Instagram-style profile layout
- Professional admin dashboard
- Responsive structure
- Modern card-based design

---

## 🚀 Future Scope

Planned enhancements:

- Real AI (OpenAI / Gemini integration)
- AI Mock Interview module
- Resume builder
- Backend + database
- Real-time notifications
- File uploads
- Analytics dashboard
- Follow system
- Dark mode

---

## 🧠 Key Learnings

- Role-based routing
- Context API architecture
- Persistent frontend state
- Modular component design
- Professional UI/UX
- Ideathon-ready MVP development

---

## 👨‍💻 Authors

- Ved Patil
- Team BatchWise

---

## 📜 License

This project is developed for **educational and ideathon purposes**.