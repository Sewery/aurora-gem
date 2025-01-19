import { Request, Response, Router } from "express";
import {
  getByProductId,
  getByCustomerId,
  getById,
  addOpinion,
  updateOpinion,
  deleteOpinion,
} from "../controllers/opinions";
import AuthorizedMiddleware from "./../../authMiddleware"

interface CustomerRequest extends Request {
  customer?: {
      id: number;
      email: string;
  };
}

export const opinionsRouter = Router();
opinionsRouter.get("/product/:id", async (req, res) => {
  const productId = parseInt(req.params.id);
  const result = await getByProductId(productId);
  res.status(200).json({ result });
});
opinionsRouter.get("/customer/", AuthorizedMiddleware, async (req: CustomerRequest, res: Response) => {
  if (!req.customer) {
    res.status(401).json({ error: "Customer not authenticated" });
    return;
  }
  const customerId = req.customer.id; 
  const result = await getByCustomerId(customerId);
  res.status(200).json({ result });
});
opinionsRouter.get("/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const result = await getById(id);
  res.status(200).json({ result });
});
opinionsRouter.post("/",AuthorizedMiddleware, async (req: CustomerRequest, res: Response) => {
  if (!req.customer) {
    res.status(401).json({ error: "Customer not authenticated" });
    return;
  }
  const customerId = req.customer.id; 
  const result = await addOpinion(req.body,customerId);
  res.status(201).json({ result });
});
opinionsRouter.patch("/:id",AuthorizedMiddleware, async (req, res) => {
  const result = await updateOpinion(req.body);
  res.status(200).json({ result });
});
opinionsRouter.delete("/:id",AuthorizedMiddleware, async (req, res) => {
  const id = parseInt(req.params.id);
  await deleteOpinion(id);
  res.status(204);
});
