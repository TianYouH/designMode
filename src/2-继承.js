class People {
  constructor (name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    console.log(`${this.name} 吃 饭饭 `);
  }
  speak() {
    console.log(`我叫 ${this.name}，今年 ${this.age} 岁`);
  }
}

class Student extends People {
  weight(weight) {
    throw new Error("Method not implemented.");
  }
  getWeight() {
    throw new Error("Method not implemented.");
  }
  constructor(name, age, number) {
    super(name, age);
    this.number = number;
    this.girlfriend = undefined;
  }
  study() {
    alert(`${this.name} 学习`)
  }
}

const s1 = new Student("黄大仙", 66, '00252054')
s1.eat()
s1.speak()
s1.study()
