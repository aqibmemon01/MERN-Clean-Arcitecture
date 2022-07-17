
import ProductRoutes from './features/products/routes/index';
import express from 'express';

const app = express();

app.use(express.json());
app.use('/api', ProductRoutes);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}...`));