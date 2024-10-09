const express = require("express")
const router = express.Router();
//temporary data (to be replaced by db)
let tacos = [
    {name: "Breakfast Taco", ingredients: ["meat","cheese","bacon"], price: 1.29, inventory: 50},
    {name: "Vegan Taco", ingredients: ["soy","sadness","tears"], price: 8.29, inventory: 5},
    {name: "Loaded Taco", ingredients: ["meat","cheese","guacomole","beans", "bacon bits"], price: 6.29, inventory: 50}
]
router.get("/tacos", (req,res) => {
    //log to server
    console.log("Received GET request /tacos")

    //respond
    res.send(tacos)
})
module.exports = router;