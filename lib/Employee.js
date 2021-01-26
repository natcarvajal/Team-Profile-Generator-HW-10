// The application must include Employee, Manager, Engineer, and Intern classes. The tests for these classes (in the _tests_ directory) must ALL pass.
// The first class is an Employee parent class with the following properties and methods:
// name
// id
// email
// getName()
// getId()
// getEmail()
// getRole()—returns 'Employee'
// The other three classes will extend Employee.

class Employee {
  constructor(name, id, email, role) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = role;
  }
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return this.role;
  }
}
module.exports = Employee;
