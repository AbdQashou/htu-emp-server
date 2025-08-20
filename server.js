import express from 'express';
const app = express();
const PORT = 5000;

app.get("/", (request, response) => {
    response.send("home route")

})

app.get("/test", (request, response) => {
    response.json({test: "teast teast"})

})

app.use((req, res) => {
    res.status(404).json({massage: "not found"})

})
app.listen(PORT, () =>{

    console.log('server is listening!!!!');
})