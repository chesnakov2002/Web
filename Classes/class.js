class Animal {
  constructor(name) {
    this.name = name;
  }

  say() {
    console.log(`${this.name} издает звук.`);
  }
}

class Cat extends Animal {
  constructor(name) { //конструктор можно вообще не писать
    super(name);
  }

  say() {
    console.log(`${this.name} мяукает`);
  }
}

class Dog extends Animal {
  constructor(name) { //конструктор можно вообще не писать
    super(name);
  }

  say() {
    console.log(`${this.name} лает`);
  }
}

let animal1 = new Animal("Корова");
animal1.say();

let cat1 = new Cat("Муся");
cat1.say();

let dog1 = new Dog("Бобик");
dog1.say();