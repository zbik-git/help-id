import { useBody } from 'h3'
import destr from 'destr'
import { useCookie } from 'h3'

export default eventHandler( (event) => {

    const authToken =  useCookie(event, "authToken")
   
    
    
})