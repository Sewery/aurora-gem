import { Router } from "express";
import { productsRouter } from "./products";
import { categoriesRouter} from "./categories";

const router = Router();

router.use("/products", productsRouter);
router.use("/categories", categoriesRouter);

export default router;
