import express from "express"
import sniperRouter from "./sniperRoutes.js"

const appRouter = express.Router()

appRouter.use("/sniper", sniperRouter)

export default appRouter
