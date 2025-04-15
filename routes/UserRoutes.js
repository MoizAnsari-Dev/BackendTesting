import express from 'express';
import { registersUser } from '../controller/UserController.js';

const router = express.Router()

router.post("/register", registersUser)

export default router;