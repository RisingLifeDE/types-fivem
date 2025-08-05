# FiveM Native/Game Types

This package contains an wrapper for the FiveM typings.
It oriented at the native db by alloc8or as it's always up-to-date.

### Example usage
```js
import * as game from '@risinglife/fivem-natives';

game.scripts.shutdownLoadingScreen();
```

### Since v0.2.0
All root methods (e.g. `game.playerId()`) were removed.
The reason for this is clearly that namespaced methods are better and clearer.

If you want them, you must downgrade to version [0.1.1](https://www.npmjs.com/package/@risinglife/fivem-natives/v/0.1.1)
Remind: Only the latest version contains the newest natives.

### Information

For client access see [this package](https://www.npmjs.com/package/@risinglife/fivem-client)<br>
You can see all functions, and how they can be use at [nativedb.dotindustries.dev](https://nativedb.dotindustries.dev/gta5/natives)<br>
The package must be included when compile the code for example with **esbuild**.

### Contribute

As this package content is being generated from a json file, we do not accept direct pull requests.
If you have issues, please create a [Issue](https://github.com/RisingLifeDE/types-fivem/issues/new)

### Credits

Thanks to [alloc8or NativeDB](https://github.com/alloc8or/gta5-nativedb-data/) and [cfx.re](https://cfx.re)