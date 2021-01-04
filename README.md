# react-native-spacing

Consitent React Native `View` spacing utility.

## Installation

```
$ yarn add react-native-spacing
```

## Usage

```js
// src/views/theme.js
import { createMargin, createPadding } from 'react-native-spacing';

export const sizes = [0, 5, 10, 20, 40, 80, 160];

export const m = createMargin(sizes);

export const p = createPadding(sizes);

// src/views/atoms/box.js
import createView from 'react-native-spacing';

import { m, p } from '../theme';

export default createView(m, p);

// src/views/some-component.js
import Box from './atoms/box';

export default function SomeComponent({ children }) {
  return <Box p="3">{children}</Box>;
  // --> { padding: 20 }
}

// src/views/some-other-component.js
import { View } from 'react-native';
import { m } from './theme';

const $ = {
  container: {
    ...m[6],
    ...m.b0,
  },
};
// --> { margin: 160, marginBottom: 0 }

export default function SomeOtherComponent({ children }) {
  return <View style={$.container}>{children}</View>;
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

### `createView(margins, paddings)`

Package includes a simple `View` component with spacing props `m` & `p`:

```js
// src/components/box.js
import createView, { createMargin, createPadding } from 'react-native-spacing';

import { m, p } from '../theme';

export default createView(m, p);
```

Which can be used like so:

```js
// src/App.js
import Box from './components/box';

// sizes = [0, 10, 20, 40, 80];

<Box p="4" />; // --> { padding: 80 }
<Box m="b3" />; // --> { marginBottom: 40 }

<Box m="3 b0 v1" p="t2" />;
// --> { margin: 40, marginBottom: 0, marginVertical: 10, paddingTop: 20 }

// Etc...
```
