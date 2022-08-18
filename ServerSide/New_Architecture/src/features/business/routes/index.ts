import express from 'express';
const router = express.Router();
import BusinessController from '../controller';

router.get('/getAll', BusinessController.getAll)
router.post('/create', BusinessController.create)
router.put('/update', BusinessController.update)
router.delete('/delete', BusinessController.delete)

export default router;