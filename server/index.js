const express = require("express");
const cors = require("cors");
const axios = require("axios"); // Remove { default: axios }

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
    const { username } = req.body;

    try {
        const r = await axios.put(
            'https://api.chatengine.io/users/',
            { username: username, secret: username, first_name: username },
            { headers: { "private-key": "bde7dc70-cdcb-4b99-934f-3de8aed15c30" }
        });
        
        return res.status(r.status).json(r.data);

    } catch (e) {
        return res.status(e.response.status).json(e.response.data); // Correct the typo
    }
});

app.listen(3001);
