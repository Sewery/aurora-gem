import { Router, Request, Response } from "express";
import { getByCustomerId, getByOrderId, postOrder } from "../controllers/orders";
import AuthorizedMiddleware from "./../../authMiddleware"
export const ordersRouter = Router();

interface CustomerRequest extends Request {
  customer?: {
      id: number;
      email: string;
  };
}
ordersRouter.use(AuthorizedMiddleware)
ordersRouter.get("/customer/" ,async (req:CustomerRequest, res: Response) => {
  if (!req.customer) {
    res.status(401).json({ error: "Customer not authenticated" });
    return;
  }
  const customerId = req.customer.id; 
  const result = await getByCustomerId(customerId);
  res.status(200).json({ result });
});
ordersRouter.get("/:orderId", async (req: CustomerRequest, res: Response) => {
  const orderId = parseInt(req.params.orderId);
  const result = await getByOrderId(orderId);
  res.status(200).json({ result });
});

ordersRouter.post("/", async (req: CustomerRequest, res: Response) => {
  if (!req.customer) {
    res.status(401).json({ error: "Customer not authenticated" });
    return;
  }
  const customerId = req.customer.id; 
  const result = await postOrder(req.body,customerId);
  res.status(201).json({ result });
});

