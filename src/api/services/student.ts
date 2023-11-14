import IStudent from "../interfaces/student";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getStudents = async () => {
    const result = await prisma.student.findMany({
        where: {
            status: 1
        }
    });
    return result;
}

const getDisabledStudents = async () => {
    const result = await prisma.student.findMany({
        where: {
            status: 0
        }
    });
    return result;
}

const getStudent = async (id: number) => {
    const result = await prisma.student.findUnique({
        where: {
            id: id
        }
    });
    return result;
}

const createStudent = async (student: IStudent) => {
    const result = await prisma.student.create({
        data: {
            id: student.id || undefined,
            name: student.name,
            firstLastName: student.firstLastName,
            secondLastName: student.secondLastName || "",
            career: student.career,
            semester: student.semester,
            email: student.email,
            phone: student.phone,
            status: student.status || 1
        }
    });
    return result;
}

const updateStudent = async (id: number, student: IStudent) => {
    const result = await prisma.student.update({
        where: {
            id: id
        },
        data: student
    });
    return result;
}

const enableStudent = async (id: number) => {
    const result = await prisma.student.update({
        where: {
            id: id
        },
        data: {
            status: 1
        }
    });
    return result;
}

const disableStudent = async (id: number) => {
    const result = await prisma.student.update({
        where: {
            id: id
        },
        data: {
            status: 0
        }
    });
    return result;
}

const deleteStudent = async (id: number) => {
    const result = await prisma.student.delete({
        where: {
            id: id
        }
    });
    return result;
}

export {
    getStudents,
    getDisabledStudents,
    getStudent,
    createStudent,
    updateStudent,
    enableStudent,
    disableStudent,
    deleteStudent
}