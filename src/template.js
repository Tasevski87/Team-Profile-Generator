//function  where we create out put for our team
function createTeam(team) {
    //output data for manager
    function createManager(manager) {
        return `
        <div>
            <h2>Name: ${manager.getName()}</h2>
            <h5>Role: ${manager.getRole()}</h5>
            <h5>ID: ${manager.getId()}</h5>
            <h5>Email:<a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></h5>
            <h5>Office Number: ${manager.getOfficeNumber()}</h5>
        
        </div>
        `
    }
    //output data for engineer
    function createEngineer(engineer) {
        return `
        <div>
            <h2>Name:${engineer.getName()}</h2>
            <h5>Role: ${engineer.getRole()}</h5>
            <h5>ID: ${engineer.getId()}</h5>
            <h5>Email:<a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></P>
            <h5>GitHub Username: ${engineer.getGithub()}</h5>
            </div>
        `
    }
    //output data for intern
    function createIntern(intern) {
        return `
        <div>
            <h2>Name: ${intern.getName()}</h5>
            <h5>Id: ${intern.getId()}</h5>
            <h5>Email:<a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></P>
            <h5>School: ${intern.getSchool()}</h5>
            <h5>Role: ${intern.getRole()}</h5>
        </div>
        `

    }

    const workers = []
    // pushing team members into the array and checking their roles to run the correct function
    workers.push(team.filter(worker => worker.getRole() === "Manager").map(manager => createManager(manager)))
    workers.push(team.filter(worker => worker.getRole() === "Engineer").map(engineer => createEngineer(engineer)))
    workers.push(team.filter(worker => worker.getRole() === "Intern").map(intern => createIntern(intern)))
    return workers.join("")

}
//exporting the data to the html
module.exports = team => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <div>${createTeam(team)}</div>
    </body>
    </html>`
}