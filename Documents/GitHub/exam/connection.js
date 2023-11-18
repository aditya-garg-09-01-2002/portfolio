const mysql = require('mysql2');
require('dotenv').config();
const express = require('express');
const app=express();
const cors=require('cors');
// Serve static files from the "public" directory
app.use(express.static('public'));
app.use(cors());

// MySQL database configuration
const dbConfig = {
  host: process.env.host, //os module , os.getenv.host
  user: process.env.user,
  password: process.env.password,
  database: process.env.database
};

let connection;

async function connectToDatabase() {
  if (connection) {
    return connection;
  }

  try {
    connection = await mysql.createConnection(dbConfig);
    console.log('Connected to the database');
    return connection;
  } catch (error) {
    console.error('Error connecting to the database:', error.message);
    throw error;
  }
}

module.exports = {
  connectToDatabase,
};




