const dns = require("node:dns");
dns.setServers(["8.8.8.8"], ["8.8.4.4"]);
require("dotenv").config();
const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
// const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
const MONGO_URL = process.env.ATLASDB_URL;

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "69ec5e4b204e015fe1b931ec",
    geometry: {
      type: "Point",
      coordinates: [0, 0],
    },
  }));
  await Listing.insertMany(initData.data);
  console.log("Data was initialised");
};

initDB();
