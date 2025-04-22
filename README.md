# 🚗 Uber Clone - Backend

This is the **backend** of the Uber Clone application. It handles user and driver authentication, ride management, real-time communication, and payment processing. The backend is powered by **Node.js**, **Express.js**, **MongoDB**, **Socket.IO**, and **Stripe**.

---

## 📌 Features

- 🔐 **Authentication**  
  Secure login and signup for users and drivers using **JWT** and **bcrypt**.

- 🛺 **Ride Management**  
  Users can book rides, and drivers can accept or decline them. Dynamic fare estimation and ride tracking included.

- 🧑‍✈️ **Driver Interaction**  
  Real-time driver availability, request handling, and ride status updates.

- 💳 **Payment Gateway**  
  Online payments supported using **Stripe** for secure and seamless transactions.

- 🔄 **Real-Time Updates**  
  Implemented using **Socket.IO** for ride requests, status updates, and driver actions.

- 📍 **Geolocation Support**  
  Distance calculations using the **Haversine Formula** for accurate fare and ETA estimations.

---

## 🔧 Tech Stack

| Technology     | Description                                       |
|----------------|---------------------------------------------------|
| **Node.js**     | Backend JavaScript runtime                        |
| **Express.js**  | Web framework for API development                 |
| **MongoDB**     | NoSQL database for user and ride data             |
| **Mongoose**    | MongoDB object modeling tool                      |
| **JWT**         | Token-based authentication                        |
| **bcrypt**      | Password encryption for security                  |
| **Socket.IO**   | Real-time bi-directional communication            |
| **Stripe API**  | Payment integration for online transactions       |
| **Haversine**   | Algorithm for distance calculation using geo-coordinates |

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/uber-clone-backend.git
cd uber-clone-backend
2. Install Dependencies
bash
Copy
Edit
npm install
3. Set Up Environment Variables
Create a .env file in the root directory and add the following:

env
Copy
Edit
PORT=4000
MONGO_URI=your-mongodb-uri
JWT_SECRET=your-jwt-secret
GOOGLE_MAP_API=your-google-maps-api-key
STRIPE_SECRET_KEY=your-stripe-secret-key
4. Start the Server
bash
Copy
Edit
npm start
Server will be running at http://localhost:4000

📁 Project Structure
bash
Copy
Edit
├── controllers/          # Route handlers and business logic
│   ├── userController.js
│   ├── captainController.js
│   ├── rideController.js
│   └── paymentController.js

├── models/               # Mongoose schemas
│   ├── User.js
│   ├── Captain.js
│   ├── Ride.js
│   └── Payment.js

├── routes/               # API routes
│   ├── user.routes.js
│   ├── captain.routes.js
│   ├── ride.routes.js
│   └── payment.routes.js

├── db/                   # MongoDB connection
│   └── db.js

├── socket/               # Socket.IO configuration
│   └── socket.js

├── middleware/           # Custom middleware (e.g. auth)
│   └── auth.js

├── .env                  # Environment variables

└── server.js             # Main entry point
🧪 API Endpoints
👤 User Routes (/users)
POST /signup – Register a new user

POST /login – Login existing user

GET /me – Get current user profile (requires token)

🚖 Captain Routes (/captains)
POST /signup – Register a new driver

POST /login – Login existing driver

GET /me – Get current driver profile (requires token)

📦 Ride Routes (/rides)
POST / – Create a new ride request

GET /:id – Get ride by ID

POST /:id/accept – Driver accepts ride

POST /:id/decline – Driver declines ride

💸 Payment Routes (/api/payments)
POST /intent – Create a new Stripe payment intent

🗺️ Map Routes (/maps)
GET /distance – Calculate distance using Haversine

🌐 Deployment
You can deploy this backend on Render, Heroku, Railway, or any cloud platform.

Push code to GitHub

Connect your GitHub repo in the platform

Set your environment variables

Deploy 🚀

🤝 Contributing
Contributions are welcome!
Feel free to open issues or submit pull requests for improvements or bug fixes.
