import { soma1 } from "../domain/calc"

test('soma de 1 + 1 = 2', () => {
  expect(soma1(1, 1)).toBe(2);
});
