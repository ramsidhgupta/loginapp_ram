const mongoose = require("mongoose");

const DB =
  "mongodb+srv://ramsidh:Sidh23360@cluster0.w3eltnp.mongodb.net/cruddata?retryWrites=true&w=majority";

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connection start"))
  .catch((error) => console.log(error.message));
