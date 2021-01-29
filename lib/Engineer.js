// In addition to Employee's properties and methods, Engineer will also have the following:
// github—GitHub username
// getGithub()
// getRole()—overridden to return 'Engineer'-------i dont understand

const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, role, github) {
    super(name, id, email, role);
    this.role = "Engineer";
    this.github = github;
  }
  getGithub() {
    return this.github;
  }
  getRole() {
    return this.role;
  }
}

module.exports = Engineer;
