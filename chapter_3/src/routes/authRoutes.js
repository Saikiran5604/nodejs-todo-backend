import express from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import db from '../db.js'

const router =express.Router()

//Register a new user endpoint /auth/register
router.post('/register',(req,res) => {
    const { username,password } = req.body
    // save the username and an irreversibly encrypted password 
    // save Saikiran@gmail.com | whqbiwbiwdq.wbbwdbw...wdwbd

    //encrypt the password 
    const hashedPassword =bcrypt.hashSync(password,8)
    
    //save the new user and hashed password to the db
    try{
        const insertUser = db.prepare(`INSERT INTO users(username,password) 
            VALUES(?,?)`)
        const result = insertUser.run(username, hashedPassword)
        
        //now that we have a new user, I want to add their first todo to them
        const defaultTodo = `Hello :) Add your first todo`
        const insertTodo =db.prepare(`INSERT INTO todos(user_id ,task) VALUES(?,?)`)
        insertTodo.run(result.lastInsertRowid, defaultTodo)
        
        //create a token 
        const token =jwt.sign({id: result.lastInsertRowid},process.env.JWT_SECRET, {expiresIn:'24h'})
        res.json({ token })
    } catch(err){
        console.log(err.message)
        res.sendStatus(503)
    }



})

router.post('/login',(req,res) => {
    // we get their email,a nd we look their password associated with that email in the database 
    // but we get it back and see it's encrypted which means that we ccan't compare 
    // it to the one the user just were trying to login
    // sowhat we can to dp ,is again one way encrypted the passwprd the user entered 
    // we compare it 
    
    const {username,password} = req.body

    try{
        const getUser = db.prepare('SELECT * FROM users WHERE username = ?')
        // select the users from the db compare with the passed user 
        const user = getUser.get(username)
        
        //if we cannot find the user associated with that username , return out from the function
        if(!user){
            return res.status(404).send({ message :"User Not Found"})
        }
        const passwordisValid = bcrypt.compareSync(password,user.password)
        
        // if the password doesn't match ,return out of the function
        if(!passwordisValid){
            return res.status(401).send({message:"Invalid password"})
        }
        console.log(user)
        // then we have a successful authenication
        const token = jwt.sign({ id: user.id } ,process.env.JWT_SECRET,{ expiresIn: '24h'})
        res.json({ token })
    } catch (err){
        console.log(err.message)
        res.sendStatus(503)
    }
})


export default router 