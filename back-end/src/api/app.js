const express = require('express');
const cors = require('cors');
const LoginRoute = require('./routes/LoginRoute');
const RegisterRoute = require('./routes/RegisterRoute');
const ProductsRoute = require('./routes/ProductsRoute');
const CheckoutRoute = require('./routes/CheckoutRoute');
const OrdersRoute = require('./routes/OrdersRoute');
const AdminRoute = require('./routes/AdminRoute');

const { midErr } = require('./middleware/error');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use(LoginRoute);
app.use(RegisterRoute);
app.use(ProductsRoute);
app.use(OrdersRoute);
app.use(CheckoutRoute);
app.use(AdminRoute);

app.use(midErr);

module.exports = app;
