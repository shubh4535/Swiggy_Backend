# 🍔 Swiggy-Style Application – Backend API

This is the backend API for the Swiggy-Style Restaurant Application.

Built using **Node.js, Express, and MongoDB**, the backend handles authentication, user management, and secure API communication using JWT.

The project follows a structured **MVC architecture** and demonstrates production-style backend development practices.

---

## 🌐 Live API

🚀 Base URL:  https://swiggy-backend-sapl.onrender.com

---

## 🚀 Features

### 🔐 Authentication System
- User Registration
- User Login
- Password hashing using bcrypt
- JWT-based authentication
- Protected routes using middleware

### 👤 User Management
- MongoDB user storage
- Unique email validation
- Secure password storage

### 🛡 Security & Validation
- JWT token verification middleware
- Protected routes
- Proper HTTP status codes
- Error handling for invalid credentials
- Input validation

---

## 🏗 Architecture

This backend follows **MVC Pattern**:





This ensures:
- Separation of concerns
- Scalable structure
- Clean code organization

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT (jsonwebtoken)
- bcryptjs
- dotenv

---

## 📦 API Endpoints

### 🔐 Authentication Routes

#### ➤ Register User
`POST /api/register`

Request Body:
```json
{
  "name": "Shubham",
  "email": "shubham@example.com",
  "password": "123456"
}
```

#### ➤ Login User
`POST /api/login`

Request Body:
```json
{
  "email": "shubham@example.com",
  "password": "123456"
}

```
Request Body:
```json
{
  "token": "JWT_TOKEN"
}

```
## 🔒 Protected Route Example

### Requires Authorization Header:

Authorization: Bearer <token>

Example:
`GET/api/protected`

## 🔄 Authentication Flow

- User registers → Password hashed using bcrypt.
- User logs in → JWT token generated.
- Token sent in Authorization header.
- Middleware verifies token before - granting access.
- If valid → Access granted.
- If invalid → 401 Unauthorized response.

---

## 📁 Project Structure
```pgsql
swiggy-backend/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── authController.js
│
├── middleware/
│   └── authMiddleware.js
│
├── models/
│   └── User.js
│
├── routes/
│   └── authRoutes.js
│
├── app.js
├── server.js
├── .env
└── package.json
```
---

## ⚙️ Installation & Setup
### 1️⃣ Clone Repository
```bash 
git clone https://github.com/your-username/swiggy-backend.git
cd swiggy-backend
```
### 2️⃣ Install Dependencies
```bash npm install
```
### 3️⃣ Create .env File
```ini 
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 4️⃣ Run Server

#### Development mode:
```bash
npm run dev
```

#### Production mode:
```bash
npm start

```
#### Server runs at:
```arduino
http://localhost:5000

```
## 🧪 API Testing

### APIs were tested using:

- Thunder Client (VS Code)
- Postman
- Tested cases:
- Successful registration
- Duplicate email validation
- Successful login
- Invalid credentials handling
- Protected route access

## 🛡 Error Handling

### The API returns proper HTTP status codes:

- 200 → Success
- 201 → Created
- 400 → Bad Request
- 401 → Unauthorized
- 404 → Not Found
- 500 → Server Error

## 👨‍💻 Author

Shubham Singh
Full Stack Developer (MERN)
