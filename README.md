# User Registration Endpoint

## Endpoint
POST /users/register

## Description
This endpoint allows a new user to register by providing their details. Upon successful registration, a JSON Web Token (JWT) is generated and returned along with the user data.

## Request Body
The request body must be in JSON format and include the following fields:

- `fullname`: An object containing:
  - `firstname`: A string representing the user's first name (minimum 3 characters, required).
  - `lastname`: A string representing the user's last name (minimum 3 characters, required).
- `email`: A string representing the user's email address (must be a valid email format, required).
- `password`: A string representing the user's password (minimum 5 characters, required).

### Example Request
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "securepassword"
}

## Responses
- **201 Created**: User successfully registered.
  - Response body:
  {
    "data": {
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com",
      "password": "hashed_password"
    },
    "token": "jwt_token"
  }

- **400 Bad Request**: Validation errors occurred (e.g., missing fields, invalid email format).
  - Response body:
  {
    "errors": [
      {
        "msg": "Please enter a valid email",
        "param": "email",
        "location": "body"
      }
    ]
  }

## Status Codes
- `201`: User created successfully.
- `400`: Bad request due to validation errors.