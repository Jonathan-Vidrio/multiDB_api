interface ITeacher {
    id?: number,
    teacherId: string,
    name: string,
    firstLastName: string,
    secondLastName?: string,
    email: string,
    phone: string,
    status?: number,
}

export {
    ITeacher;
}
