import express, { Application, Request, Response,NextFunction } from 'express'
const app: Application = express()
import cors from 'cors'
import notFound from './app/middlewars/notFound'
import route from './app/route'

// parsors
app.use(express.json())
app.use(cors())


// present setup
app.use('/api/v1',route)


app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})


app.use((err:any, req:Request,res:Response,next:NextFunction) =>{
  const statusCode = err.statusCode || 500;
  const message =err.message || "somthing went worng"

  return res.status(statusCode).json({
    success : false,
    message,
    error: err
  })
}) 
app.use(notFound)
export default app
