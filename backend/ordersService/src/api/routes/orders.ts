import { Router, Request, Response } from "express";
import { getByCustomerId, getByOrderId } from "../controllers/orders";

export const ordersRouter = Router();

ordersRouter.get("/customer/:customerId", async (req: Request, res: Response) => {
  const customerId = parseInt(req.params.customerId);
  const result = await getByCustomerId(customerId);
  res.status(200).json({ result });
});
ordersRouter.get("/:orderId", async (req: Request, res: Response) => {
  const orderId = parseInt(req.params.orderId);
  const result = await getByOrderId(orderId);
  res.status(200).json({ result });
});
