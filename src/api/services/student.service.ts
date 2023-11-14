import IStudent from "../interfaces/student.interface";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getStudents = async () => {
    const result = await prisma.student.findMany();
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
            phone: student.phone
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
    getStudent,
    createStudent,
    updateStudent,
    deleteStudent
}