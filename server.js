const express = require('express')
const userRoutes = require('./src/user/routes')
const cors = require('cors')

const app = express();
const port = 5000;

app.use(express.json())

app.use(cors())

app.get("/", (req, res) => {
    res.send("Bristol home route")

})

app.use("/api/users", userRoutes)


app.listen(port, () => console.log(`app listening on port ${port}`))