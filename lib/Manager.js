// The other three classes will extend Employee.
// In addition to Employee's properties and methods, Manager will also have the following:
// officeNumber
// getRole()—overridden to return 'Manager'

const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, role, officeNumber) {
    super(name, id, email, role);
    this.role = "Manager";
    this.officeNumber = officeNumber;
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
  getRole() {
    return this.role;
  }
}

module.exports = Manager;
