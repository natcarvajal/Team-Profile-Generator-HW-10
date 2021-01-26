const { test, describe, it, expect } = require("@jest/globals");
const Intern = require("../lib/Intern");

describe("Intern Class", () => {
  it("Should give us a new Intern", () => {
    let new_emp = new Intern("test", 123, "test@intern.com", "Intern", "UCLA");
    expect(new_emp.getEmail()).toEqual("test@intern.com");
  });
});
