const express = require('express')
const app = express()
const http = require('http')
const bodyParser = require('body-parser')
const mongoose = require('mongoose') //mongo db library
const cors = require('cors') //Cors will let us accept cross origin request from our frontend to backend.
const dotenv = require('dotenv') //for keep secret and non shareable properies
const multer = require('multer') //Multer is a middleware that will let us handle multipart/form data sent from our frontend form.
const morgan = require('morgan') //used to log information of each request that server receives.
var forms = multer();
// const config = require('./config');



const server = http.createServer(app)

//api configuration
app.use(express.json({extended : true}))
app.use(express.urlencoded({extended : true}))
app.use(forms.array()); 
app.use(bodyParser.json({limit : '30mb', extended : true}))
app.use(bodyParser.urlencoded({limit : '30mb', extended : true}))
app.use(morgan("common"))
dotenv.config()

//allow cross origin policy
app.use(cors());
app.use(function(req, res,next){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'content-type');
    next();
});
//root config
// const patientRoute = require('./routes/authroutes.js');
// app.use('/patient', patientRoute );
// const routes = require('./routes/routes');
// // const JWT_SECRET =
// //   "hvdvay6ert72839289()aiyg8t87qt72393293883uhefiuh78ttq3ifi78272jbkj?[]]pou89ywe";

// app.use('/test',routes);

// const FormRoute = require('./routes/requestForm.js')
// app.use('/form',FormRoute)


const authRoutes = require('./routes/authroutes.js');
app.use('/auth', authRoutes);



const PatientSchema=require('./models/user')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const session =require('express-session')


// const users = [];

// app.post('/register', (req, res) => {
//   const { FirstName, LastName, Nic, EmailAddress, Address, Gender, City, Dob, GuardianName, Password } = req.body;

//   // Check if email already exists
//   if (users.some(user => user.EmailAddress === EmailAddress)) {
//     res.status(409).send('Email already exists');
//     return;
//   }

