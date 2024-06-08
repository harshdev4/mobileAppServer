const express = require('express');
const si = require('systeminformation');
const app = express();
const port = 3000;

app.get('/info', async (req, res) => {
    const currentTime = new Date().toISOString();
    const name = 'Your Name'; // Replace with a dynamic name if needed

    // Get battery information (not all devices provide this info)
    let batteryLevel;
    try {
        const battery = await si.battery();
        batteryLevel = battery.percent;
    } catch (error) {
        batteryLevel = 'Unavailable';
    }

    // Get platform information
    const platform = await si.osInfo().then(data => data.platform);

    // Get free storage space
    const freeStorage = await si.fsSize().then(disks => disks.reduce((acc, disk) => acc + disk.available, 0) / (1024 * 1024));

    res.json({
        currentTime,
        name,
        batteryLevel,
        platform,
        freeStorage: freeStorage.toFixed(2)
    });
});

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
