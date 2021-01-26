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
        message: "Please enter team member's id",
      },

      {
        type: "input",
        name: "id",
        message: "Please enter team member's email address",
      },
      {
        type: "list",
        name: "role",
        message: "Please enter team member's role",
        choices: ["Manager", "Engineer", "Intern"],
      },
    ])
    .then((response) => {
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
  return `<h1>${response.name}</h1>`;
}
team();
