import express, { Request, Response } from 'express';
import { requireAuth } from '@as_udemy_microservices/common';
import { Order } from '../models/order';

const router = express.Router();

router.get('/api/orders', requireAuth, async (req: Request, res: Response) => {
  // const orders = await Order.find({
  //   userId: req.currentUser!.id,
  // }).populate('ticket');

  const orders = await Order.find().populate('ticket');

  res.send(orders);
});

export { router as indexOrderRouter };