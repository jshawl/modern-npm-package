import fn from "../index";
test("the ability to test", () => {
  expect(1).toBe(1);
});

test("import statements", () => {
  expect(typeof fn).toBe("function");
  expect(fn()).toBe(true);
});
