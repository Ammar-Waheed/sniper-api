import axios from "axios"

const getRanks = async (req, res) => {
    try {
        const response = await axios.get(
            `https://api.traitsniper.com/v1/collections/${req.query.collection}/ranks?page=1&limit=10000`,
            {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    accept: "application/json",
                    "x-ts-api-key": process.env.KEY
                }
            }
        )
        res.send(response.data.ranks)
    } catch (err) {
        console.error(err)
        res.sendStatus(500)
    }
}

const getPrices = async (req, res) => {
    const options = {
        method: "GET",
        url: `https://api.traitsniper.com/v1/collections/${req.query.collection}/prices?page=1&limit=200`,
        headers: {
            accept: "application/json",
            "x-ts-api-key": process.env.KEY
        }
    }
    try {
        const response = await axios.request(options)
        res.send(response.data.prices)
    } catch (err) {
        console.error(err)
        res.sendStatus(500)
    }
}

const getDetails = async (req, res) => {
    const options = {
        method: "GET",
        url: `https://api.traitsniper.com/v1/collections/${req.query.collection}/nfts/${req.query.id}`,
        headers: {
            accept: "application/json",
            "x-ts-api-key": process.env.KEY
        }
    }
    try {
        const resposne = await axios.request(options)
        res.send(resposne.data)
    } catch (err) {
        console.error(err)
        res.sendStatus(500)
    }
}

export default { getRanks, getPrices, getDetails }
