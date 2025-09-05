# FiveM Client Types

This package contains "easy-to-use" types for FiveM.

For example:
```js
import * as client from '@risinglife/fivem-client';

client.nui.shutdownLoadingScreen();
```

### Since v0.2.0
All root methods (e.g. `client.shutdownLoadingScreenNui()`) were removed.
The reason for this is clearly that namespaced methods are better and clearer.

If you want them, you must downgrade to version [0.1.0](https://www.npmjs.com/package/@risinglife/fivem-client/v/0.1.0)
Remind: Only the latest version contains the newest natives.


For native access see [this package](https://www.npmjs.com/package/@risinglife/fivem-natives)<br>
You can see all functions, and how they can be use at [https://docs.fivem.net/natives/](https://docs.fivem.net/natives/)<br>
The package must be included when compile the code for example with **esbuild**.