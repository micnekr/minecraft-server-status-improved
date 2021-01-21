# minecraft-server-status-improved

This package will give infomation about minecraft servers.

## Getting started

You will need to install the package:  
`npm i minecraft-server-status-improved`

## Using the library

Basic usage:
```
const status = require('minecraft-server-status-improved');
 
status('play.slimevalley.xyz', 25565, (err, response) => {
    if (err) console.err(err);
    else console.log(response)
})
```

Or using promises:

```
const status = require('minecraft-server-status-improved');

status('play.slimevalley.xyz', 25565)
.then(console.log)
.catch(console.err)

```

## information about the pacakge
This is a modified version of [this library](https://www.npmjs.com/package/minecraft-server-status) because it has no repository to fork.  
This version provides improved error-first callbacks as well as promises.

This library uses [mcapi.us](https://mcapi.us)
