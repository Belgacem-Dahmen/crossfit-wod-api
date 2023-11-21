const express = require('express');
const workoutRoutes = require('./v1/routes/workoutRoutes')
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use("/api/v1/workouts", workoutRoutes);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})