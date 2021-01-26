const { expect, test } = require("@jest/globals");
const Manager = require("../lib/Manager");

test("Should give us a new Manager", () => {
  let test_man = new Manager(
    "test-name",
    123,
    "test@gmail.com",
    "Manager",
    303
  );
  expect(test_man.getName()).toEqual("test-name");
  expect(test_man.getId()).toEqual(123);
  expect(test_man.getRole()).toEqual("Manager");
  expect(test_man.getEmail()).toEqual("test@gmail.com");
  expect(test_man.getOffice()).toEqual(303);
});
