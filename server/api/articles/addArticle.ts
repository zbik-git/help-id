// import { IncomingMessage, ServerResponse } from 'http'
import { useBody } from 'h3'
import destr from 'destr'

export default eventHandler(async (event) => {

    const {title, content, category} = event['body'] ? destr(event['body']) : await useBody(event)
    const article = await event['db'].articles.create({
        data: {
            title: title,
            content: content,
            category: category
        }
    })
    return article
})