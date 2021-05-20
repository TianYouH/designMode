
alert(123)
class Person {
  constructor (name) {
    this.name = name;
  }
  say() {
    console.log(this.name);
  }
}

const p1 = new Person("黄金胡");

p1.say();
