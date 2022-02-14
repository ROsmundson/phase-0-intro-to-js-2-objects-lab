// Write your solution in this file!
const employee = {
    name: 'Teagan',
    streetAddress: '123 street street', 
}
employee;

function updateEmployeeWithKeyAndValue(obj, key, value){
    const newEmployee = { ...obj };
    newEmployee[key] = value;
    return newEmployee
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    obj[key] = value
    return obj
}

function deleteFromEmployeeByKey(key, value){
    const newEmployee = {}
    newEmployee[key] = value;
    return newEmployee
}

function destructivelyDeleteFromEmployeeByKey(obj, key, value){
    employee[key] = value;
    return employee
}