# Week 4 MERN Stack Integration Assignment

A simple full-stack blog app built with the MERN stack (MongoDB, Express.js, React, Node.js). It allows users to create and view posts.

## Features

- 📄 View all posts  
- ✍️ Create a new post  
- 💾 MongoDB data persistence  
- ⚛️ React frontend with TailwindCSS styling  
- 🔗 REST API with Express and Mongoose  

## Technologies Used

- **Frontend**: React, TailwindCSS, Axios  
- **Backend**: Node.js, Express.js, Mongoose  
- **Database**: MongoDB  
- **Dev Tools**: pnpm, nodemon, VS Code  

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/PLP-MERN-Stack-Development/week-4-mern-integration-assignment-x88-code.git
cd week-4-mern-integration-assignment-x88-code
```

### 2. Install Dependencies

**Backend**
```bash
cd server
pnpm install
```

**Frontend**
```bash
cd ../client
pnpm install
```

### 3. Create a `.env` file in the server folder

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/blog
```

### 4. Run the App

**Start Backend**
```bash
cd server
pnpm run dev
```

**Start Frontend**
```bash
cd ../client
pnpm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

## Folder Structure

```
week-4-mern-integration-assignment-x88-code/
├── client/       # React frontend
└── server/       # Express backend
```

## Screenshot

![App Screenshot](screenshot.png)

## Author

**Name:** [0xErick] 
**Course:** Power Learn Project – MERN Stack

