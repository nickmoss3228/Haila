const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')

dotenv.config();

const app = express();
const port = process.env.PORT || 5000

app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
    res.send("Hello from the server!")
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

