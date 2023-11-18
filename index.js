// Import packages
const express = require("express");
const home = require("./routes/home");

// Middlewares
const app = express();
app.use(express.json());

// Routes

app.use('/', express.static('routes'));
app.use("/", home);
app.use('/', express.static('homes'));
app.use('/', express.static('homes/index'));


// connection
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));
