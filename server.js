import express from 'express'

const app = express();
const PORT = 5000;

app.get('/api/users', (req, res) => {
    res.send('Hello Coming from Users')
})

app.listen(PORT, () => {
    console.log(`Lesting On ${PORT}`);
    
})