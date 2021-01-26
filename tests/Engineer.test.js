const { expect, test } = require("@jest/globals");
const Engineer = require("../lib/Engineer");

test("Should give us a new Engineer", () => {
  let test_eng = new Engineer(
    "test-name",
    123,
    "test@gmail.com",
    "Engineer",
    "test-username"
  );
  expect(test_eng.getName()).toEqual("test-name");
  expect(test_eng.getId()).toEqual(123);
  expect(test_eng.getRole()).toEqual("Engineer");
  expect(test_eng.getEmail()).toEqual("test@gmail.com");
  expect(test_eng.getGithub()).toEqual("test-username");
});
