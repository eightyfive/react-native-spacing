# DEPRECATED

Use a combination of [`react-native-col`](https://github.com/eightyfive/react-native-col) & [`react-native-spacesheet`](https://github.com/eightyfive/react-native-spacesheet) instead.

## Description

A wrapper around the react-native `<View/>` component enabling concise assignment of flexbox layout properties.

The idea is to keep JSX as clean as possible, while removing the need to manage stylesheet declarations for common positioning needs.

## Differences with `react-native-row`

Due to inactivity of the original repository, I've made the following changes to the package

- [(HOT)Fixed](https://github.com/hyrwork/react-native-row/pull/13) broken shorthand notation
- Implemented [cached styles](https://github.com/hyrwork/react-native-row/issues/10)
- Replaced actual values in shorthand notation, by `0, 1, 2, 3, 4, 5` sizes [à la Bootstrap v4](https://getbootstrap.com/docs/4.0/utilities/spacing/)
- Added multiple spacing shorthand properties: `mb` (marginBottom), `pv` (paddingVertical), etc...
- Added unit tests

## Installation

```
$ yarn add react-native-spacing
```

## Basic Usage

Use react-native-spacing as little or as much as you want.

```js
// Before
<View style={{ flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center" marginBottom: 16 }} />
<View style={{ justifyContent: "flex-end", alignItems: "flex-start", paddingVertical: 0, paddingHorizontal: 32 }} />

// After
<Row dial={5} flex mb={3} />
<Col dial={6} p={[0, 4]} />
```

## Documentation

### `Col` (`View`) & `Row` components

Import the `View` component of this package as `Col` for explicitness versus `Row` component:

```js
import Col from "react-native-spacing";

```

Alternatively import the `Col` component as `View`:

```js
import View from "react-native-spacing";
```

Import the `Row` component as so:

```js
import { Row } from "react-native-spacing";
```

#### Example

```js
import Col, { Row } from "react-native-spacing";

<Col dial={5} flex>
  <Row style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
  <Col style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
  <Row style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
</Col>
```

<img src="examples/example2.jpg" width="180" />


### `dial` property

One of the most DRY features of react-native-spacing is the `dial` property.

The idea behind this shorthand notation, is to position the child components of `Row`/`Col` according to the position of the `dial` number on a phone dial pad.

#### Example

```js
import { Row } from "react-native-spacing";

<Row dial={5} flex />
```

`5` is centered along both axis and, because this is a `Row`, children are horizontally aligned:

<img src='examples/example1.jpg' width="180" />

### `space` property

You can also use the `space` property to override `justifyContent`:

```js
<Col dial={5} space="between" flex />
```

<img src="examples/example3.jpg" width="180" />

```js
<Col dial={5} space="around" flex />
```

<img src="examples/example4.jpg" width="180" />

### `stretch` property

Use the `stretch` property to override `alignItems`:

```js
<Col dial={5} stretch flex />
```

### `flex` property

```js
<Row flex /> // flex = 1 by default
<Row flex={3} />
```

### `reverse` property

Use reverse to change `row` to `row-reverse` or `column` to `column-reverse`:

```js
<Row reverse />
<Col reverse />
```

### Margin and Padding

Margin and padding shorthands are inspired by [Bootstrap v4 spacing utility system](https://getbootstrap.com/docs/4.0/utilities/spacing/).

Extra benefits are gained by using react-native-spacing instead of the core react-native `View` in that you can use shorthands for `margin` and `padding` styles that are based on the css shorthand convention:

```js
<Row margin={[0, 1, 2, 3]} />

// Becomes:

<View style={{ flexDirection: "row", paddingTop: 0, paddingRight: 4, paddingBottom: 8, paddingLeft: 16 }} />
```

#### Configuring spacing values

By default spacing "values" are:

  - `0 = 0`
  - `1 = 4`
  - `2 = 8`
  - `3 = 16`
  - `4 = 32`

You can configure your own spacing values as follow:

```js
import { setSizes } from "react-native-spacing/config";

setSizes([0, 10, 20, 30, 60, 100, 500, ...]);
```

Later in your app, simply specify the index of the targeted size:

```js
<Row p={6} />

// Becomes:

<View style={{ flexDirection: "row", padding: 500 }} />
```

#### `setSizes` API

```js
function setSizes(<sizes>);
function setSizes(<amount>, <range>, <strategy>);
```

  - `sizes`: A plain `array` of sizes
  - `amount`: The amount of spacing to use in `strategy`
  - `range`: Number of sizes to generate with `strategy`
  - `strategy`: `function` to calculate the new spacing value

Examples:

```js
// "Double" strategy (default)
setSizes(4, 5, (amount, index, range) => amount * Math.pow(2, index));
// -> [0, 4, 8, 16, 32, 64]

// "Linear" strategy
setSizes(10, 10, (amount, index, range) => amount * index);
// -> [0, 10, 20, 30, 40, 50, 60, 70, 80, 90]

// "Offset" strategy
setSizes(2, 3, (amount, index, range) => amount * index + 27);
// -> [27, 29, 31]

// ...
setSizes(5, 4, (amount, index, range) => amount * index * range);
setSizes(20, 4, (amount, index, range) => amount * index);
// -> [0, 20, 40, 60]
```


#### `margin` shorthands

Shorthand   | Style Result
------------ | -------------
`m={3}` | `{margin: 16}`
`m={[3]}` | `{margin: 16}`
`m={[3, 0]}` | `{marginVertical: 16, marginHorizontal: 0}`
`m={[3, 0, 5]}` | `{marginTop: 16, marginHorizontal: 0, marginBottom: 64}`
`m={[3, 0, 5, 1]}` | `{marginTop: 16, marginRight: 0, marginBottom: 64, marginLeft: 4}`
`mt={3}` | `{marginTop: 16}`
`ml={3}` | `{marginLeft: 16}`
`mb={3}` | `{marginBottom: 16}`
`mr={3}` | `{marginRight: 16}`
`mv={3}` | `{marginVertical: 16}`
`mh={3}` | `{marginHorizontal: 16}`


#### `padding` shorthands

Shorthand   | Style Result
------------ | -------------
`p={3}` | `{padding: 16}`
`p={[3]}` | `{padding: 16}`
`p={[3, 0]}` | `{paddingVertical: 16, paddingHorizontal: 0}`
`p={[3, 0, 5]}` | `{paddingTop: 16, paddingHorizontal: 0, paddingBottom: 64}`
`p={[3, 0, 5, 1]}` | `{paddingTop: 16, paddingRight: 0, paddingBottom: 64, paddingLeft: 4}`
`pt={3}` | `{paddingTop: 16}`
`pl={3}` | `{paddingLeft: 16}`
`pb={3}` | `{paddingBottom: 16}`
`pr={3}` | `{paddingRight: 16}`
`pv={3}` | `{paddingVertical: 16}`
`ph={3}` | `{paddingHorizontal: 16}`

