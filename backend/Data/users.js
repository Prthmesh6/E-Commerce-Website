import bcrypt from "bcryptjs";
const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "sham",
    email: "sham@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "ram",
    email: "ram@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
