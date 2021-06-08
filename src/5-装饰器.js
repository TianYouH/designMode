// 装饰类
@testDec
class Demo {
}

function testDec(target) {
  target.isDec = true;
}

console.log(Demo.isDec);

// 装饰方法

function readonly(target, name, descriptor) {
  descriptor.writable = false
  return descriptor
}
class Person {
  constructor() {
    this.first = 'A'
    this.last = 'B'
  }
  @readonly
  name(){
    return`${this. first} ${this.last} `
  }
}
let p = new Person()
console.log(p.name())
// p.name = "" // 会报错