require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const upload = require('express-fileupload');

const routes = require('./routes');

const app = express();
const port = process.env.PORT || 3000;

// app.set('view engine', 'ejs');
app.use(upload());
app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use('/api', routes);

app.use((req, res) => {
  res.status(404).json({ error: 'page not found' });
});

app.listen(port, () => {
  console.log(`server listening on port: ${port}`);
});
