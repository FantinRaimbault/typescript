import express, { Request, Response, NextFunction } from 'express';
import { authorize } from './middlewares/auth.middleware';
import fs from 'fs/promises'

const app = express()

app.get('/', authorize(), (req: Request, res: Response) => {
    res.send('Hello World')
})

app.get('/goodbye', (req, res) => {
    res.send('Goodbye World')
})

app.get('/afternoon', (req, res) => {
    res.send('Good Afternoon')
})

// app.listen(3002, () => {
//     console.log('Server running on port 3002')
// })

export default app