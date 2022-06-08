"use strict";

// Создайте класс Student (Студент), который будет наследоваться от класса User.
// Класс Student  должен иметь следующие свойства: name (имя, наследуется от User), surname (фамилия, наследуется от User), year (год поступления в вуз). Класс должен иметь метод (наследуется от User), с помощью которого можно ввести/вывести одновременно имя и фамилию студента. Также класс  Student должен иметь метод getCourse(), который будет выводить текущий курс студента (от 1 до 5). Курс вычисляется так: нужно от текущего года отнять год поступления в вуз. Текущий год получите самостоятельно (Date).
// Создайте класс Group, который будет иметь следующие свойства: name (название группы) и students (массив студентов). Класс должен иметь метод showStudents(), который выводит фамилию и имя каждого студента в виде Иванов И.

// Обязательно добавить сеттер для year (год поступления в вуз) - должен быть не более текущего и так чтобы студент учился не более 5 лет.

class User {
  constructor(name, surname, year) {
    this.name = name;
    this.surname = surname;
    this.year = year;
  }
  get year() {
    return this._year;
  }
  set year(year) {
    if (year > new Date().getFullYear()) {
      throw new RangeError("Incorrect value");
    }
    if (year < new Date().getFullYear() - 5) {
      throw new RangeError("Incorrect value");
    }
    this._year = year;
  }
  getFullName() {
    return `${this.name} ${this.surname}`;
  }
}
class Student extends User {
  constructor(name, surname, year) {
    super(name, surname, year);
  }
  getCourse() {
    return new Date().getFullYear()-this.year;
  }
  getShortName() {
    return `${this.surname} ${this.surname.charAt(0)}.`;
  }
}

class Group {
  constructor(name, students) {
    this.name = name;
    this.students = students;
  }
  showStudents() {
    if (this.students.length > 0) {
      return this.students
        .map(function (element) {
          return element.getShortName();
        })
        .join(" ");
    }
  }
}

const user = new User("Dwayne", "Johnson", 2022);
const student = new Student("Dwayne", "Johnson", 2017);
const group = new Group("Main group", [
  new Student("Bob", "Bob", 2020),
  new Student("Rob", "Rob", 2022),
  new Student("Tim", "Tim", 2021),
  new Student("Kuk ", "Kuk", 2017),
]);

console.log(user.getFullName());
console.log(student.getCourse(user));
console.log(group.showStudents());
