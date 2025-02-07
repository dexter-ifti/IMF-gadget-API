const express = require('express');
const swaggerUI = require('swagger-ui-express');
const swaggerFile = require('./swagger-output.json');
const app = express();

app.use(express.json());
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerFile));
app.use('/api', require('./routes'));

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})