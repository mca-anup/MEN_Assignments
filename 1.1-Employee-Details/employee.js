// employee.js
class Employee {
  constructor(id, name, city) {
    this.id = id;
    this.name = name;
    this.city = city;
  }

  getDetails() {
    return `ID: ${this.id}, Name: ${this.name}, City: ${this.city}`;
  }
}

module.exports = Employee;
