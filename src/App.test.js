import { sum } from "./utils/sum";
import { greetings } from "./utils/sum";
test("check if 5 > 1", () => {
  // arrange
  const myVar = 5;
  const mySecondVar = 1;
  // act
  const isBigger = myVar > mySecondVar;
  // assert
  expect(isBigger).toBeTruthy();
});

test("check if sum func 5,5 equals 10", () => {
  const result = sum(5, 5);
  expect(result).toBe(10);
});

test(`greetings returns "Hello Word"`, () => {
  expect(greetings("Hello Word")).toBe("Hello Word");
});
test(`greetings returns "Hello Word"`, () => {
  expect(greetings("   Hello    world    ")).toBe("Hello Word");
});
test(`greetings returns "Hello Word"`, () => {
  expect(greetings("   heLLo    world    ")).toBe("Hello Word");
});
test(`greetings returns "Hello Word"`, () => {
  expect(greetings("   hello    World    ")).toBe("Hello Word");
});
test(`greetings returns "Hello Word"`, () => {
  expect(greetings("dfdsfdsf")).toBe("Hello Word");
});
