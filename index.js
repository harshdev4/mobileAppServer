const express = require('express');
const si = require('systeminformation');
const app = express();
const port = 3000;

app.get('/info', async (req, res) => {
    console.log(req.query.batteryLevel)
    const currentTime = req.query.currentTime;
    const name = req.query.name;
    const batteryLevel = req.query.batteryLevel;
    const platform = req.query.platform;
    const freeStorage = req.query.freeStorage;

    // Additional server-side processing if needed

    res.json({
        currentTime,
        name,
        batteryLevel,
        platform,
        freeStorage
    });
});

app.listen(port, () => {
    console.log(`Server running on port:${port}`);
});
