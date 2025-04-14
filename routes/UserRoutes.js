import express from 'express';
import { registersUser } from '../controller/UserController.js';

const router = express.Router()

router.get("/register", registersUser)

export default router;