/*Implementation done by: D Saikiran Reddy
 * Learning reference: "Backend Full Course | NodeJS ExpressJS PostgreSQL Prisma & Docker"
 * Instructor: Smoljames
 * YouTube Course Link: https://youtu.be/9BD9eK9VqXA?si=WNLBMTg5wE7fwEir
 *
 * Note: This project was built by following along with the tutorial for educational purposes.*/
import express from 'express'
import path,{ dirname } from 'path'
import { fileURLToPath } from 'url'
import authRoutes from './routes/authRoutes.js'
import todoRoutes from './routes/todoRoutes.js'
import authMiddleware from './middleware/authMiddleware.js'

const app = express()
const PORT = process.env.PORT || 5000

// GET the file path from the URL of the current module 
const __filename = fileURLToPath(import.meta.url)
//GET the directory from the file path
const __dirname = dirname(__filename)

//Middleware
app.use(express.json())
//Serves the HTML file from /public directory 
// Tells express to serve all files from the public folder as static assests 
// /file .Any requests for the css file will be resolved to the public directory.

app.use(express.static(path.join(__dirname,'../public')))
console.log(`Hello World`)

// Serving up the HTML file from the /public directory
app.get(`/`,(req,res) => {
    res.sendFile(path.join(__dirname,'public','index.html'))
})

//Routes 
app.use('/auth' ,authRoutes )
app.use('/todos',authMiddleware ,todoRoutes )
app.listen(PORT, () => {
    console.log(`Server has started on port: ${PORT}`)
    
})
