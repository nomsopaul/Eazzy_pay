const express = require('express');
const cors = require ('cors');
const mongoose = require('mongoose');

require('dotenv').config();
const app = express();

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());


const DATABASE = process.env.DATABASE;
console.log(DATABASE);
mongoose.connect(DATABASE, {useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false});
//.connect(process.env.DATABASE_LOCAL, {
    const connection = mongoose.connection;
    connection.once('open', function() {
        console.log("mongo db connected");
    })
    const cardRoute = require('./routes/cardRoutes')
     const serviceRoute = require('./routes/serviceRoutes')
     const userserviceRoute = require('./routes/userserviceRoutes')
    const eazzysaveRoute = require('./routes/eazzysaveRoutes')

app.use('/api/v1/card', cardRoute)
app.use('/api/v1/service', serviceRoute)
app.use('/api/v1/userservice', userserviceRoute)
app.use('/api/v1/eazzysave', eazzysaveRoute)

app.listen(port, () => {
    console.log(`app running on port ${port}...`);
})
