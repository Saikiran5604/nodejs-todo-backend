// the address of this server connected to the network is :
//URL -> http://localhost:8383
//IP ->127.0.0.1:8383
 /*Implementation done by: D Saikiran Reddy
 * Learning reference: "Backend Full Course | NodeJS ExpressJS PostgreSQL Prisma & Docker"
 * Instructor: Smoljames
 * YouTube Course Link: https://youtu.be/9BD9eK9VqXA?si=WNLBMTg5wE7fwEir
 *
 * Note: This project was built by following along with the tutorial for educational purposes.*/
const express = require('express')
const app =express()
const PORT =8383

let data = ['james']

//middleware 
app.use(express.json())

// HTTP VERBS(method GET ,POST) && Routes for Paths
//the method informs the nature of the request and the route is a further subdirectory

//Type-1 website endpoints (sending back the html when user enters the url)
app.get('/',(req ,res)=>{
    //this is a endpoint 1 -/
    res.send(`
        <body style="background:pink;color:blue;">
            <h1>DATA</h1>
            <p>${JSON.stringify(data)}</p>
            <a href="/dashboard">Dashboard</a>
        </body>`)
})

app.get('/dashboard',(req,res)=>{
    
    res.send(`
        <body>
        <h1>Dashboard</h1>
        <a href="/">Home</a>
        </body>
        `)
})


//Type-2 API endpoints 

//CRUD - CREATE,READ,UPDATE,DELETE
//CRUDE-METHOD
// create-post,read-get,update-put,delete-delete 

app.get('/api/data',(req,res) => {
    console.log(`This for the data`)
    res.status(599).send(data)
})

app.post('/api/data',(req,res) => {
    //someone wants to create a user (when they click up when they enter the credentials  and their browser is 
    // wired to send out the network request for the server to handle  ) 
    const newdata =req.body
    console.log(newdata)
    data.push(newdata.name)
    res.sendStatus(201)
    
})

app.delete('/api/data',(req,res) =>{
    data.pop()
    console.log("We deleted the element off the array")
    res.sendStatus(201)
})


app.listen(PORT, () => console.log(`Server has Started on: ${PORT}`))
