const express = require('express');
const { dbConnection } = require('./config/config');
const routes = require('./routes');
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./docs');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use('/', routes);

dbConnection();

app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));
