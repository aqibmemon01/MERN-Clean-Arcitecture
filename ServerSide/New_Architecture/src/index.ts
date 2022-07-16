
const express = require('express');
const app = express();
import ProductRoutes from './features/products/routes/index';

app.use(express.json());
app.use('/api', ProductRoutes);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}...`));