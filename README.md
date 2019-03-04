## API Proxy

This repo contains the code for a proxy built to simplify the access to the APIs that have CORS problem or APIs that give you a Bearer token you can't use in the client side for security reasons.

### Instructions

To use this repo you must deploy this node proxy and use your domain URL as a base url.

For example:

```
https://proxy-steam.herokuapp.com/
```

instead of the original one

```
https://api.steampowered.com
```

Adding paths and queryparams:

Instead of: 

```
https://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001/?key=XXXXXXXXXXX&vanityurl=jaxalbert
```

You must use

```
https://proxy-steam.herokuapp.com/ISteamUser/ResolveVanityURL/v0001/?key=XXXXXXXXXXX&vanityurl=jaxalbert
```

### Configure the environment variables file

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

