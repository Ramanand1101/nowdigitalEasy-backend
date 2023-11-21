// server.js
const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require("./confiq/db");
const userRoutes = require('./router/userRouter');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB


app.use(bodyParser.json());
app.get("/",(req,res)=>{
  res.send("<h1>Welcome to the API</h1>");
})

// Routes
app.use('/api', userRoutes);

app.listen(PORT, async () => {
  try {
    await connectDB
    console.log("Database connected Successfully")
  }
  catch (err) {
    console.error(err.message)
    process.exit(1)
  }
  console.log(`Server is running on port ${PORT}`);
});




