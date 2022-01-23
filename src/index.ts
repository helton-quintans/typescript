import express from 'express'

const app = express()

app.get('/', (req, res)=>{

    return res.json({ message: 'Hellow world'})
})

app.listen(3333)