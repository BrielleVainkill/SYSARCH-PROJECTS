const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
//const router = require('./routes/router')

// Configure dotenv and app-server
dotenv.config();
const app = express();

// .env Variables
const port = process.env.PORT;
const mongoUri = process.env.MONGO_URI;

// Middlewares
app.use(cors());
app.use(express.json());

// Using router
//app.use('/api', router);

// Connect MongodDB
mongoose.connect(`${mongoUri}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  const db = mongoose.connection
  db.on("error", console.error.bind(console, "Connection Error:"));
  db.once("open", () => {
    console.log(`MongoDB Connected: ${mongoUri}`)
  });
  
  // Listen port 
  app.listen(port, () => {
    console.log(`Server running: http://localhost:${port}`);
  });