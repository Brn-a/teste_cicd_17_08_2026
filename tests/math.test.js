const math = require('../math');

test('soma 2 + 3 igual a 5', () => {
    expect(math.add(2, 3)).toBe(5);

});

test('subitração 2 - 3 igual a -5', () => {
    expect(math.subtract(2, 3)).toBe(-5);

});
