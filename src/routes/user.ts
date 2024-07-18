// src/routes/user.ts
import { Router } from 'express';
import { newUser, loginUser, updateUser, getUserProfile } from '../controllers/user';
import authenticateJWT from '../middleware/authMiddleware';
import upload from '../middleware/upload';

const router = Router();

router.post('/register', newUser);
router.post('/login', loginUser);
router.put('/profile', authenticateJWT, upload.single('profileImage'), updateUser);
router.get('/profile', authenticateJWT, getUserProfile);

export default router;
