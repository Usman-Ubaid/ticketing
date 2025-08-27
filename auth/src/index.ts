import express from 'express';

const app = express();
app.use(express.json());

app.get('/api/user/currentuser', (req, res) => {
    res.send("Current User");
}) 

app.listen(3000, () => {
    console.log("Listening on port 3000!!");
})