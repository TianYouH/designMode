// 类-模板
class Person {
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

// 对象-实例
const p1 = new Person("黄金胡", 18);

p1.eat();
p1.speak();


console.log(4545454);