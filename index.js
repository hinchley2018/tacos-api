//API Entrypoint

//import the modules so we can use
const express = require('express')

//load our libraries
const orderRoutes = require('./routes/orderRoutes')

//create an instance of the app
const app = express()

//Apply middleware
app.use(express.json())

//temporary data (to be replaced by db)
let tacos = [
    {name: "Breakfast Taco", ingredients: ["meat","cheese","bacon"], price: 1.29, inventory: 50},
    {name: "Vegan Taco", ingredients: ["soy","sadness","tears"], price: 8.29, inventory: 5},
    {name: "Loaded Taco", ingredients: ["meat","cheese","guacomole","beans", "bacon bits"], price: 6.29, inventory: 50}
]

//request handlers
//path, callback(request,response)
app.get("/", (req,res) => {
    //log to server
    console.log("Received GET request /")

    //respond
    res.send("Hello from GET /")
})

app.use('/orders', orderRoutes)

//listen for requests
const PORT = 3000
app.listen(PORT, () => {
    console.log("API listening on PORT","http://localhost:"+PORT)
})
