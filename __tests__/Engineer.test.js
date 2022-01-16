const Engineer = require('../lib/Engineer')

test("Is this an object?", ()=>{
    const obj = new Engineer()
    expect(typeof(obj)).toBe('object')
})

test('Can we get Id', () => {
    const id = 'test'
    const engineer = new Engineer('name', id)
    expect(engineer.getId()).toBe(id)
})

test('Can we get a github account', () => {
    const github = 'test'
    const engineer = new Engineer('name', 'id', 'email', github)
    expect(engineer.github).toBe(github)
})



test('Can we get the correct role', () => {
    const role = 'Engineer'
    const engineer = new Engineer('name', 'id', 'email', 'github')
    expect(engineer.getRole()).toBe(role)
})