class Employee {
  constructor(id, firstName, lastName, position, salary, workingHours) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.position = position;
    this.salary = salary;
    this.workingHours = workingHours;
  }

  get _id() {
    return this.id;
  }
  set _id(newID) {
    this.id = newID;
  }

  get _firstName() {
    return this.firstName;
  }
  set _firstName(newFN) {
    this.firstName = newFN;
  }
  get _lastName() {
    return this.lastName;
  }
  set _lastName(newLN) {
    this.lastName = newLN;
  }
  get _position() {
    return this.position;
  }
  set _position(newPs) {
    this.position = newPs;
  }
  get _salary() {
    return this.salary;
  }
  set _salary(newSl) {
    this.salary = newSl;
  }
  get _workingHours() {
    return this.workingHours;
  }
  set _workingHours(newWh) {
    this.workingHours = newWh;
  }

  getFullName() {
    let fullName = this.first;
    return `${this.firstName} ${this.lastName}`;
  }
  getAnnulSalary() {
    return 12 * this.salary;
  }
  raiseSalary(percent) {
    return (this.salary * (100 + percent)) / 100;
  }
}

let employee1 = new Employee(1, "John", "Smith", "CEO", 100, 8);

employee1._salary = 200;

console.log(employee1.getAnnulSalary());