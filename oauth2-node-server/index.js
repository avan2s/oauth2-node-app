const express = require('express');
const axios = require('axios');
let cors = require('cors');

const CLIENT_ID = '618e3cd8d0733ee43fbc';
const CLIENT_SECRET = 'a26141faa91153fd211032887e3d420779287c5e';
const GITHUB_REQUEST_ACCESS_TOKEN_BASE_URL = 'https://github.com/login/oauth/access_token';

// where should github to redirect the user when the authorization process has been finished
// localhost:8080/oauth/redirect
const MY_AUTHORIZATION_SERVER_CALL_BACK_URL = '/oauth/redirect';

const app = express();

app.use(cors({
    credentials: true,
    origin: true
}))


// after successful authorization gitHub will redirect to this route, we configured in the "register OAuth app section"
app.get(MY_AUTHORIZATION_SERVER_CALL_BACK_URL, (req, res) => {    
    // request the access token from github
    axios({
        method: "POST",
        url: `${GITHUB_REQUEST_ACCESS_TOKEN_BASE_URL}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&code=${req.query.code}`,
        headers: {
            Accept: "application/json",
        },
    }).then((response) => {
        const MY_CLIENT_APP_URL = `http://localhost:3000?access_token=${response.data.access_token}`;
        res.redirect(MY_CLIENT_APP_URL);
    });
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`authorization server listening on port ${PORT}`)
})