import { Router } from "express";
import { ordersRouter } from "./orders";
// import AuthorizedMiddleware from "../../authMiddleware"
const router = Router();
// router.use(AuthorizedMiddleware)
router.use("/orders", ordersRouter);

export default router;
