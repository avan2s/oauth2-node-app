<h1>OAuth 2 Learning</h1>

This application is for learning oauth 2 in node js version v16.14.0 from [this turorial](https://www.honeybadger.io/blog/oauth-nodejs-javascript/)

Register a new oauth application on Github and pick the client id and client secret.


FOllow the guidelines:
https://docs.github.com/en/developers/apps/building-oauth-apps/authorizing-oauth-apps



<h2>How to start the scenario</h2>
Install proxy server in order to prevent cors error and to route from localhost:8010/proxy to the github API. Frontend is only allowed to make api calls to the localhost. With the 

```
# install local cors proxy
npm install -g local-cors-proxy

# start the proxy. With this any localhost:8010/proxy url will be forwared to the proxyUrl (api.github.com)
lcp --proxyUrl https://api.github.com/
```

1. Start  oauth node-server
