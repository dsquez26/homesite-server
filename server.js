const express = require('express')
const userRoutes = require('./src/user/routes')

const app = express();
const port = 5000;

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Bristol home route")

})

app.use("/api/v1/users", userRoutes)

app.listen(port, () => console.log(`app listening on port ${port}`))