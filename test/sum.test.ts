import { sum } from "../src/sum";

test("adds 3 + 1 to equal 4", () => {
  expect(sum(3, 1)).toBe(4);
});

test("adding a negative number to a positive number should return correct result", () => {
  expect(sum(-3, 1)).toBe(-2);
});
