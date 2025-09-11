# FiveM Client Types

This package contains "easy-to-use" types for FiveM.

For example:
```js
import * as client from '@risinglife/fivem-client';

client.nui.shutdownLoadingScreen();
```

For native access see [this package](https://www.npmjs.com/package/@risinglife/fivem-natives)<br>
You can see all functions, and how they can be use at [https://nativedb.dotindustries.dev/gta5/natives/](https://nativedb.dotindustries.dev/gta5/natives/)<br>
The package must be included when compile the code for example with **esbuild**.

### Looking for a bundled variant?
Install the package [@risinglife/fivem-client-bundled](https://www.npmjs.com/package/@risinglife/fivem-client-bundled) to have both the client and Game Natives directly in one package.

This package will also be kept up to date, just like the standalone packages.

### Since v0.2.0
All root methods (e.g. `client.shutdownLoadingScreenNui()`) are no longer supported.
The reason for this is clearly that namespaced methods are better and clearer.

This package can be used to support backward compatibility.
**Note:** This package is no longer being updated, so it is recommended to upgrade to the latest version of the package.

### Contribute

As this package content is being generated from a json file, we do not accept direct pull requests.
If you have issues, please create a [Issue](https://github.com/RisingLifeDE/types-fivem/issues/new)

### Credits

Thanks to [alloc8or](https://github.com/alloc8or/gta5-nativedb-data) and [CFX.re](https://cfx.re)