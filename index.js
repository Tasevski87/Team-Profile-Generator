// installed packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
const generatePage = require('./src/template')

const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')



const workersArray = []

//created promp for input
inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'Whats the managers name?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter the Manager's name!")
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'Please enter managers ID!',
        //validating if we enter number 
        validate: idInput => {
            if (!isNaN(idInput)) {
                return true
            } else {
                console.log('Please enter managers ID!')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter managaers email!',
        //validating if we entered correct email
        validate: emailInput => {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput)) {
                return (true)
            }else{
            console.log("Invalid email address!")
            return (false)
            }
        }
    },
    
    {
        type: 'input',
        name: 'officeNumber',
        message: 'Please enter office number!',
        //validating if we enter number 
        validate: officeNumberInput => {
            if (!isNaN(officeNumberInput)) {
                return true
            } else {
                console.log('Please enter the office number!')
            }
        }

    }

])
    .then(managerInput => {

        const manager = new Manager(managerInput.name, managerInput.id, managerInput.email, managerInput.officeNumber)

        workersArray.push(manager);
        console.log(workersArray);
        addEmployee()
    })
//function for adding another employee
function addEmployee() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'employee',
            message: 'Who would you like to add next?',
            choices: ["Engineer", 'Intern', 'Done']
        }
    ]).then(answer => {
        if (answer.employee === 'Engineer') {
            addEngineer()
        } else if (answer.employee === 'Intern') {
            addIntern()
        } else {
            createTeam()
        }
    })
}


const addEngineer = () => {
    console.log(`
    ==============
    Adding workers
    ==============
    `);
    return inquirer.prompt([

        {
            type: 'input',
            name: 'name',
            message: ('Engineers name?'),
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log('Please enter engineer name!')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter engineer ID!',
            //validating if we enter number 
            validate: idInput => {
                if (isNaN(idInput)) {
                    console.log('Please enter engineers Id!')
                    return false
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter engineers email!',
             //validating if we entered correct email
            validate: emailInput => {
                if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput)) {
                    return (true)
                }else{
                console.log("Invalid email address!")
                return (false)
                }
            }
        },

        {
            type: 'input',
            name: 'gitHub',
            message: 'Please enter engineers gitHub username',
            validate: gitHubInput => {
                if (gitHubInput) {
                    return true;
                } else {
                    console.log('Please enter engineers gitHub username')
                }
            }
        },
    ])
        .then(engineerInput => {
            const engineer = new Engineer(engineerInput.name, engineerInput.id, engineerInput.email, engineerInput.gitHub)

            workersArray.push(engineer);
            console.log(workersArray);
            addEmployee()

        })
}

function addIntern() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: ('Inntern name?'),
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log('Please enter Intern name!')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter Intern ID!',
            //validating if we enter number 
            validate: idInput => {
                if (isNaN(idInput)) {
                    console.log('Please enter Intern Id!')
                    return false
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter Intern email!',
             //validating if we entered correct email
            validate: emailInput => {
                if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput)) {
                    return (true)
                }else{
                console.log("Invalid email address!")
                return (false)
                }
            }
        },

        {
            type: 'input',
            name: 'school',
            message: 'Please enter intern school',
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log('Please tnter interns school')
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add more employees?',
            // default: false
        },
    ])
        .then(internInput => {
            const intern = new Intern(internInput.name, internInput.id, internInput.email,internInput.school)

            workersArray.push(intern);
            console.log(workersArray);
            addEmployee()


        })
}
// function where we create and wright the html file
function createTeam() {
    // fs.writefile() with the workersarray data
    fs.writeFile('team.html', generatePage(workersArray), (err) => err ? console.log(err) : console.log('team.html file was created'))
}