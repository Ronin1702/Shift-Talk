# 🏁 SHIFT 🗣️ TALK [![MIT](https://img.shields.io/static/v1.svg?label=📃%20License&message=MIT&color=important&&style=plastic)](./LICENSE)

**Shift Talk** is an automobile enthusiasts social website where a user can create an account, login, and post about about their favorite or _least_ favorite cars. The user can also view other users posts and comment on them. The user can also delete their own posts and comments.

**Shift Talk** also offers a _Pro Shop_ where a registered user can purchase merchandise, donate, or hire a Pro. The user can also view their order history.

This app is also deployed to _[Heroku](https://https://t1p3-4fd94440c532.herokuapp.com//)_ on [![Shift Talk](https://img.shields.io/badge/Shift%20Talk%20-©️%20TEAM%20🏁%20ONE-yellow?logo=heroku&logoColor=430098&style=plastic)](https://t1p3-4fd94440c532.herokuapp.com/)

## Table of Contents

- [Description](#description)
- [Tech Stack](#tech-stack)
  - [Backend](#backend-server-side)
  - [Frontend](#frontend-client-side)
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

### Backend (Server-Side)

| Main Tech| Related Technologies |
| - | - |
| [![MongoDB](https://img.shields.io/badge/MongoDB-6.1.0-47A248?logo=mongodb&style=plastic)](https://www.mongodb.com/) | [![Mongoose](https://img.shields.io/badge/Mongoose-7.5.3-880000?logo=mongoose&logoColor=880000&style=plastic)](https://mongoosejs.com/)|
|[![Express.js](https://img.shields.io/badge/Express.js-4.18.2-black?logo=express&style=plastic)](https://expressjs.com/)||
| [![Node.js](https://img.shields.io/badge/Node.js-20.8.1-339933?logo=node.js&style=plastic)](https://nodejs.org/en/)|[![Concurrently](https://img.shields.io/badge/Concurrently-5.1.0-CB3837?logo=npm&style=plastic)](https://www.npmjs.com/package/concurrently) <br> [![Nodemon](https://img.shields.io/badge/Nodemon-3.0.1-76D04B?logo=nodemon&style=plastic)](https://www.npmjs.com/package/nodemon) |
| [![GraphQL](https://img.shields.io/badge/GraphQL-16.8.1-E10098?logo=graphql&logoColor=E10098&style=plastic)](https://graphql.org/)| [![Apollo Server](https://img.shields.io/badge/Apollo%20Server-4.9.3-311C87?logo=apollo-graphql&logoColor=311C87&style=plastic)](https://www.apollographql.com/docs/apollo-server/)|
| [![Bcrypt](https://img.shields.io/badge/Bcrypt-5.1.1-CB3837?logo=npm&style=plastic)](https://www.npmjs.com/package/bcrypt)||
| [![jsonwebtoken](https://img.shields.io/badge/jsonwebtoken-9.0.2-000000?logo=jsonwebtokens&logoColor=000000&style=plastic)](https://www.npmjs.com/package/jsonwebtoken) | [![JWT Decode](https://img.shields.io/badge/JWT%20Decode-3.1.2-000000?logo=jsonwebtokens&logoColor=000000&style=plastic)](https://www.npmjs.com/package/jwt-decode)|

### Frontend (Client-Side)

| Main Tech | Related Technologies|
| - | - |
| [![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white&style=plastic)](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5) ||
| [![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&style=plastic)](https://developer.mozilla.org/en-US/docs/Web/CSS)||
| [![Javascript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&style=plastic)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)||
| [![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react&style=plastic)](https://reactjs.org/)| [![React-DOM](https://img.shields.io/badge/React--DOM-18.2.0-61DAFB?logo=react&style=plastic)](https://reactjs.org/) <br> [![React Router DOM](https://img.shields.io/badge/React%20Router%20DOM-6.16.0-CA4245?logo=react-router&style=plastic)](https://reactrouter.com/) <br> [![Apollo Client](https://img.shields.io/badge/Apollo%20Client-3.8.4-311C87?logo=apollo-graphql&logoColor=311C87&style=plastic)](https://www.apollographql.com/docs/)|
| [![Vite](https://img.shields.io/badge/Vite-4.4.9-646CFF?logo=vite&style=plastic)](https://vitejs.dev/)| [![Vite React Plugin](https://img.shields.io/badge/Vite%20React%20Plugin-4.1.0-646CFF?logo=vite&style=plastic)](https://vitejs.dev/)|
| [![Stripe](https://img.shields.io/badge/Stripe-13.8.0-008CDD?logo=stripe&style=plastic)](https://stripe.com/)| [![Stripe.js](https://img.shields.io/badge/Stripe.js-2.1.7-008CDD?logo=stripe&style=plastic)](https://stripe.com/docs/js)|
| [![Redux](https://img.shields.io/badge/Redux-4.2.1-764ABC?logo=redux&logoColor=764ABC&style=plastic)](https://redux.js.org/)| [![Redux Toolkit](https://img.shields.io/badge/Redux%20Toolkit-1.9.6-764ABC?logo=redux&logoColor=764ABC&style=plastic)](https://redux-toolkit.js.org/) <br> [![React Redux](https://img.shields.io/badge/React%20Redux-8.1.3-764ABC?logo=redux&logoColor=764ABC&style=plastic)](https://react-redux.js.org/)|
| [![webpack Package](https://img.shields.io/badge/Webpack-5.89.0-8DD6F9?logo=webpack&style=plastic)](https://webpack.js.org/)|[![workbox-core](https://img.shields.io/badge/workbox--core-7.0.0-8DD6F9?logo=webpack&style=plastic)](https://www.npmjs.com/package/workbox-core) <br> [![workbox-expiration](https://img.shields.io/badge/workbox--expiration-7.0.0-8DD6F9?logo=webpack&style=plastic)](https://www.npmjs.com/package/workbox-expiration) <br> [![workbox-precaching](https://img.shields.io/badge/workbox--precaching-7.0.0-8DD6F9?logo=webpack&style=plastic)](https://www.npmjs.com/package/workbox-precaching) <br> [![workbox-routing](https://img.shields.io/badge/workbox--routing-7.0.0-8DD6F9?logo=webpack&style=plastic)](https://www.npmjs.com/package/workbox-routing) <br> [![workbox-strategies](https://img.shields.io/badge/workbox--strategies-7.0.0-8DD6F9?logo=webpack&style=plastic)](https://www.npmjs.com/package/workbox-strategies) |

[_back to top_](#table-of-contents)

## Installation

1. Packages to support this application can be installed by using [_npm install_](https://docs.npmjs.com/cli/v9/commands/npm-install) commands.

   > **Note**: If you do not have a `package.json` in your directory already, enter command below to [_initiate_](https://docs.npmjs.com/cli/v9/commands/npm-init).
   >
   > ```powershell
   > npm init -y
   > ```

2. **Important**: Please install the **EXACT** versions as shown above to ensure the functionality of this application.

   - Main Project:

     ```powershell
     npm i concurrently@5.1.0 --save-dev
     &&
     npm i workbox-core@7.0.0 workbox-expiration@7.0.0 workbox-precaching@7.0.0 workbox-routing@7.0.0 workbox-strategies@7.0.0 workbox-sw@7.0.0 workbox-webpack-plugin@7.0.0
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
   MONGODB_URI=mongodb+srv://<username>:<password>@<cluster-name>.<projectCode>.mongodb.net/<collection-name>;
   SECRET=<SECRET-TO-JWT>;
   STRIPE_SECRET_KEY=<Your_own_test_key_or_use_this_one:sk_test_4eC39HqLyjWDarjtT1zdp7dc>;
   ```

   If you've decided to use the default `stripe secret key` then please use the matching `publishable key` in the frontend below:

   ```javascript
   const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');
   ```

4. **BUILD, SEED, PREVIEW**: Please run the following command in the `ROOT` directory to build, seed, preview the application for a production preview.

   ```powershell
   npm run build && npm run seed && npm run preview
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
  THEN I see HOME, Login, Signup on the navbar and a search bar for cars. As well as a PWA download option next to the URL input bar in your browser.

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

  WHEN I am want to keep working on the platform offline
  THEN I can download/open the app by clicking on the PWA download/open button in the URL input box.

  WHEN I am done with the platform and decide to log out
  THEN I can securely log out.
  ```

### Stripe Test

If you would like to test the Stripe payment, feel free to use the following [testing credit card numbers](https://stripe.com/docs/testing?testing-method=card-numbers) provided by [Stripe Docs](https://stripe.com/docs) with any future date and any 3 digit CVC code (4 for American Express).

![Visa](https://img.shields.io/badge/4242%204242%204242%204242-gray?labelColor=1A1F71&color=gray&logo=visa&style=plastic)
![Master](https://img.shields.io/badge/5555%205555%205555%204444-gray?labelColor=EB001B&color=gray&logo=mastercard&style=plastic)
![American Express](https://img.shields.io/badge/3782%20822463%2010005-gray?labelColor=2E77BC&color=gray&logo=americanexpress&logoColor=white&style=plastic)
![Discover](https://img.shields.io/badge/6011%201111%201111%201117-orange?labelColor=FF6000&color=gray&logo=discover&logoColor=white&style=plastic)
![Diners Club](https://img.shields.io/badge/Diners%20Club-3056%209300%200902%200004-teal?labelColor=teal&color=gray&style=plastic)
![JCB](https://img.shields.io/badge/3566%200020%202036%200505-pink?labelColor=0B4EA2&color=gray&logo=jcb&style=plastic)
![Union Pay](https://img.shields.io/badge/Union%20Pay-6200%200000%200000%200005-gray?labelColor=darkblue&color=gray&style=plastic)

## Screenshots

![HOME page](./client/public/images/projectshifttalk.png)

## Links

[![Tweet about this](https://img.shields.io/static/v1.svg?label=Tweet%20about%20this&message=🎵&color=blue&logo=twitter&style=social)](https://twitter.com/intent/tweet?text=Check%20out%20this%20Shift%20Talk%20App%20on%20Heroku:%20https://t1p3-4fd94440c532.herokuapp.com/)

- GitHub Repo : [![GitHub Repo](https://img.shields.io/static/v1.svg?label=Shift%20Talk&message=TEAM%20🏁%20ONE&color=informational&logo=github&logoColor=181717&style=plastic)](https://github.com/Ronin1702/project3)

- Heroku Deployed Link : [![Shift Talk](https://img.shields.io/badge/Shift%20Talk%20-TEAM%20🏁%20ONE-yellow?logo=heroku&logoColor=430098&style=plastic)](https://t1p3-4fd94440c532.herokuapp.com/)

### TEAM ONE

- [![Portfolio](https://img.shields.io/badge/Portfolio%20-©️%20Ceres%20Markley%20Cook-222222?logo=github&style=plastic)](https://ceresmarkley.github.io/ceres-react-portfolio/#/)
  [![GitHub](https://img.shields.io/badge/GitHub%20-©️%20Ceres%20Markley%20Cook-181717?logo=github&style=plastic)](https://github.com/ceresmarkley/)

- [![Portfolio](https://img.shields.io/badge/Portfolio%20-©️%20Daniel%20Chen-00C7B7?logo=netlify&style=plastic)](https://portfolio-jianxiong.netlify.app/)
  [![GitHub](https://img.shields.io/badge/GitHub%20-©️%20Daniel%20Chen-181717?logo=Github&style=plastic)](https://github.com/CQlove)

- [![Portfolio](https://img.shields.io/badge/Portfolio%20-©️%20Ian%20Vignolles--Jeong-00C7B7?logo=netlify&style=plastic)](https://ornate-faloodeh-6a725d.netlify.app/)
  [![GitHub](https://img.shields.io/badge/GitHub%20-©️%20Ian%20Vignolles--Jeong-181717?logo=Github&style=plastic)](https://github.com/IVignollesJeong)

- [![Portfolio](https://img.shields.io/badge/Portfolio%20-©️%20Kai%20Chen-1BDBDB?logo=godaddy&style=plastic)](https://kaichen.biz/)
  [![GitHub](https://img.shields.io/badge/GitHub%20-©️%20Kai%20Chen-181717?logo=Github&style=plastic)](https://github.com/ronin1702)

[_back to top_](#table-of-contents)

## License

- This application is licensed by [![MIT](https://img.shields.io/static/v1.svg?label=📃%20License&message=MIT&color=important&style=plastic)](./LICENSE).

[_back to top_](#table-of-contents)

---

[![Copyright](https://img.shields.io/static/v1.svg?label=🏁%20Shift%20Talk%20©️%20&message=%202023%20TEAM%20ONE&labelColor=informational&color=033450&style=plastic)](https://github.com/orgs/Team-ONE-OSU/repositories)
