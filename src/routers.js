import express from 'express';
import controller from './controller';
const router = express.Router();

router.get('/', controller.showTask);

router.post('/', controller.createTask);
router.put('/', controller.changeTask);
router.delete('/', controller.deleteTask);
router.get('/', controller.checksUser);

controller
export default router;