# 📝 Task Management Application

Task Management Application is a web-based tool that enables users to manage their tasks efficiently. It supports adding, editing, deleting, reordering, and moving tasks between categories using a **drag-and-drop** interface. Built using **React, Express.js, MongoDB, and Firebase Authentication**, it ensures seamless task organization and real-time updates.

## 🚀 Live Demo
- **Frontend:** [Live Frontend](https://storied-sunshine-e20d2a.netlify.app/)
- **Backend:** [Live Backend](https://server-theta-sable.vercel.app/)

## 📌 Features
✅ Add, edit, delete, and reorder tasks  
✅ Drag-and-drop interface for easy task movement  
✅ Categorize tasks: **To-Do, In Progress, Done**  
✅ **Real-time updates** using WebSockets  
✅ **Firebase Authentication** for secure login  
✅ **Responsive UI** with TailwindCSS  

## 🛠 Technologies Used
- **Frontend:** React, TailwindCSS, Axios  
- **Backend:** Express.js, MongoDB  
- **Authentication:** Firebase Authentication  
- **Real-time Updates:** WebSockets  

## 📦 Dependencies

### Frontend Dependencies
```json
{
  "@dnd-kit/core": "^6.3.1",
  "@dnd-kit/sortable": "^10.0.0",
  "@dnd-kit/utilities": "^3.2.2",
  "@tailwindcss/vite": "^4.0.7",
  "axios": "^1.7.9",
  "firebase": "^11.3.1",
  "localforage": "^1.10.0",
  "match-sorter": "^8.0.0",
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-hot-toast": "^2.5.2",
  "react-icons": "^5.5.0",
  "react-router-dom": "^7.2.0",
  "sort-by": "^1.2.0",
  "tailwindcss": "^4.0.7"
}
```

### Backend Dependencies
- **Express.js**  
- **MongoDB**  
- **Firebase Authentication**  
- **WebSockets**  

## ⚙️ Installation & Setup

### 🖥️ Frontend Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/mehedi-hasan-rihat/TaskDnD.git
   ```
2. Navigate to the project directory:
   ```sh
   cd TaskDnD
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```

### 🖥️ Backend Setup
1. Clone the backend repository:
   ```sh
   git clone https://github.com/mehedi-hasan-rihat/dndServer.git
   ```
2. Navigate to the backend directory:
   ```sh
   cd dndServer
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Create a `.env` file and add the necessary environment variables:
   ```
   MONGO_URI=your_mongodb_connection_string
   FIREBASE_API_KEY=your_firebase_api_key
   ```
5. Start the server:
   ```sh
   npm start
   ```

## 📖 Documentation & Source Code
- **Frontend Repository:** [GitHub Link](https://github.com/mehedi-hasan-rihat/TaskDnD)  
- **Backend Repository:** [GitHub Link](https://github.com/mehedi-hasan-rihat/dndServer)  

## 🤝 Contributors
- **Mehedi Hasan Rihat** - [GitHub](https://github.com/mehedi-hasan-rihat)  

---

✨ Happy Coding! 🚀

