// company.js
const Employee = require('./employee');

class Company {
  constructor(name) {
    this.name = name;
    this.employees = [];
  }

  addEmployee(employee) {
    this.employees.push(employee);
  }

  listEmployees() {
    return this.employees.map(emp => emp.getDetails());
  }

  filterByCity(city) {
    return this.employees
      .filter(emp => emp.city.toLowerCase() === city.toLowerCase())
      .map(emp => emp.getDetails());
  }
}

module.exports = Company;
