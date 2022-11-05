/**
 * Node-JS Boilerplate
 * @author Shuja Naqvi
 */
require('dotenv').config();
const app = require('express')();
const port = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV || 'dev';
require('./database');

// Middleware
require('./middleware/common')(app);

// API Routes
app.use('/api', require('./routes'));


  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Server is running in ${NODE_ENV} mode on port ` + port);
  });

