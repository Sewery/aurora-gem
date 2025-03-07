# Aurora Gem 
## About
**Aurora Gem** is a full-stack jewelry e-commerce app built with **React.js** and **Express.js** in **TS**, offering  product search, filtering, cart and order history management. It features customer reviews, ratings, and **JWT** authentication for a personalized shopping experience. Designed with a **microservices architecture**, it ensures scalability, security, and smooth performance. Application stores pictures in S3 bucket and other data in MySQL local storage using Docker.
<br /><br />
![App presentation](docs/aurora-gem-clip.gif "App presentation")

## Login and sign in
![Screenshot showing Login page](docs/login.png "Screenshot showing Login page")
![Screenshot showing Sign in page](docs/sign-in.png "Screenshot showing Sign in page")
JWT is used for authorization and is stored in the database for a certain period of time.
Passwords are stored in database encrypted using bcrypt
### Product details
![Screenshot showing Product details page](docs/product-details.png "Screenshot showing Product details page")
A logged-in user can add, edit, and delete their own opinions under each product. The admin can delete all opinions.
### Cart
![Screenshot showing Cart page](docs/cart.png "Screenshot showing Cart page")
User can add products to cart to buy them. Only logged one can order them.
### Order history
![Screenshot showing Order history page](docs/order-history.png "Screenshot showing Order history page")
For logged-in user shows order history with total price.
## Main Technologies
The primary technologies used in this project are:
- **React** 
- **Express**
- **TypeScript**
- **Material UI**
- **TailwindCSS**
- **Formik**
- **Docker**
- **MySQL**
## Setup Instructions
To run this project, ensure the following are installed:
- **Docker**
- **npm**
Now follow instructions:
1. Open a terminal and navigate to the project directory.
2. Execute the following commands:

```sh
cd ./backend

docker compose up -d

cd ..

npm run dev
```
Page will be displayed [here](http://localhost:5173/)
## Contributors
- **Seweryn Tasior** ([GitHub Profile](https://github.com/Sewery))
- **Wojtek Pawlina** ([GitHub Profile](https://github.com/Wpawlina))

