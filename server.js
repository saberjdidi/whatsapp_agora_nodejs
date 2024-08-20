const express = require('express');
const { RtcTokenBuilder, RtcRole } = require('agora-access-token');

const app = express();
const port = 3000; // You can use any port

// Agora Credentials
const appId = '7f97c3fcda294c3c989307de9873e5d3';
const appCertificate = 'b46cdfd923c14cf3849ca740d1b3315b';


app.get('/get_token', (req, res) => {
    const channelName = req.query.channelName;
    if (!channelName) {
        return res.status(400).json({ 'error': 'channelName is required' });
    }

    // Token expiration time
    const expirationTimeInSeconds = 3600;
    const currentTimestamp = Math.floor(Date.now() / 1000);
    const privilegeExpiredTs = currentTimestamp + expirationTimeInSeconds;

    // Assign a role to the user
    const role = RtcRole.PUBLISHER;

    const token = RtcTokenBuilder.buildTokenWithUid(appId, appCertificate, channelName, 0, role, privilegeExpiredTs);

    res.json({ 'token': token });
});

app.listen(port, () => {
    console.log(`Agora token server running on http://localhost:${port}`);
});