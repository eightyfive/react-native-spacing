import { createMargin, createPadding } from './index';

const sizes = [0, 4, 8, 16, 32];

describe('Spacing', () => {
  test('create', () => {
    const m = createMargin(sizes);
    const p = createPadding(sizes);

    expect(m[1]).toHaveProperty('margin', 4);
    expect(p[4]).toHaveProperty('padding', 32);

    expect(m.t2).toHaveProperty('marginTop', 8);
    expect(p.b3).toHaveProperty('paddingBottom', 16);
    expect(m.v1).toHaveProperty('marginVertical', 4);
    expect(p.h0).toHaveProperty('paddingHorizontal', 0);
  });

  test('custom aliases', () => {
    const m = createMargin(sizes, {
      T: 'Top',
      R: 'Right',
      B: 'Bottom',
      L: 'Left',
      Y: 'Vertical',
      X: 'Horizontal',
    });

    expect(m[0]).toHaveProperty('margin', 0);
    expect(m.T2).toHaveProperty('marginTop', 8);
    expect(m.Y1).toHaveProperty('marginVertical', 4);
  });
});
