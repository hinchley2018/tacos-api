//API Entrypoint

//import the modules so we can use
const express = require('express')

//load our libraries
const tacoRoutes = require('./routes/tacoRoutes')
const orderRoutes = require('./routes/orderRoutes')

//create an instance of the app
const app = express()

//Apply middleware
app.use(express.json())

//request handlers
//path, callback(request,response)
app.get("/", (req,res) => {
    //log to server
    console.log("Received GET request /")

    //respond
    res.send("Hello from GET /")
})

app.use('/tacos', tacoRoutes)

app.use('/orders', orderRoutes)

//listen for requests
const PORT = 3000
app.listen(PORT, () => {
    console.log("API listening on PORT","http://localhost:"+PORT)
})
