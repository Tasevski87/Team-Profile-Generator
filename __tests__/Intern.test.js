//test for object, email and school 
const Intern = require('../lib/Intern')

test("Is this an object?", () => {
    const obj = new Intern ()
    expect(typeof(obj)).toBe('object')
})

test ("Can we get an email?", () => {
    const email = 'test'
    const intern = new Intern('name', 'id', email)
    expect(intern.getEmail()).toBe(email)
})

test ("Can we get a school?", () => {
    const school = 'test'
    const intern = new Intern ('name', 'id', 'email', school)
    expect(intern.getSchool()).toBe(school)
})





















