const { add, subtract, multiply, divide, isPalindrome, fibonacci } = require("../src/index");

describe("Math Functions", () => {
  test("add should return sum of two numbers", () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-1, 1)).toBe(0);
    expect(add(0, 0)).toBe(0);
  });

  test("subtract should return difference of two numbers", () => {
    expect(subtract(5, 3)).toBe(2);
    expect(subtract(0, 5)).toBe(-5);
  });

  test("multiply should return product of two numbers", () => {
    expect(multiply(3, 4)).toBe(12);
    expect(multiply(-2, 3)).toBe(-6);
    expect(multiply(0, 100)).toBe(0);
  });

  test("divide should return quotient of two numbers", () => {
    expect(divide(10, 2)).toBe(5);
    expect(divide(7, 2)).toBe(3.5);
  });

  test("divide should throw error when dividing by zero", () => {
    expect(() => divide(5, 0)).toThrow("Cannot divide by zero");
  });
});

describe("String Functions", () => {
  test("isPalindrome should return true for palindromes", () => {
    expect(isPalindrome("racecar")).toBe(true);
    expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
    expect(isPalindrome("12321")).toBe(true);
  });

  test("isPalindrome should return false for non-palindromes", () => {
    expect(isPalindrome("hello")).toBe(false);
    expect(isPalindrome("world")).toBe(false);
  });
});

describe("Sequence Functions", () => {
  test("fibonacci should return correct sequence", () => {
    expect(fibonacci(0)).toEqual([]);
    expect(fibonacci(1)).toEqual([0]);
    expect(fibonacci(5)).toEqual([0, 1, 1, 2, 3]);
    expect(fibonacci(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
  });

  test("fibonacci should handle edge cases", () => {
    expect(fibonacci(-5)).toEqual([]);
    expect(fibonacci(2)).toEqual([0, 1]);
  });
});
