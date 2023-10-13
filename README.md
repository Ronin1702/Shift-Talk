# 🏁 SHIFT 🗣️ TALK [![MIT](https://img.shields.io/static/v1.svg?label=📃%20License&message=MIT&color=important)](./LICENSE)

**Shift Talk** is a automobile enthusiasts social website where a user can create an account, login, and post about about their favorite or _least_ favorite cars. The user can also view other users posts and comment on them. The user can also delete their own posts and comments.

**Shift Talk** also offers a _Pro Shop_ where a registered user can purchase merchandise, donate, or hire a Pro. The user can also view their order history.

This app is also deployed on [Heroku](https://https://t1p3-4fd94440c532.herokuapp.com//) as [![Shift Talk](https://img.shields.io/badge/Shift%20Talk%20-©️%20TEAM%20🏁%20ONE-yellow?logo=heroku)](https://t1p3-4fd94440c532.herokuapp.com/)

## Table of Contents

- [Description](#description)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
  - [Stripe](#stripe-test)
- [Screenshots](#screenshots)
- [Links](#links)
  - [TEAM ONE](#team-one)
- [License](#license)

## Description

```javascript
AS AN automobile enthusiast,
I WANT a dedicated social media platform where I can discuss, share thoughts, and address issues related to cars,
SO THAT I can engage with like-minded individuals and have the option to hire professionals for assistance.
```

[_back to top_](#table-of-contents)

## Tech Stack

- [![CSS3](https://img.shields.io/badge/CSS3-gray?logo=css3)](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [![HTML5](https://img.shields.io/badge/HTML5-gray?logo=html5)](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
- [![Javascript](https://img.shields.io/badge/JavaScript-ES6+-yellow?logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [![Node.js](https://img.shields.io/badge/Node.js®-latest-blue?logo=node.js)](https://nodejs.org/en/)
  - [![Concurrently](https://img.shields.io/badge/Concurrently-5.1.0-blue?logo=npm)](https://www.npmjs.com/package/concurrently)
  - [![Nodemon](https://img.shields.io/badge/Nodemon-3.0.1-blue?logo=nodemon)](https://www.npmjs.com/package/nodemon)
- [![Express.js](https://img.shields.io/badge/Express.js-4.18.2-green?logo=express)](https://expressjs.com/)
- [![MongoDB](https://img.shields.io/badge/MongoDB-latest-green?logo=mongodb)](https://www.mongodb.com/)
  - [![Mongoose](https://img.shields.io/badge/Mongoose-7.5.3-green?logo=mongoose)](https://mongoosejs.com/)
- [![GraphQL](https://img.shields.io/badge/GraphQL-gray?logo=graphql)](https://graphql.org/)
  - [![Apollo Server](https://img.shields.io/badge/Apollo%20Server-4.9.3-blue?logo=apollo-graphql)](https://www.apollographql.com/docs/apollo-server/)
- [![Bcrypt](https://img.shields.io/badge/Bcrypt-5.1.1-orange?logo=npm)](https://www.npmjs.com/package/bcrypt)
- [![jsonwebtoken](https://img.shields.io/badge/jsonwebtoken-9.0.2-green?logo=npm)](https://www.npmjs.com/package/jsonwebtoken)
  - [![JWT Decode](https://img.shields.io/badge/JWT%20Decode-3.1.2-green?logo=npm)](https://www.npmjs.com/package/jwt-decode)
- [![React](https://img.shields.io/badge/React-18.2.0-blue?logo=react)](https://reactjs.org/)
  - [![React-DOM](https://img.shields.io/badge/React--DOM-18.2.0-lightblue?logo=react)](https://reactjs.org/)
  - [![React Router DOM](https://img.shields.io/badge/React%20Router%20DOM-6.16.0-purple?logo=react-router)](https://reactrouter.com/)
  - [![Apollo Client](https://img.shields.io/badge/Apollo%20Client-3.8.4-blue?logo=apollo-graphql)](https://www.apollographql.com/docs/react/)
- [![Vite](https://img.shields.io/badge/Vite-4.4.9-blue?logo=vite)](https://vitejs.dev/)
  - [![Vite React Plugin](https://img.shields.io/badge/Vite%20React%20Plugin-4.1.0-lightblue?logo=vite)](https://vitejs.dev/)
- [![Stripe](https://img.shields.io/badge/Stripe-13.8.0-blue?logo=stripe)](https://stripe.com/)
  - [![Stripe.js](https://img.shields.io/badge/Stripe.js-2.1.7-blue?logo=stripe)](https://stripe.com/docs/js)
- [![Redux](https://img.shields.io/badge/Redux-4.2.1-purple?logo=redux)](https://redux.js.org/)
  - [![Redux Toolkit](https://img.shields.io/badge/Redux%20Toolkit-1.9.6-purple?logo=redux)](https://redux-toolkit.js.org/)
  - [![React Redux](https://img.shields.io/badge/React%20Redux-8.1.3-purple?logo=redux)](https://react-redux.js.org/)

[_back to top_](#table-of-contents)

## Installation

1. Packages to support this application can be installed by using [_npm install_](https://docs.npmjs.com/cli/v9/commands/npm-install) commands.

   > **Note**: If you do not have a `package.json` in your directory already, enter command below to [_initiate_](https://docs.npmjs.com/cli/v9/commands/npm-init).
   >
   > ```powershell
   > npm init -y
   > ```

2. **Important**: Please @ the **EXACT** versions as shown above to ensure the functionality of this application.

   - Main Project:

     ```powershell
     npm i concurrently@5.1.0 --save-dev
     ```

   - Server:

     ```powershell
     npm i @apollo/server@4.9.3 bcrypt@5.1.1 express@4.18.2 graphql@16.8.1 jsonwebtoken@9.0.2 mongoose@7.5.3 stripe@13.8.0
     &&
     npm i nodemon@3.0.1 --save-dev
     ```

   - Client:

     ```powershell
     npm i @apollo/client@3.8.4 @stripe/stripe-js@2.1.7 @testing-library/react@14.0.0 graphql@16.8.1 happy-dom@12.6.0 jwt-decode@3.1.2 react@18.2.0 react-dom@18.2.0 react-router-dom@6.16.0 vitest@0.34.6 @reduxjs/toolkit@1.9.6 react-redux@8.1.3
     &&
     npm i @types/react@18.2.24 @types/react-dom@18.2.8 @vitejs/plugin-react@4.1.0 eslint@8.50.0 eslint-plugin-react@7.33.2 eslint-plugin-react-hooks@4.6.0 eslint-plugin-react-refresh@0.4.3 vite@4.4.9 --save-dev
     ```

3. **Config**: Please add the correct environmental variables in the `.env` file in the `server` directory like the example below:

   > Deploying to Heroku you will need to add these environmental variables to the Heroku Config Vars as well.

   ```javascript
   MONGODB_URI=mongodb+srv://<username>:<password>@<cluster-name>.mongodb.net/<collection-name>;
   SECRET=<SECRET-TO-JWT>;
   STRIPE_SECRET_KEY=<Your_own_test_key_or_use_this_one:sk_test_4eC39HqLyjWDarjtT1zdp7dc>;
   ```

   If you've decided to use the default `stripe secret key` then please use the matching `publishable key` in the frontend below:

   ```javascript
   const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');
   ```

4. **`npm run build && npm run preview`**: Please run the following command in the `ROOT` directory to build and preview the application for production.

   ```powershell
   npm run build && npm run preview
   ```

[_back to top_](#table-of-contents)

## Usage

- This application can be invoked locally by using the following command:

  ```powershell
  npm run preview
  ```

- App Flow:

  ```javascript
  GIVEN the Shift Talk platform for automobile enthusiasts
  WHEN I first visit the site
  THEN I see HOME, Login, Signup on the navbar and a search bar for cars.

  WHEN I search for a car using make, model, and year and hit Search
  THEN I see an Add Comment button, the ability to view existing comments, or a message incentivizing to be the first to comment.

  WHEN I click on Add Comment while logged out
  THEN I receive a warning to log in first.
  WHEN I click on Add Comment while logged in
  THEN I can submit my comment which gets added and the page refreshes with updated comments.

  WHEN I view existing comments
  THEN I see a View Replies and Reply button for each comment.

  WHEN I click on View Replies
  THEN I see all the replies within that comment.
  WHEN I click on Reply and am not logged in
  THEN I receive a warning to log in.
  WHEN I click on Reply and am logged in
  THEN I can submit my reply and the page refreshes with updated replies.

  WHEN I successfully sign up or log in
  THEN I am redirected to the home page with a personalized greeting and additional navbar options like My Page, RENT A PRO, Logout, and Cart.

  WHEN I navigate to My Page
  THEN I see options to Update Profile, View Orders, and view my comments and replies with options to delete them.

  WHEN I navigate to RENT A PRO
  THEN I see product categories and related products which I can add to my cart or view in detail.

  WHEN I navigate to a specific detail of product
  THEN I see product details with options to Add to Cart or Remove from Cart.

  WHEN I decide to checkout
  THEN I am redirected to a secure Stripe payment link.
  AFTER a successful transaction on Stripe
  THEN I am redirected back to Success page and subsequently to my View Orders.

  WHEN I am done with the platform
  THEN I can securely log out.
  ```

### Stripe Test

If you would like to test the stripe payment, feel free to use the following [testing credit card numbers](https://stripe.com/docs/testing?testing-method=card-numbers) provided by [Stripe Docs](https://stripe.com/docs) with any future date and any 3 digit CVC code (4 for American Express).

![Visa](https://img.shields.io/badge/Visa-4242%204242%204242%204242-blue?labelColor=blue&color=gray)
![Master](https://img.shields.io/badge/Master-5555%205555%205555%204444-red?labelColor=red&color=gray)
![American Express](https://img.shields.io/badge/American%20Express-3782%20822463%2010005-green?labelColor=green&color=gray)
![Discover](https://img.shields.io/badge/Discover-6011%201111%201111%201117-orange?labelColor=orange&color=gray)
![Diners Club](https://img.shields.io/badge/Diners%20Club-3056%209300%200902%200004-teal?labelColor=teal&color=gray)
![JCB](https://img.shields.io/badge/JCB-3566%200020%202036%200505-pink?labelColor=pink&color=gray)
![Union Pay](https://img.shields.io/badge/Union%20Pay-6200%200000%200000%200005-purple?labelColor=purple&color=gray)

## Screenshots

![Screenshot](./client/public/images/projectshifttalk.png)

## Links

[![Tweet about this](https://img.shields.io/static/v1.svg?label=Tweet%20about%20this&message=🎵&color=blue&logo=twitter&style=social)](https://twitter.com/intent/tweet?text=Check%20out%20this%20Shift%20Talk%20App%20on%20Heroku:%20https://t1p3-4fd94440c532.herokuapp.com/)

- GitHub Repo : [![GitHub Repo](https://img.shields.io/static/v1.svg?label=Shift%20Talk&message=TEAM%20🏁%20ONE&color=informational&logo=github)](https://github.com/Ronin1702/project3)

- Heroku Deployed Link : [![Shift Talk](https://img.shields.io/badge/Shift%20Talk%20-TEAM%20🏁%20ONE-yellow?logo=heroku)](https://t1p3-4fd94440c532.herokuapp.com/)

### TEAM ONE

- [![Portfolio](https://img.shields.io/badge/Portfolio%20-©️%20Ceres%20Markley%20Cook-blue?logo=github)](https://ceresmarkley.github.io/ceres-react-portfolio/#/)
  [![GitHub](https://img.shields.io/badge/GitHub%20-©️%20Ceres%20Markley%20Cook-blue?logo=github)](https://github.com/ceresmarkley/)

- [![Portfolio](https://img.shields.io/badge/Portfolio%20-©️%20Daniel%20Chen-blue?logo=netlify)](https://portfolio-jianxiong.netlify.app/)
  [![GitHub](https://img.shields.io/badge/GitHub%20-©️%20Daniel%20Chen-blue?logo=Github)](https://github.com/CQlove)

- [![Portfolio](https://img.shields.io/badge/Portfolio%20-©️%20Ian%20Vignolles--Jeong-blue?logo=netlify)](https://ornate-faloodeh-6a725d.netlify.app/)
  [![GitHub](https://img.shields.io/badge/GitHub%20-©️%20Ian%20Vignolles--Jeong-blue?logo=Github)](https://github.com/IVignollesJeong)

- [![Portfolio](https://img.shields.io/badge/Portfolio%20-©️%20Kai%20Chen-blue?logo=netlify)](https://kaichen.biz/)
  [![GitHub](https://img.shields.io/badge/GitHub%20-©️%20Kai%20Chen-blue?logo=Github)](https://github.com/ronin1702)

[_back to top_](#table-of-contents)

## License

- This application is licensed by [![MIT](https://img.shields.io/static/v1.svg?label=📃%20License&message=MIT&color=important)](./LICENSE).

[_back to top_](#table-of-contents)

---

[![Copyright](https://img.shields.io/static/v1.svg?label=Shift%20Talk%20©️%20&message=%202023%20TEAM%20ONE&labelColor=informational&color=033450)](https://github.com/orgs/Team-ONE-OSU/repositories)
