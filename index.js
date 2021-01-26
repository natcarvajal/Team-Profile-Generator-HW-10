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
          new Engineer(response.name, response.id, response.email, "Engineer")
        );
      } else if (response.role == "Manager") {
        emps.push(
          new Manager(response.name, response.id, response.email, response.role)
        );
      } else {
        emps.push(
          new Intern(
            respons.name,
            response.id,
            response.email,
            "Intern",
            response.school
          )
        );
      }
      let outFile = generateFile(response);
      fs.writeFile(out_file, outFile, (err) => {
        if (err) throw err;
        console.log("Success!");
      });
    })
    .catch((error) => {
      error ? console.error(error) : console.log("Success!");
    });
};
function generateFile(response) {
  console.log(response);
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
        crossorigin="anonymous"
      />
      <link rel="stylesheet" href="style.css" />
      <title>My Team</title>
    </head>
  
    <body>
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4 text-center">Team</h1>
            </div>
        </div>
            <div class="card" style="width: 18rem;">
                <div class="card-header">${response.role}
                </div>
                <div class="card-header">${response.name}
                <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${response.id}</li>
                <a href="mailto:${response.email}" class="list-group-item">Email: ${response.email} </a>
                <li class="list-group-item">Vestibulum at eros</li>
                </ul>
            </div> 
      <script
        src="https://kit.fontawesome.com/7c715641eb.js"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
        integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
        integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
        integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
        crossorigin="anonymous"
      ></script>
      <script src="index.js"></script>
    </body>
  </html>
`;
}
team();
// <i class="fas fa-mug-hot"></i>
// <i class="fas fa-desktop"></i>
// <i class="fas fa-graduation-cap"></i>
