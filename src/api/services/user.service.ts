import IUser from "../interfaces/user.interface";
import { PrismaClient } from "../../database/postgresql/client";
import { encrypt, verify } from "../../utils/bcrypt.handler";

const prisma = new PrismaClient();