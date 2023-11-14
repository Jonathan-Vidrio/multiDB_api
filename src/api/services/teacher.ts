import ITeacher from "../interfaces/teacher";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getTeachers = async () => {
    const result = await prisma.teacher.findMany({
        where: {
            status: 1
        }
    });
    return result;
}

const getDisabledTeachers = async () => {
    const result = await prisma.teacher.findMany({
        where: {
            status: 0
        }
    });
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
            phone: teacher.phone,
            status: teacher.status || 1
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

const enableTeacher = async (id: number) => {
    const result = await prisma.teacher.update({
        where: {
            id: id
        },
        data: {
            status: 1
        }
    });
    return result;
}

const disableTeacher = async (id: number) => {
    const result = await prisma.teacher.update({
        where: {
            id: id
        },
        data: {
            status: 0
        }
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
    getDisabledTeachers,
    getTeacher,
    createTeacher,
    updateTeacher,
    enableTeacher,
    disableTeacher,
    deleteTeacher
}