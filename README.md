tructured README.md for the backend of your Uber Clone project:

markdown
Copy
Edit
# 🚗 **Uber Clone - Backend**

This is the **backend** part of the Uber Clone project. Built using **Node.js**, **Express.js**, **MongoDB**, and **Socket.IO**, this backend handles ride requests, user authentication, payment integration, and real-time communication between users and drivers.

## 📱 **Key Features**
- **User Authentication:** Secure login/signup for both users and drivers using **JWT** and **bcrypt**.
- **Ride Management:** Create, track, and manage rides with dynamic fare calculation and real-time updates.
- **Driver Interaction:** Drivers can accept or decline ride requests, and users are notified accordingly.
- **Payment Integration:** Payment processing through **Stripe** for online payments.
- **Real-Time Communication:** **Socket.IO** is used for real-time ride status updates and notifications.
- **Geolocation:** Distance calculations between users and drivers using **Haversine Formula**.

## 🔧 **Technologies Used**
- **Node.js** – JavaScript runtime for building scalable backend services.
- **Express.js** – Web framework for handling HTTP requests and routing.
- **MongoDB** – NoSQL database for storing user, ride, and driver data.
- **Mongoose** – MongoDB object modeling tool for Node.js.
- **JWT (JSON Web Token)** – Secure token-based authentication.
- **bcrypt** – Password hashing for secure user authentication.
- **Socket.IO** – For real-time, bidirectional communication between users and drivers.
- **Stripe** – Payment gateway for handling online transactions.
- **Haversine Distance** – For calculating distances between geographical points.

## 🛠️ **Installation & Setup**

### **1. Clone the repository:**

git clone https://github.com/your-username/uber-clone-backend.git

2. Navigate to the project directory:
   cd uber-clone-backend

3. Install dependencies:
    npm install

4. Set up environment variables:
Create a .env file in the root directory of the project and add the necessary configuration values. You’ll need:
   PORT = 4000
   MONGO_URI=your-mongoose-secret
   JWT_SECRET = your-jwt-secret
   GOOGLE_MAP_API =your-secret-key
   STRIPE_SECRET_KEY = your-secret-key

5. Run the development server:
   npm start



### **📝 API Endpoints**
User Routes (/users)
POST /users/signup – Create a new user account.

POST /users/login – Login to an existing user account.

GET /users/me – Get user profile (authenticated).

Captain Routes (/captains)
POST /captains/signup – Create a new driver account.

POST /captains/login – Login to an existing driver account.

GET /captains/me – Get driver profile (authenticated).

Ride Routes (/rides)
POST /rides – Create a new ride request.

GET /rides/:id – Get ride details by ID.

POST /rides/:id/accept – Accept a ride request (for drivers).

POST /rides/:id/decline – Decline a ride request (for drivers).

Payment Routes (/api/payments)
POST /api/payments/intent – Create a new Stripe payment intent for online payments.

Map Routes (/maps)
GET /maps/distance – Calculate distance between user and driver using Haversine formula.

📝 Project Structure
bash
Copy
Edit
├── controllers/      # Business logic for handling routes
│   ├── userController.js
│   ├── captainController.js
│   ├── rideController.js
│   └── paymentController.js
├── models/           # Mongoose models for MongoDB
│   ├── User.js
│   ├── Captain.js
│   ├── Ride.js
│   └── Payment.js
├── routes/           # Route definitions
│   ├── user.routes.js
│   ├── captain.routes.js
│   ├── ride.routes.js
│   └── payment.routes.js
├── db/               # Database connection
│   └── db.js
├── socket/           # Socket.IO for real-time communication
│   └── socket.js
├── middleware/       # Custom middleware like authentication
│   └── auth.js
└── .env              # Environment variables
