const cloneArray = require('./cloneArray');

test('clone array', () => {
    let array = [0, 1, 2, 3];
    expect(cloneArray(array)).toEqual(array);
})