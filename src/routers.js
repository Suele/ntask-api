import express from 'express';
import TaskController from './TaskController';
import UserController from './UserController';
import verifyToken from './verifyAuth';
const router = express.Router();

router.post('/user/register', UserController.checksUser);
router.post('/user/authenticate', UserController.authenticationUser);
router.use(verifyToken);
router.get('/', TaskController.showTask);
router.post('/', TaskController.createTask);
router.put('/:idTask', TaskController.changeTask);
router.delete('/:idTask', TaskController.deleteTask);

export default router;
