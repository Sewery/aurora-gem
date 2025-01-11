import { Router } from "express";
import { opinionsRouter} from "./opinions";

const router = Router();

router.use("/opinions", opinionsRouter);

export default router;
