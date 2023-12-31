interface IStudent {
    id?: number,
    name: string,
    firstLastName: string,
    secondLastName?: string,
    career: string,
    semester: number,
    email: string,
    phone: string,
    status?: number,
}

export {
    IStudent
}
