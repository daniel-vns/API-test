const mongoose = require("mongoose");

async function main() {
  try {
    await mongoose.connect(
      "mongodb+srv://daniel:daniel123@clusterjalasoft.ejrlzol.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("connected to DataBase!");
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

module.exports = main;
