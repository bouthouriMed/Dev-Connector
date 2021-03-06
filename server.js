const express = require("express");
const connectDB = require('./config/db');
const path = require('path')

const app = express();

// Connect to database
connectDB();

// Use express bodyParser
app.use(express.json({ extended: false}))


// Use routes
app.use('/api/user', require('./routes/api/userRoute'));
app.use('/api/auth', require('./routes/api/authRoute'));
app.use('/api/profile', require('./routes/api/profileRoute'));
app.use('/api/post', require('./routes/api/postRoute'));

// Serve  static assets in production
if(process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'))

    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}...`))
