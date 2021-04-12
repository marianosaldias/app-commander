const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

const {mongoose} = require('./database');

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
//app.use(cors({origin: 'http://localhost:4200'}));
app.use(cors({origin: ['http://localhost:4200','http://127.0.0.1:8080']}));

// Routes
app.use('/api/users', require('./routes/users.routes'));
app.use('/api/products', require('./routes/products.routes'));
app.use('/api/orders', require('./routes/orders.routes'));
app.use('/api/tables', require('./routes/tables.routes'));
app.use('/api/histories', require('./routes/histories.routes'));

app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'))
})
