import express from 'express';

import { getAllCategories } from '../controllers/Category';

const router = express.Router();

router.get('/', getAllCategories);

export default router;
