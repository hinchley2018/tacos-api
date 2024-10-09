const express = require("express")
const router = express.Router();
let orders = []

//GET orders
router.get("/", (req, res) => {
    console.log("GET /orders")

    res.send(orders)
})

//CREATE orders
router.post("/", (req, res) => {
    console.log("POST /orders", req.body)
    //add that order
    let order = req.body
    orders.push(order)
    res.send("Created an order")
})

//export the router
module.exports = router