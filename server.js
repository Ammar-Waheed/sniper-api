import "dotenv/config"
import express from "express"
import appRouter from "./routes/index.js"

const app = express()
const port = process.env.API_PORT || 4000

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    )
    if (req.method === "OPTIONS") {
        res.header(
            "Access-Control-Allow-Methods",
            "GET, POST, PUT, DELETE, PATCH"
        )
        return res.status(200).json({})
    }
    next()
})

app.use(express.json())
app.use("/api", appRouter)
app.listen(port, () => {
    console.log("App listening on port " + port)
})

app.use((req, res, next) => {
    const error = Error("Not found")
    res.statusCode = 404
    res.send({ error: error.message })
})
