const o = Object;

const defaultAliases = {
  t: 'Top',
  r: 'Right',
  b: 'Bottom',
  l: 'Left',
  v: 'Vertical',
  h: 'Horizontal',
};

function createStyles(spacing, sizes, aliases) {
  const styles = {};

  sizes.forEach((size, index) => {
    styles[index] = { [spacing]: size };
  });

  o.entries(aliases).forEach(([alias, position]) => {
    sizes.forEach((size, index) => {
      styles[`${alias}${index}`] = { [`${spacing}${position}`]: size };
    });
  });

  return styles;
}

export function createMargin(sizes, aliases = defaultAliases) {
  return createStyles('margin', sizes, aliases);
}

export function createPadding(sizes, aliases = defaultAliases) {
  return createStyles('padding', sizes, aliases);
}
