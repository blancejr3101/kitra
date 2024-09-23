


const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware
app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Routes
const treasureRoute = require('./routes/treasure.route');
const userRoute = require('./routes/users.route');


app.use('/api/treasure', treasureRoute);
app.use('/api/user', userRoute);


// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});