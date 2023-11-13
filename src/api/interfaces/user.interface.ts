interface IUser {
    email: string,
    password: string,
    role?: string[],
    status?: number,
}

export default IUser;