// In addition to Employee's properties and methods, Intern will also have the following:
// school
// getSchool()
// getRole()—overridden to return 'Intern'
const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, role, school) {
    super(name, id, email, role);
    this.role = "Intern";
    this.school = school;
  }
  getSchool() {
    return this.school;
  }
  getRole() {
    return this.role;
  }
}

module.exports = Intern;
