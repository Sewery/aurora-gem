import { Router } from "express";
import {
  getByProductId,
  getByCustomerId,
  getById,
  addOpinion,
  updateOpinion,
  deleteOpinion,
} from "../controllers/opinions";

export const opinionsRouter = Router();

opinionsRouter.get("/product/:id", async (req, res) => {
  const productId = parseInt(req.params.id);
  const result = await getByProductId(productId);
  res.status(200).json({ result });
});
opinionsRouter.get("/customer/:id", async (req, res) => {
  const customerId = parseInt(req.params.id);
  const result = await getByCustomerId(customerId);
  res.status(200).json({ result });
});
opinionsRouter.get("/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const result = await getById(id);
  res.status(200).json({ result });
});
opinionsRouter.post("/", async (req, res) => {
  const result = await addOpinion(req.body);
  res.status(201).json({ result });
});
opinionsRouter.patch("/:id", async (req, res) => {
  const result = await updateOpinion(req.body);
  res.status(200).json({ result });
});
opinionsRouter.delete("/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  await deleteOpinion(id);
  res.status(204);
});
