import { Request, Response, NextFunction } from "express";
import * as teacherService from "../services/teacher";

const getTeachers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await teacherService.getTeachers();
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
}

const getDisabledTeachers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await teacherService.getDisabledTeachers();
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
}

const getTeacher = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = parseInt(req.params.id);
        const result = await teacherService.getTeacher(id);
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
}

const postTeacher = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const teacher = req.body;
        const result = await teacherService.createTeacher(teacher);
        res.status(201).json(result);
    } catch (error) {
        next(error);
    }
}

const putTeacher = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = parseInt(req.params.id);
        const teacher = req.body;
        const result = await teacherService.updateTeacher(id, teacher);
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
}

const enableTeacher = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = parseInt(req.params.id);
        const result = await teacherService.enableTeacher(id);
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
}

const disableTeacher = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = parseInt(req.params.id);
        const result = await teacherService.disableTeacher(id);
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
}

const deleteTeacher = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = parseInt(req.params.id);
        const result = await teacherService.deleteTeacher(id);
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
}

export {
    getTeachers,
    getDisabledTeachers,
    getTeacher,
    postTeacher,
    putTeacher,
    enableTeacher,
    disableTeacher,
    deleteTeacher
}