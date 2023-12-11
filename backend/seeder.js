import mongoose from "mongoose";

import dotenv from "dotenv";

import users from "./Data/users.js";
import User from "./models/userModels.js";

import products from "./Data/products.js";
import Products from "./models/productModels.js";

import Order from "./models/orderModels.js";

import connectDB from "./config/db.js";

dotenv.config();
connectDB();

const importData = async () => {
  try {
    await Order.deleteMany();
    await Products.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);

    const adminUser = createdUsers[0]._id;

    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });

    await Products.insertMany(sampleProducts);

    console.log("Data Imported !");

    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Products.deleteMany();
    await User.deleteMany();

    console.log("Data destroyed !");

    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

if (process.argv[2] == "-d") {
  destroyData();
} else {
  importData();
}
