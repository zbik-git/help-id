import type { IncomingMessage, ServerResponse } from 'http'
import { useBody } from 'h3'
import { isInDestructureAssignment } from '@vue/compiler-core'

export default async (req, res) => {
    

    const {title, content} = req.body
    const article = await req.db.article.create({
        data: {
            title,
            content
        }
    })
    return{
        article
    }  
}