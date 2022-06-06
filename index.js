"use sctrict";

// Создайте класс Student (Студент), который будет наследоваться от класса User.
// Класс Student  должен иметь следующие свойства: name (имя, наследуется от User), surname (фамилия, наследуется от User), year (год поступления в вуз). Класс должен иметь метод (наследуется от User), с помощью которого можно ввести/вывести одновременно имя и фамилию студента. Также класс  Student должен иметь метод getCourse(), который будет выводить текущий курс студента (от 1 до 5). Курс вычисляется так: нужно от текущего года отнять год поступления в вуз. Текущий год получите самостоятельно (Date).
// Создайте класс Group, который будет иметь следующие свойства: name (название группы) и students (массив студентов). Класс должен иметь метод showStudents(), который выводит фамилию и имя каждого студента в виде Иванов И.

// Обязательно добавить сеттер для year (год поступления в вуз) - должен быть не более текущего и так чтобы студент учился не более 5 лет.

class User {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  get fullName() {}
}

class Student extends User {
  constructor(name, surname, year) {
    super(name, surname);
    this.year = year;
  }
  get year() {
    return this.year;
  }
  set year(year) {}
  getCourse() {}
}

class Group {
  constructor(name, students = []) {
    this.name = name;
    this.students = students;
  }
  showStudents() {}
}