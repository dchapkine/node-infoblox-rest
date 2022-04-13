
# Simple Infoblox REST API client for NodeJS


# Usage

```
npm install --save infoblox-rest
```

```
(async () => {
 
  const infoblox = require("infoblox-rest")({
    url: "https://infoblox.dev",
    user: "username",
    pass: "passw0rd",
    version: "v2.9",
    timeout: 60000
  });
  const cli = infoblox.client();

  const res = await cli.request({method: 'GET', uri: `/network`});
  console.log(res);
})()
.then(res => {
  console.log(res)
})
.catch(err => {
  console.log(err)
})

```