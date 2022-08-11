// Set Up Connection to MongoDB

const mongoose = require(`mongoose`);

const mongoDB = `mongodb://localhost/Fisrt_App`;

mongoose
  .connect(mongoDB, { useNewUrlParser: true })
  .then(() => console.log(`mongoDB Connected`));

mongoose.Promise = global.Promise;

module.exports = mongoose;
