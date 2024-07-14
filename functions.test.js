const functions = require("./functions");

test("Adds 2 + 2 to equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
  expect(functions.add(1, 1)).toBeGreaterThan(1);
});

test("Adds 2+2 to not equal 5", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

// toBeNull toBeUndefined toBeDefined toBeTruthy toBeFalsy

test("Should be null", () => {
  expect(functions.isNull()).toBeNull();
});

test("Should be falsy", () => {
  expect(functions.checkValue(null)).toBeFalsy();
  expect(functions.checkValue(undefined)).toBeFalsy();
  expect(functions.checkValue(0)).toBeFalsy();
  expect(functions.checkValue(false)).toBeFalsy();
});

test("User should be Jordan Blakey object", () => {
  expect(functions.createUser()).toEqual({
    firstName: "Jordan",
    lastName: "Blakey",
  });
});

// Less than and greater than
test("Should be under 1600", () => {
  const load1 = 800;
  const load2 = 700;
  expect(load1 + load2).toBeLessThan(1600);
});

// Regex
test("There is no I in team", () => {
  expect("team").not.toMatch(/I/);
});

// Arrays
test("Admin should be in usernames", () => {
  usernames = ["john", "karen", "admin"];
  expect(usernames).toContain("admin");
});

// Working with async data
test("User fetched name should be Leanne Graham", async () => {
  // expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual("Leanne Graham");
});
