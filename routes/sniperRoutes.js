import express from "express"
import sniperController from "../controlllers/sniperController.js"

const sniperRouter = express.Router()

sniperRouter.get("/ranks", sniperController.getRanks)
sniperRouter.get("/prices", sniperController.getPrices)
sniperRouter.get("/details", sniperController.getDetails)

export default sniperRouter
