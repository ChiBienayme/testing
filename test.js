const isEven = require("./utils/isEven");
const formatDate = require("./utils/formatDate")

// tests unitaires
//isEven
test('if the number is even', () => {
    expect(isEven(2)).toBe(true);
  });

//   not isEven
test('if the number is not even', () => {
    expect(isEven(1)).toBe(false);
});

// a string
test('if the parameter is a string', () => {
    expect(isEven("abc")).toBe(false);
});

// a string include numbers
test('if the parameter is a string and containts a number', () => {
    expect(isEven("12")).toBe(true);
});

// formatDate
test('if the parameter is in yyyy-mm-dd format', () => {
    expect(formatDate("yyyy-mm-dd")).toBe("dd/mm/yyyy");
  });

// not formatDate
test('if the parameter is in yyyy-mm-dd format', () => {
expect(formatDate(2)).toBe(null);
});