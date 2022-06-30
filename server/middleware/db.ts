import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


export default async (req, res) => {
    req['db'] = prisma
    
}