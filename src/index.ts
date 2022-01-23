import express, { response } from 'express'

const app = express()

app.get('/', (res, req)=>{

    return response.json({ message: 'Hellow world'})
})

app.listen(3333)