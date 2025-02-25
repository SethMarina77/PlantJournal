import express from "express";
import cors from "cors"; //lets me make requests to the server from a different origin
import dotenv from "dotenv"; //lets me use environment variables
import axios from "axios";
const app = express();
dotenv.config(); //lets me use environment variables
const PORT = process.env.PORT



app.use(cors());
app.use(express.json()); //middleware that lets me parse JSON data

app.get("/", (req, res) => {
    res.send("was gud G");
});

const API_KEY = process.env.RIOT_API_KEY;

// Endpoint to get summoner data
app.get("/api/summoner/:gameName/:tagLine", async (req, res) => {
    try {
        console.log("Request received for:", req.params);
        
        const { gameName, tagLine } = req.params;
        const API_KEY = process.env.RIOT_API_KEY;

        // Step 1: Get PUUID
        const accountUrl = `https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${gameName}/${tagLine}`;
        const accountResponse = await axios.get(accountUrl, {
            headers: { "X-Riot-Token": API_KEY }
        });

        console.log("Account response received:", accountResponse.data);

        const puuid = accountResponse.data.puuid;

        // Step 2: Get Summoner Data
        const summonerUrl = `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/${puuid}`;
        const summonerResponse = await axios.get(summonerUrl, {
            headers: { "X-Riot-Token": API_KEY }
        });

        console.log("Summoner data received:", summonerResponse.data);
        res.json(summonerResponse.data);
    } catch (error) {
        console.error("Error fetching summoner data:", error.response ? error.response.data : error.message);
        res.status(500).json({ message: "Server error", error: error.response?.data || error.message });
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

