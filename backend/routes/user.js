import express from 'express';
import userControllers from '../controllers/user.js';
const router = express.Router();

//rest API
router.route('/').get(userControllers.handleGetAllUsers).post(userControllers.handleCreateUser);
router
.route('/:id')
.get(userControllers.handleGetUserById)
.patch(userControllers.handleUpdateUserById)
.delete(userControllers.handleDeleteUserById);

export default router;