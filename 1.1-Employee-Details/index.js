// index.js
const Company = require('./company');
const Employee = require('./employee');

// Create company
const myCompany = new Company('Zensar Technologies Limited, Pune');

// Add default employees
myCompany.addEmployee(new Employee(1, 'Abhijeet Gole', 'Pune'));
myCompany.addEmployee(new Employee(2, 'Anup Vishwakarma', 'Mumbai'));
myCompany.addEmployee(new Employee(3, 'Bhargavi Kulkarni', 'Pune'));
myCompany.addEmployee(new Employee(4, 'Santosh Kumar Singh', 'Delhi'));

// Show list of employees
console.log('All Employees:');
myCompany.listEmployees().forEach(details => console.log(details));

// Show filtered employees by city
console.log('\nEmployees in Pune:');
myCompany.filterByCity('Pune').forEach(details => console.log(details));
