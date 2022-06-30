// import { PrismaClient } from '@prisma/client'
// const prisma = new PrismaClient()



export default async (req, res) => {
    const articles = await req.db.articles.findMany()
    return{
        articlesList: articles
    }  
}