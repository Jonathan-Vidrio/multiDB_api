import { Request, Response, NextFunction } from "express";
import * as studentService from "../services/student";

const getStudents = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await studentService.getStudents();
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
}

const getDisabledStudents = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await studentService.getDisabledStudents();
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
}

const getStudent = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = parseInt(req.params.id);
        const result = await studentService.getStudent(id);
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
}

const postStudent = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const student = req.body;
        const result = await studentService.createStudent(student);
        res.status(201).json(result);
    } catch (error) {
        next(error);
    }
}

const putStudent = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = parseInt(req.params.id);
        const student = req.body;
        const result = await studentService.updateStudent(id, student);
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
}

const enableStudent = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = parseInt(req.params.id);
        const result = await studentService.enableStudent(id);
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
}

const disableStudent = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = parseInt(req.params.id);
        const result = await studentService.disableStudent(id);
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
}

const deleteStudent = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = parseInt(req.params.id);
        const result = await studentService.deleteStudent(id);
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
}

export {
    getStudents,
    getDisabledStudents,
    getStudent,
    postStudent,
    putStudent,
    enableStudent,
    disableStudent,
    deleteStudent
}