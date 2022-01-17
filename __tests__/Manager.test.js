//test for object, office number and role 
const Manager = require('../lib/Manager')

test ("Is this an object?", () =>{
    const obj = new Manager ()
    expect (typeof(obj)).toBe('object')
})



test ("Can we get office number?", () =>{
    const officeNumber = 'test'
    const manager = new Manager('name', 'id', 'email', officeNumber)
    expect (manager.getOfficeNumber()).toBe(officeNumber)
})

test("Can we get role?", () => {
    const role = "Manager"
    const manager = new Manager("name","id", "email", "officeNumber")
    expect(manager.getRole()).toBe(role)
})