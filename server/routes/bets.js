import express from 'express';

import { getBets, createBet } from '../controllers/bets.js'

const router = express.Router();

router.get('/', getBets);
router.post('/', createBet);

export default router;


