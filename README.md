# 🚖 Uber Clone – Backend

Welcome to the **Backend** of the Uber Clone project — a powerful and scalable ride-booking system built with **Node.js**, **Express**, **MongoDB**, and **Socket.IO**. This service powers ride management, driver interaction, real-time communication, secure payments, and location tracking.

---

## 🌟 Key Features

- 🔐 **Authentication & Authorization**  
  Secure login and signup for users and drivers using **JWT** and **bcrypt**.

- 🛺 **Ride Booking System**  
  Book rides, assign drivers, estimate fares, and track rides in real-time.

- 💳 **Stripe Payment Integration**  
  Users can pay online with **Stripe**, and the fare is added to the driver’s wallet.

- 📡 **Real-Time Communication**  
  Live updates between users and drivers using **Socket.IO**.

- 📍 **Geolocation & Distance Calculation**  
  Accurate fare estimates with the **Haversine Formula** based on distance.

- 🚦 **Driver Dashboard Logic**  
  Drivers get ride requests, can Accept/Decline, and view estimated time to reach the user.

---

## 🛠 Tech Stack

- **Node.js** – Backend runtime  
- **Express.js** – REST API framework  
- **MongoDB + Mongoose** – NoSQL database & ODM  
- **Socket.IO** – Real-time communication  
- **JWT** – Token-based authentication  
- **bcrypt** – Secure password hashing  
- **Stripe** – Online payments  
- **Haversine-distance** – Distance calculation  
- **dotenv** – Manage environment variables

---

## 🚀 Getting Started

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/your-username/uber-clone-backend.git  
   cd uber-clone-backend
   ```

2. **Install Dependencies**  
   ```bash
   npm install
   ```

3. **Configure Environment Variables**  
   Create a `.env` file in the root directory and add:
   ```
   PORT=4000  
   MONGO_URI=your-mongodb-uri  
   JWT_SECRET=your-jwt-secret  
   GOOGLE_MAP_API=your-google-maps-api-key  
   STRIPE_SECRET_KEY=your-stripe-secret-key
   ```

4. **Run the Server**  
   ```bash
   npm start
   ```

---

## 📂 Folder Structure

```
├── controllers/        # Route logic (user, driver, ride, payment)
│   ├── user.controller.js
│   ├── captain.controller.js
│   ├── ride.controller.js
│   └──map.controller.js
├── models/             # Mongoose schemas
│   ├── user.model.js
│   ├── captain.model.js
│   ├── ride.model.js
│   └── blacklistToken.model.js
├── routes/             # Express routes
│   ├── user.routes.js
│   ├── captain.routes.js
    ├── maps.routes.js
│   ├── ride.routes.js
│   └── payment.js
├── db/                 # MongoDB connection
│   └── db.js
├── middleware/         # Auth & custom middleware
│   └── auth.middleware.js
├── services/             
│   ├── user.service.js
│   ├── captain.service.js
    ├── maps.service.js
│   ├── ride.service.js
├── .env # Environment variables
└── app.js               
└── server.js   # App entry point
└── socket.js         # Real-time socket logic
```

---

## 📡 API Endpoints Overview

### 👤 User Routes (`/users`)
- `POST /signup` – Register a new user  
- `POST /login` – Login as user  
- `GET /home` – Get user profile (auth required)

### 🚗 Driver Routes (`/captains`)
- `POST /signup` – Register a new driver  
- `POST /login` – Login as driver  
- `GET /captains/home` – Get driver profile (auth required)

### 📦 Ride Routes (`/rides`)
- `POST /` – Create a new ride request  
- `GET /:id` – Get ride details by ID  
- `POST /:id/accept` – Accept a ride (driver)  
- `POST /:id/decline` – Decline a ride (driver)

### 💸 Payment Routes (`/api/payments`)
- `POST /intent` – Create Stripe payment intent

### 🗺 Map Routes (`/maps`)
- `GET /distance` – Calculate distance using coordinates

---

## 🌍 Deployment

🔗 **Backend URL:** [https://tts-backend-5jnm.onrender.com](https://uber-backend-8ini.onrender.com)

🔗 **Live App on Vercel:** 🌍 [Check it Out](uber-frontend-o6g295t3u-bijaysaus-projects.vercel.app)


---

## 🙌 Contributing

We welcome contributions! Feel free to fork this repo, submit PRs, or open issues. Every bit helps.

---

## 📬 Contact

- GitHub: [@your-username](https://github.com/your-username)  
- LinkedIn: [linkedin.com/in/your-profile](https://linkedin.com/in/your-profile)  
- Email: your.email@example.com

---

> Made with ❤️ using Node.js & Socket.IO. This project fuels real-time journeys — fast, reliable, and connected.
