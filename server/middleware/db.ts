import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


export default eventHandler(async (event) => {
    event['db'] = prisma
    
})