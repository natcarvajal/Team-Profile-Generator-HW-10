const { expect, test } = require("@jest/globals");
const Employee = require("../lib/Employee");

test("Should give us a new employee", () => {
  let test_emp = new Employee("test-name", 123, "test@email.com", "Desk Clerk");
  expect(test_emp.getName()).toEqual("test-name");
  expect(test_emp.getId()).toEqual(123);
  expect(test_emp.getRole()).toEqual("Desk Clerk");
  expect(test_emp.getEmail()).toEqual("test@email.com");
});
