
import ProductRoutes from './features/products/routes/index';
import BusinessRoutes from './features/business/routes/index';
import express from 'express';

const app = express();

app.use(express.json());
app.use('/api/product', ProductRoutes);
app.use('/api/business', BusinessRoutes);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}...`));