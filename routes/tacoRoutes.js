app.get("/tacos", (req,res) => {
    //log to server
    console.log("Received GET request /tacos")

    //respond
    res.send(tacos)
})