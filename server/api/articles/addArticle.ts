import type { IncomingMessage, ServerResponse } from 'http'
import { useBody } from 'h3'
import destr from 'destr'

export default async (req, res) => {
    

    const {title, content, category} = req.body ? destr(req.body) : await useBody(req)
  
    const article = await req.db.articles.create({
        data: {
            title: title,
            content: content,
            category: category
        }
    })
    return{
        article
    }  
}