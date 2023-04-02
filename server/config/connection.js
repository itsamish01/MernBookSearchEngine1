const mongoose = require('mongoose');

const user = 'amish02';
const password = 'bootcamp';
const dbName = 'mernbooksearch';

// Construct the MongoDB Atlas connection string
const uri = `mongodb+srv://${user}:${password}@cluster0.mongodb.net/${dbName}?retryWrites=true&w=majority`;

// Connect to MongoDB Atlas
mongoose.connect(
  process.env.MONGODB_URI || uri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

module.exports = mongoose.connection;
