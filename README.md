
# Simple Infoblox REST API client for NodeJS

https://www.infoblox.com/wp-content/uploads/infoblox-deployment-infoblox-rest-api.pdf

# Install

```
npm install --save infoblox-rest
```


# Run

You can use your usual proxy environment variables.
Request, behind this library will pick it up.


```js
(async () => {
 
  const infoblox = require("infoblox-rest")({
    // configure your infoblox host, login and password
    url: "https://localhost",
    user: "usern4me",
    pass: "passw0rd",
    // Check following url to know which wapi versions your infoblox installation supports
    // https://localhost/wapi/v1.0/?_schema
    version: "v2.9",
    timeout: 30000
  });
  const cli = infoblox.client();
  
  // get supported wapi versions
  const res = await cli.request({method: 'GET', uri: `?_schema`});
  return res.data.supported_versions;
})()
.then(data => {
  console.log("done", data)
})
.catch(err => {
  console.log("error", err)
})

```

output similar to this
```js
done [
  '1.0',   '1.1',   '1.2',   '1.2.1',
  '1.3',   '1.4',   '1.4.1', '1.4.2',
  '1.5',   '1.6',   '1.6.1', '1.7',
  '1.7.1', '1.7.2', '1.7.3', '1.7.4',
  '1.7.5', '2.0',   '2.1',   '2.1.1',
  '2.1.2', '2.2',   '2.2.1', '2.2.2',
  '2.3',   '2.3.1', '2.4',   '2.5',
  '2.6',   '2.6.1', '2.7',   '2.7.1',
  '2.7.2', '2.7.3', '2.8'
]

```