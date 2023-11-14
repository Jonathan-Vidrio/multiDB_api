import { Router } from "express";
import * as studentController from "../controllers/student.controller";

const router = Router();

router.get("/", studentController.getStudents);

router.get("/:id", studentController.getStudent);

router.post("/", studentController.postStudent);

router.put("/:id", studentController.putStudent);

router.delete("/:id", studentController.deleteStudent);

export default router;