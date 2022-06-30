// import { PrismaClient } from '@prisma/client'
// const prisma = new PrismaClient()



export default eventHandler(async (event) => {
    const articles = await event['db'].articles.findMany()
    
    return{
        articlesList: articles
    }  
})