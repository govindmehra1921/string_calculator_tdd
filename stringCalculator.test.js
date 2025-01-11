const { add } = require("./stringCalculator");

test('should return 0 for an empty string', () => {
  expect(add("")).toBe(0);
});

test('should return the number itself for a single number', () => {
  expect(add("1")).toBe(1);
});

test('should return the sum of two numbers separated by commas', () => {
  expect(add("1,2")).toBe(3);
});

test('should return the sum of multiple numbers', () => {
  expect(add("1,2,3,4")).toBe(10);
});

test('should handle new lines as well as commas', () => {
  expect(add("1\n2,3")).toBe(6);
});

test('should support different delimiters', () => {
  expect(add("//;\n1;2")).toBe(3);
});

test('should throw an exception for negative numbers', () => {
  expect(() => add("1,-2,-5")).toThrow("negatives not allowed: -2, -5");
});

test('should ignore numbers greater than 1000', () => {
  expect(add("2,1001")).toBe(2);
});

test('should handle custom delimiters with multiple characters', () => {
  expect(add("//[***]\n1***2***3")).toBe(6);
});

test('should handle multiple delimiters', () => {
    expect(add("//[*][%]\n1*2%3")).toBe(6);  
});
  
test('should handle multiple delimiters of different lengths', () => {
    expect(add("//[***][%%][#]\n1***2%%3#4")).toBe(10);  
});

