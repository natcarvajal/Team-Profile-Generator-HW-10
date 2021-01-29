// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated
const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const out_file = require("./constants").OUTFILE;
const { report } = require("process");

const team = () => {
  inquirer
    .prompt([
      /* Pass your questions in here */
      {
        type: "input",
        name: "name",
        message: "Please enter team member's name",
      },
      {
        type: "input",
        name: "id",
        message: "Please enter team member's id number",
      },
      {
        type: "input",
        name: "email",
        message: "Please enter team member's email address",
      },
      {
        type: "list",
        name: "role",
        message: "Please enter team member's role",
        choices: ["Manager", "Engineer", "Intern"],
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Please enter team member's office number?",
        when: (answers) => answers.role === "Manager",
      },
      {
        type: "input",
        name: "github",
        message: "Please enter team member's github?",
        when: (answers) => answers.role === "Engineer",
      },
      {
        type: "input",
        name: "school",
        message: "What school is this person from?",
        when: (answers) => answers.role === "Intern",
      },
      {
        type: "confirm",
        name: "addMember",
        message: "Would you like to add another team member?",
        default: true,
      },
    ])
    .then((response) => {
      let emps = [];
      if (response.role == "Engineer") {
        emps.push(
          new Engineer(
            response.name,
            response.id,
            response.email,
            "Engineer",
            response.github
          )
        );
      } else if (response.role == "Manager") {
        emps.push(
          new Manager(
            response.name,
            response.id,
            response.email,
            response.role,
            response.officeNumber
          )
        );
      } else {
        emps.push(
          new Intern(
            response.name,
            response.id,
            response.email,
            "Intern",
            response.school
          )
        );
      }
      if (response.addMember) {
        team();
      } else {
        let outFile = generateFile(emps);
        fs.writeFile(out_file, outFile, (err) => {
          if (err) throw err;
          console.log("Success!");
        });
      }
    })
    .catch((error) => {
      error ? console.error(error) : console.log("Success!");
    });
};
function generateFile(emps) {
  let man = "";
  emps.forEach((emp) => {
    if (emp.role == "Manager") {
      man += `<!DOCTYPE html>
      <html lang="en">
      ​
      <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <title>My Team</title>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
              integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
          <link rel="stylesheet" href="style.css">
          <script src="https://kit.fontawesome.com/c502137733.js"></script>
      </head>
      ​
      <body>
          <div class="container-fluid">
              <div class="row">
                  <div class="col-12 jumbotron mb-3 team-heading">
                      <h1 class="text-center">My Team</h1>
                  </div>
              </div>
          </div>
          <div class="container">
              <div class="row">
                  <div class="team-area col-12 d-flex justify-content-center">
      <div class="card employee-card">
      <div class="card-header">
          <h2 class="card-title">${emp.name}</h2>
          <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${emp.role}</h3>
      </div>
      <div class="card-body">
          <ul class="list-group">
              <li class="list-group-item">ID: ${emp.id}</li>
              <li class="list-group-item">Email: <a href="mailto:${emp.email}">${emp.email}</a></li>
              <li class="list-group-item">Office number: ${emp.officeNumber}</li>
          </ul>
      </div>
  </div>
  </div>
  </div>
</div>
</body>
</html>`;
    } else if (emp.role == "Engineer") {
      man += `<!DOCTYPE html>
      <html lang="en">
      ​
      <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <title>My Team</title>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
              integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
          <link rel="stylesheet" href="style.css">
          <script src="https://kit.fontawesome.com/c502137733.js"></script>
      </head>
      ​
      <body>
          <div class="container-fluid">
              <div class="row">
                  <div class="col-12 jumbotron mb-3 team-heading">
                      <h1 class="text-center">My Team</h1>
                  </div>
              </div>
          </div>
          <div class="container">
              <div class="row">
                  <div class="team-area col-12 d-flex justify-content-center">
            <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${emp.name}</h2>
            <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${emp.role}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${emp.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${emp.email}">${emp.email}</a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/${emp.github}" target="_blank" rel="noopener noreferrer">${emp.github}</a></li>
            </ul>
        </div>
    </div>
    </div>
    </div>
</div>
</body>
</html>`;
    } else {
      man += `<!DOCTYPE html>
      <html lang="en">
      ​
      <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <title>My Team</title>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
              integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
          <link rel="stylesheet" href="style.css">
          <script src="https://kit.fontawesome.com/c502137733.js"></script>
      </head>
      ​
      <body>
          <div class="container-fluid">
              <div class="row">
                  <div class="col-12 jumbotron mb-3 team-heading">
                      <h1 class="text-center">My Team</h1>
                  </div>
              </div>
          </div>
          <div class="container">
              <div class="row">
                  <div class="team-area col-12 d-flex justify-content-center">
                  <div class="card employee-card">
      <div class="card-header">
          <h2 class="card-title">${emp.name}</h2>
          <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${emp.role}</h3>
      </div>
      <div class="card-body">
          <ul class="list-group">
              <li class="list-group-item">ID:${emp.id}</li>
              <li class="list-group-item">Email: <a href="mailto:${emp.email}">${emp.email}</a></li>
              <li class="list-group-item">School: ${emp.school}</li>
          </ul>
      </div>
  </div>
  </div>
  </div>
</div>
</body>
</html>`;
    }
  });
  return man;
}
team();
