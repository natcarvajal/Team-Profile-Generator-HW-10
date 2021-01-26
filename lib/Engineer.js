// In addition to Employee's properties and methods, Engineer will also have the following:
// github—GitHub username
// getGithub()
// getRole()—overridden to return 'Engineer'-------i dont understand

const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, role, githubUsername) {
    super(name, id, email, role);
    this.role = "Engineer";
    this.githubUsername = githubUsername;
  }
  getGithub() {
    return this.githubUsername;
  }
  getRole() {
    return this.role;
  }
}

module.exports = Engineer;

// class Vehicle {
//     constructor(id, numberOfWheels, sound) {
//       this.id = id;
//       this.numberOfWheels = numberOfWheels;
//       this.sound = sound;
//     }

//     printInfo() {
//       console.log(`This vehicle has ${this.numberOfWheels} wheels`);
//       console.log(`This vehicle has an id of ${this.id}`);
//     }
//   }
//   module.exports = Vehicle;
