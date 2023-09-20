import express from "express";
import {
  createPresentationHandler,
  editPresentationHandler,
} from "../controllers/adm.controller";
import { requireUser } from "../middleware/requireUser";
import { restrictTo } from "../middleware/restrictTo";

const router = express.Router();

router.use(requireUser);

// Admin Create Presentation route
router.post("/", restrictTo("admin"), createPresentationHandler);

// Admin Edit Presentation route
router.put("/:id", restrictTo("admin"), editPresentationHandler);

export default router;
