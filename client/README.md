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

### Since v0.1.0
All root methods (e.g. `client.shutdownLoadingScreenNui()`) are now deprecated.
The reason for this is clearly that namespaced methods are better and clearer.

To have downward compatibility for the time being, all root methods are still available as wrapped methods.
So that you can easily migrate, you only have to look at the deprecation message of the respective methods.

With v0.2.0, all root methods are completely removed.
Alternatively, you can “install” `@risinglife/fivem-client@rootless` to have no root methods at all.

### Contribute

As this package content is being generated from a json file, we do not accept direct pull requests.
If you have issues, please create a [Issue](https://github.com/RisingLifeDE/types-fivem/issues/new)

### Credits

Thanks to [alloc8or](https://github.com/alloc8or/gta5-nativedb-data) and [CFX.re](https://cfx.re)