//   // Validate email format
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (!emailRegex.test(EmailAddress)) {
//     res.status(400).send('Invalid email format');
//     return;
//   }

//   // Add user to database
//   users.push({ FirstName, LastName, Nic, EmailAddress, Address, Gender, City, Dob, GuardianName, Password });

//   // Redirect to login page
//   res.redirect('http://localhost:3000/login');
// });






app.use(
    session({
      secret: "my secret",
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 3600000, // cookie will expire after 1 hour
      },
    })
  );



  app.post("/login-user", async (req, res) => {
    const { EmailAddress,Password } = req.body;
  
    // find user by email
    const user = await PatientSchema.findOne({ EmailAddress: EmailAddress });
  
    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" });
    }
  
    // compare password hash
    if (Password === user.Password) {
      return res.json({ FirstName: user.FirstName, LastName: user.LastName,Nic: user.Nic,EmailAddress: user.EmailAddress,Address: user.Address,Gender: user.Gender,City: user.City,Dob: user.Dob,GuardianName: user.GuardianName,createdAt:user.createdAt });
    } else {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    // if(isValidPassword){
               
    //   return res.json({ FirstName: user.FirstName, LastName: user.LastName,Nic: user.Nic,EmailAddress: user.EmailAddress,Address: user.Address,Gender: user.Gender,City: user.City,Dob: user.Dob,GuardianName: user.GuardianName });
    //     } else {
    //       return res.status(400).json({ message: 'Invalid password' });
    //     }
    
  
    // // set the user session variable
    // req.session.user = user;
  
    // // return a success message
    // res.json({ status: "ok" });
  });


  // app.delete('/authRedirect/deleteAccount/:EmailAddress', async (req, res) => {
  //   try {
  //     const EmailAddress = req.params.EmailAddress;
  //     const user = await PatientSchema.findOne({ EmailAddress });
  
  //     if (!user) {
  //       return res.status(404).send({ message: 'User not found' });
  //     }
  
  //     await PatientSchema.deleteOne({ EmailAddress });
  
  //     return res.status(200).send({ message: 'User account deleted successfully' });
  //   } catch (error) {
  //     console.error(error);
  //     return res.status(500).send({ message: 'Internal server error' });
  //   }
  // });

  app.get('/authRedirect/checkEmail/:EmailAddress', async (req, res) => {
    try {
      const { EmailAddress } = req.params;
      const user = await PatientSchema.findOne({ EmailAddress });
  
      if (user) {
        res.status(200).json({ message: 'Email exists in database' });
      } else {
        res.status(404).json({ message: 'Email not found in database' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

  // app.get('/auth/report/:email', async (req, res) => {
  //   try {
  //     // Retrieve profile details data from database for the given email
  //     const profiles = await PatientSchema.find({ EmailAddress: req.params.EmailAddress });
  
  //     // If no profiles found, return an error
  //     if (profiles.length === 0) {
  //       return res.status(404).json({ error: 'No profiles found for the given email' });
  //     }
  
  //     // Format profile details data into a report
  //     const reportData = profiles.map(profile => ({
  //       FirstName:profile.FirstName,
  //       LastName:profile.LastName,
  //       EmailAddress:profile.EmailAddress,
  //       Gender:profile.Gender,
  //       GuardianName:profile.GuardianName,

  //       created_at: profile.created_at,
  //     }));
  
  //     // Return report data as a CSV file
  //     res.setHeader('Content-Disposition', `attachment; filename=${req.params.EmailAddress}_profiles.csv`);
  //     res.setHeader('Content-Type', 'text/csv');
  //     res.csv(reportData, true);
  
  //   } catch (err) {
  //     console.error(err);
  //     res.status(500).json({ error: 'Internal server error' });
  //   }
  // });

  app.delete('/auth/deleteProfile/:email', (req, res) => {
    const email = req.params.email;
  
    // Find the user profile based on the provided email address
    PatientSchema.findOneAndDelete({ EmailAddress: email }, (err, deletedProfile) => {
      if (err) {
        return res.status(500).json({ message: err.message });
      }
  
      if (!deletedProfile) {
        return res.status(404).json({ message: 'Profile not found' });
      }
  
      res.status(200).json({ message: 'Profile deleted successfully' });
    });
  });
  

  app.get('/auth/getProfile/:email', (req, res) => {
    const { email } = req.params;
  
    // Find the user profile based on the provided email address
    PatientSchema.findOne({ EmailAddress: email }, (err, userProfile) => {
      if (err) {
        return res.status(500).json({ message: err.message });
      }
  
      if (!userProfile) {
        return res.status(404).json({ message: 'Profile not found' });
      }
  
      res.status(200).json(userProfile);
    });
  });

  //search function

// const axios = require("axios");
// const debounce = require("lodash/debounce");


// // const app = express();
// const API_KEY = "ef94599cd4fc441d98fd0fa8c357dee2";

// app.use(express.json());

// app.get("/cities", debounce((req, res) => {
//   const { searchTerm } = req.query;

//   try {
//     const response = await axios.get(
//       `https://api.opencagedata.com/geocode/v1/json?q=${searchTerm}&countrycode=LK&key=${API_KEY}`
//     );
//     const data = response.data;
//     const results = data.results || [];

//     const suggestions = results.map((suggestion) => ({
//       place_id: suggestion.place_id,
//       formatted: suggestion.formatted,
//     }));

//     res.json(suggestions);
//   } catch (error) {
//     console.error("Failed to fetch suggestions", error);
//     res.status(500).json({ error: "Failed to fetch suggestions" });
//   }
// }), 300);








//mongo setup
const PORT = process.env.PORT
mongoose.set('strictQuery', true)
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        server.listen(PORT, () => {console.log(`server running on port ${PORT}`);})
    })
    .catch((err) => {console.log(err);})


