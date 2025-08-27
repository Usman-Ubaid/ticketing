import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors())

app.get('/api/users/currentuser', (req, res) => {
    res.send("Current User");
}) 

app.listen(3000, () => {
    console.log("Listening on port 3000!!");
})