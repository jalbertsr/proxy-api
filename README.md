## API Proxy-Steam

This repo contains the code for a proxy built to simplify the access to the APIs that have a CORS problem.

### Instructions

To use this API you must use this URL as a base url.

```
https://proxy-steam.herokuapp.com/
```

instead of the original one

```
https://api.steampowered.com
```

For example:

Instead of: 

```
https://api.steampowered.com
```

You must use

```
https://proxy-steam.herokuapp.com/
```

### Use this repo with any other API 

Clone the repo and create a ```.env``` file with the following enviroment variables: 

```
URL_BASE=http://api.example.com/
```

to run the server locally:

```
PORT=3000
```

if you need to configure a token in the headers request:

```
TOKEN=XXXXXXXXXXXXXX
```

