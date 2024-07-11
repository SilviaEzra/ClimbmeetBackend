import { Router } from "express";
import { newUser, loginUser, updateUser, getUserProfile } from "../controllers/user";

const router = Router();

router.post('/register', newUser);
router.post('/login', loginUser);
router.put('/update', updateUser);
router.get('/profile', getUserProfile);

export default router;
