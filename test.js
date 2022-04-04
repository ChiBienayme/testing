const isEven = require("./utils/isEven");

// tests unitaires

test('if the number is even', () => {
    expect(isEven(2)).toBe(true);
  });
  
test('if the number is not even', () => {
    expect(isEven(1)).toBe(false);
});

test('if the parameter is a string', () => {
    expect(isEven("abc")).toBe(false);
});

test('if the parameter is a string and containts a number', () => {
    expect(isEven("12")).toBe(true);
  });