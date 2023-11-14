import { Router } from "express";
import * as studentController from "../controllers/student";

const router = Router();

router.get("/", studentController.getStudents);

router.get("/disabled", studentController.getDisabledStudents);

router.get("/:id", studentController.getStudent);

router.post("/", studentController.postStudent);

router.put("/:id", studentController.putStudent);

router.patch("/enable/:id", studentController.enableStudent);

router.patch("/disable/:id", studentController.disableStudent);

router.delete("/:id", studentController.deleteStudent);

export default router;