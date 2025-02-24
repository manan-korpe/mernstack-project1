# eCommerce Application (MERN Stack)

This is an eCommerce web application built using the MERN stack (MongoDB, Express, React, Node.js). The application allows users to browse products, add them to their cart, and complete purchases. 

## Technologies Used

### Frontend
- **React.js**: A JavaScript library for building user interfaces.
- **React Router DOM**: For routing and navigating between pages.
- **Redux**: For state management in the application.
- **Bootstrap**: For styling and responsive layout.
- **Axios**: For making HTTP requests.
- **Helmet**: For managing the document head (SEO, meta tags, etc.).

### Backend
- **Node.js**: JavaScript runtime environment for the server-side logic.
- **Express.js**: Web framework for Node.js to handle API requests.
- **MongoDB**: NoSQL database to store product, user, and order data.
- **Mongoose**: ODM for MongoDB, to interact with the database.
- **Bcrypt**: For hashing passwords before storing them securely.
- **Cloudinary**: For managing product images in the cloud.
- **Cookie Parser**: To parse cookies sent by the client.
- **CORS**: For enabling cross-origin requests between the frontend and backend.
- **JWT (JSON Web Tokens)**: For authentication and authorization.
- **Multer**: For handling file uploads, such as images.
- **Nodemailer**: For sending email notifications (e.g., order confirmation emails).
- **Nodemon**: For auto-restarting the server during development.

## Features

- **User Authentication**: Users can register, login, and securely manage their accounts with JWT-based authentication.
- **Product Management**: Users can browse a catalog of products, view product details, and add items to the cart.
- **Admin Panel**: Admin users can manage product listings, view orders, and manage user accounts.
- **Order Processing**: Users can place orders, and admins can process these orders.
- **Responsive Design**: The app is fully responsive and works well across all screen sizes.

## Installation

### Prerequisites

- **Node.js** and **npm** (Node Package Manager) should be installed on your machine.
- **MongoDB** should be set up locally or you can use a cloud-based MongoDB service like MongoDB Atlas.

### Frontend Setup

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/manan-korpe/mernstack-project1.git
