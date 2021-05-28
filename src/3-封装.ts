/**
 * ts 测试地址
 * https://www.typescriptlang.org/zh/play
 */

 class People {
  name: String
  age: Number
  protected weight: Number //受保护的属性，只有自己或者子类可以访问
  constructor(name: String, age: Number) {
    this.name = name
    this.age = age
    this.weight = 120
  }
  eat() {
    alert(`${this.name} eat something`)
  }
  speak() {
    alert(`My name is ${this.name}, age ${this.age}`)
  }
}

//子类继承父类
class Student extends People {
  number: String
  private girlfriend
  constructor(name: String, age: Number, number: String) {
    super(name, age)
    this.number = number
    this.girlfriend = 'xiaoli'
  }
  study() {
    alert(`${this.name} study`)
  }
  getWeight() {
    alert(`weight ${this.weight}`)
  }
}

let xiaoming = new Student( 'xiaoming', 10,'A1')
xiaoming.getWeight()
alert(xiaoming.girlfriend)
alert(xiaoming.weight)


