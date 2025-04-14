import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import db from './utils/db.js';
//Importing all routes in UserRoute
import userRoutes from './routes/UserRoutes.js'


dotenv.config()
const app = express();  

app.use(cors({
    origin: process.env.BASE_URL,
    credentials: true,
    methods: ['GET', 'POST', 'DELETE', 'OPTIONs'],
    allowedHeaders: ['Content-Type', 'Authorization']
})
);
// convert the in JSON
app.use(express.json());

app.use(express.urlencoded({extended: true}));

const PORT = process.env.PORT || 4000 ;

app.get('/', (req, res) => {
    res.send('Backend')
});
app.get('/hitesh', (req, res) => {
    res.send('Hello Coming from Users')
});

app.get("/moiz", (req, res) => {
    res.send('Comming form Moiz')
})

// connect to Database

app.use('/api/v1/users', userRoutes)

app.listen(PORT, async () => {
    await db();
    console.log(`Lesting On ${PORT}`);    
})