# FiveM Client Bundled Types

This package contains "easy-to-use" types for FiveM.

For example:
```js
import * as client from '@risinglife/fivem-client-bundled';

// Shut down the loading screen
client.nui.shutdownLoadingScreen();

// Create an ped
client.ped.create(2, 'MP_M_Freemode_01', new client.Vector3(0, 0, 0), 0, false, false);
```

### Usage
You can use [https://nativedb.dotindustries.dev/gta5/natives/](https://nativedb.dotindustries.dev/gta5/natives/) or [https://docs.fivem.net/natives/](https://docs.fivem.net/natives/) to look how you can use methods.

The only difference is that the package uses “namespaces” instead of “root methods.”
This gives us the advantage of having clearly structured functions.

This package contains both native and client methods for FiveM.

### Other packages
- https://www.npmjs.com/package/@risinglife/fivem-client
- https://www.npmjs.com/package/@risinglife/fivem-natives
- https://www.npmjs.com/package/@risinglife/fivem-server
- https://www.npmjs.com/package/@risinglife/fivem-webview
- https://www.npmjs.com/package/@risinglife/fivem-shared

### Contribute

As this package content is being generated from a json file, we do not accept direct pull requests.
If you have issues, please create a [Issue](https://github.com/RisingLifeDE/types-fivem/issues/new)

### Credits

Thanks to [alloc8or](https://github.com/alloc8or/gta5-nativedb-data) and [CFX.re](https://cfx.re)