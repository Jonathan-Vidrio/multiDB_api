import ITeacher from "../interfaces/teacher.interface";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getTeachers = async () => {
    const result = await prisma.teacher.findMany();
    return result;
}

const getTeacher = async (id: number) => {
    const result = await prisma.teacher.findUnique({
        where: {
            id: id
        }
    });
    return result;
}

const createTeacher = async (teacher: ITeacher) => {
    const result = await prisma.teacher.create({
        data: {
            id: teacher.id || undefined,
            teacherId: teacher.teacherId,
            name: teacher.name,
            firstLastName: teacher.firstLastName,
            secondLastName: teacher.secondLastName || "",
            email: teacher.email,
            phone: teacher.phone
        }
    });
    return result;
}

const updateTeacher = async (id: number, teacher: ITeacher) => {
    const result = await prisma.teacher.update({
        where: {
            id: id
        },
        data: teacher
    });
    return result;
}

const deleteTeacher = async (id: number) => {
    const result = await prisma.teacher.delete({
        where: {
            id: id
        }
    });
    return result;
}

export {
    getTeachers,
    getTeacher,
    createTeacher,
    updateTeacher,
    deleteTeacher
}