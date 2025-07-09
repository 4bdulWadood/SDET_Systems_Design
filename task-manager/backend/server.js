const express = require('express')
const path = require('path') 
const app = express()
const authRouter = require('./routers/auth.router')
const taskRouter = require('./routers/tasks.router')
const profileRouter = require('./routers/profile.router')
const connectMongo = require('./services/mongo')
const cors = require('cors')

const PORT = 3000

app.use(express.json()) 
app.use(cors())

connectMongo()

app.use('/auth',authRouter)

app.use('/tasks',taskRouter)

app.use('/profile',profileRouter) 


app.use(express.static(path.resolve(__dirname, "./build")));
app.get("*", (req, res) => res.sendFile(path.resolve(__dirname, "./build/index.html")));


app.listen(process.env.PORT || PORT,() => {
    console.log(`server running on http://localhost:${process.env.PORT || PORT}`)
})