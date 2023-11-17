// Import required modules
const validateLogin = require('./api/login.js');
const studentExamCards=require('./api/student/examcard.js')
const invigilatorExamCards=require('./api/invigilator/examcard.js')
const express = require('express');
const app=express();
const port=3000;
const cors=require('cors');
// Serve static files from the "public" directory
app.use(express.static('public'));
app.use(cors());

const UserID='21mcs001';

// Endpoint to expose the function
app.get('/api/login',async (req, res) => {
  const role=await validateLogin(req.query);
  res.json({role});
  if(role!='none')
    UserID=req.query.UserID;
});

app.get('/api/student/examcard',async(req,res)=>{
    const exams=await studentExamCards(UserID);
    res.json({exams});
})
app.get('/api/invigilator/examcard',async(req,res)=>{
    const exams=await invigilatorExamCards(UserID);
    res.json({exams});
})

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


