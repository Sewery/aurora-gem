import { Router } from "express";
import { ordersRouter } from "./orders";

const router = Router();

router.use("/orders", ordersRouter);

export default router;
