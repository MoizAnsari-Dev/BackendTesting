import express from 'express'

const app = express();
const PORT = 5000;

app.get('/hitesh', (req, res) => {
    res.send('Hello Coming from Users')
});

app.get("/moiz", (req, res) => {

})

app.listen(PORT, () => {
    console.log(`Lesting On ${PORT}`);
    
})