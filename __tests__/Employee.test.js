const Employee = require('../lib/Employee')

test("Is this an object?", () => {
    const obj = new Employee()
    expect(typeof(obj)).toBe('object')
})

//test for a name
test('Can we get a name', () => {
    const name = 'test'
    const employee = new Employee(name)
    expect(employee.name).toBe(name)
})

test('Can we get a name through the function', () => {
    const name = 'test'
    const employee = new Employee(name)
    expect(employee.getName()).toBe(name)
})

// test for an id


//test for an email


//test for the employee role