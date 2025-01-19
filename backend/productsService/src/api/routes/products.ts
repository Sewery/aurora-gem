import { Router, Request, Response } from "express";
import { getAll, getById,getByCategoryId, getByCategoryName } from "../../api/controllers/products";

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
productsRouter.get("/categoryId/:id", async (req: Request, res: Response) => {
  const categoryId = parseInt(req.params.id);
  const result = await getByCategoryId(categoryId);
  res.status(200).json({ result });
});
productsRouter.get("/category/:name", async (req: Request, res: Response) => {
  const categoryName = req.params.name;
  const result = await getByCategoryName(categoryName);
  res.status(200).json({ result });
});