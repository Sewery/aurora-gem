import { Router, Request, Response } from "express";
import { getAll, getById } from "../../api/controllers/products";

export const productsRouter = Router();

productsRouter.get("/", async (_, res) => {
  const result = await getAll();
  res.status(200).json({ result });
});
productsRouter.get("/:id", async (req: Request, res: Response) => {
  const productId = parseInt(req.params.id);
  const result = await getById(productId);
  res.status(200).json({ result });
});
