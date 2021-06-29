import { sum } from "../src/sum";

test("adds 3 + 1 to equal 4", () => {
  expect(sum(3, 1)).toBe(4);
});
