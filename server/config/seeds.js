const db = require('./connection');
const { User, Product, Category } = require('../models');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  await cleanDB('Category', 'categories');
  await cleanDB('Product', 'products');
  await cleanDB('User', 'users');

  const categories = await Category.insertMany([
    { name: 'TIPS' },
    { name: 'PROJECTS' },
    { name: 'RENT A PRO' },
  ]);

  console.log('categories seeded');

  const products = await Product.insertMany([
    {
      name: 'Donut',
      description: `"Doughnuts are much better with friends." - Homer Simpson`,
      image: 'donut.svg',
      category: categories[0]._id,
      price: 2.99,
      quantity: 420,
    },
    {
      name: 'Coffee',
      description: `"If it wasn't for the coffee, I'd have no identifiable personality whatsoever." - David Letterman`,
      image: 'coffee.svg',
      category: categories[0]._id,
      price: 4.99,
      quantity: 710,
    },
    {
      name: 'Pizza',
      category: categories[0]._id,
      description: `"It's not pizza, it's a casserole," Jon Stewart says of Chicago's deep-dish delight.`,
      image: 'pizza.svg',
      price: 9.99,
      quantity: 20,
    },
    {
      name: 'Project krapyak',
      category: categories[1]._id,
      description: `"Status- OPEN. This is our team's first project called krapyak, where a user is empowered with the knowledge of the worst businesses in a selected area, the user also can locate themselves with this app. Right now we need to raise enough money to purchase the domain name and host the website.`,
      image: 'projectkrapyak.png',
      price: 0.99,
      quantity: 777,
    },
    {
      name: 'Project Maryze',
      category: categories[1]._id,
      description: `"Status- OPEN. This is our team's second project called Maryze, where a user is empowered with the knowledge of the worst businesses in a selected area, the user also can locate themselves with this app. Right now we need to raise enough money to purchase the domain name and host the website.`,
      image: 'projectmaryze.png',
      price: 0.99,
      quantity: 777,
    },
    {
      name: 'Project Shift Talk',
      category: categories[1]._id,
      description: `"Status- OPEN. This is our team's third project called Shift Talk, where users can interact with each other under a specific car model, save their comments and replies, also hire a qualified tech to help them with their car problems.`,
      image: 'projectshifttalk.png',
      price: 0.99,
      quantity: 777,
    },
    {
      name: 'Kai',
      category: categories[2]._id,
      description: `"My name is Kai, I am a full stack web developer, I will be graduating from the OSU Coding Boot Camp this October. Please feel free to contact me if you have any questions or concerns. Thank you for visiting my page @ https://kaichen.biz"`,
      image: 'kai.png',
      price: 59.99,
      quantity: 35,
    },
    {
      name: 'Ceres',
      category: categories[2]._id,
      description: `"My name is Ceres, I am a full stack web developer, I will be graduating from the OSU Coding Boot Camp this October. Please feel free to contact me if you have any questions or concerns. Thank you for visiting my page @ https://ceresmarkley.github.io/ceres-react-portfolio/"`,
      image: 'ceres.png',
      price: 59.99,
      quantity: 35,
    },
    {
      name: 'Ian',
      category: categories[2]._id,
      description: `"My name is Ian, I am a full stack web developer, I will be graduating from the OSU Coding Boot Camp this October. Please feel free to contact me if you have any questions or concerns. Thank you for visiting my page @ https://ornate-faloodeh-6a725d.netlify.app/"`,
      image: 'ian.png',
      price: 59.99,
      quantity: 35,
    },
    {
      name: 'Daniel',
      category: categories[2]._id,
      description: `"My name is Daniel, I am a full stack web developer, I will be graduating from the OSU Coding Boot Camp this October. Please feel free to contact me if you have any questions or concerns. Thank you for visiting my page @ https://portfolio-jianxiong.netlify.app/"`,
      image: 'daniel.png',
      price: 59.99,
      quantity: 35,
    },
  ]);

  console.log('products seeded');

  await User.create({
    username: 'Kai',
    email: 'kai@team1.com',
    password: 'wethebest',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id],
      },
    ],
  });

  await User.create({
    username: 'Ceres',
    email: 'ceres@team1.com',
    password: 'wethebest',
  });

  await User.create({
    username: 'Ian',
    email: 'ian@team1.com',
    password: 'wethebest',
  });

  await User.create({
    username: 'Daniel',
    email: 'daniel@team1.com',
    password: 'wethebest',
  });

  console.log('users seeded');

  process.exit();
});
