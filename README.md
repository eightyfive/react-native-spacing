# react-native-spacing

Consitent React Native spacing utility.

## Installation

```
$ yarn add react-native-spacing
```

## Usage

```js
// src/theme.js
import { createMargin, createPadding } from 'react-native-spacing';

const sizes = [0, 5, 10, 20, 40, 80, 160];

export const m = createMargin(sizes);

export const p = createPadding(sizes);

// src/components/foo.js
import { View } from 'react-native';

import { m, p } from '../theme';

const $ = {
  container: {
    ...m[6],
    ...p.v4,
  },
};
// --> { margin: 160, marginBottom: 0, paddingVertical: 40 }

export default function Foo({ style, ...rest }) {
  return <View {...rest} style={[$.container, m.b0, p.t0,  style]} />;
  // --> ... + { marginBottom: 0 }, { paddingTop: 0 } + style
}
```

## Documentation

### `createMargin(sizes, aliases)`

```js
import { createMargin } from 'react-native-spacing';

const m = createMargin([0, 4, 8, 16, 32]);

m[1]; // --> { margin: 4 }
m[4]; // --> { margin: 32 }

m.v2; // --> { marginVertical: 8 }
m.b3; // --> { marginBottom: 16 }

// Etc...
```

You can pass custom aliases like so:

```js
const m = createMargin([0, 10, 20, 40, 80], {
  T: 'Top',
  R: 'Right',
  B: 'Bottom',
  L: 'Left',
  Y: 'Vertical',
  X: 'Horizontal',
});

m.Y2; // --> { marginVertical: 20 }
m.B3; // --> { marginBottom: 40 }

// Etc...
```

### `createPadding(sizes, aliases)`

```js
import { createPadding } from 'react-native-spacing';

const p = createPadding([0, 4, 8, 16, 32]);

p[4]; // --> { padding: 32 }

// Same as above...
```
