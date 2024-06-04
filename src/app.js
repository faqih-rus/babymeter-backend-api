const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nurseRoutes = require('./routes/nurseRoutes');
const authRoutes = require('./auth/routes');
const errorHandler = require('./utils/errorHandler');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/auth', authRoutes);
app.use('/nurse', nurseRoutes);

app.use(errorHandler);

module.exports = app;
