import { Router } from "express";
import * as teacherController from "../controllers/teacher";

const router = Router();

router.get("/", teacherController.getTeachers);

router.get("/disabled", teacherController.getDisabledTeachers);

router.get("/:id", teacherController.getTeacher);

router.post("/", teacherController.postTeacher);

router.put("/:id", teacherController.putTeacher);

router.patch("/enable/:id", teacherController.enableTeacher);

router.patch("/disable/:id", teacherController.disableTeacher);

router.delete("/:id", teacherController.deleteTeacher);

export default router;