function Animal(name) {
  this.name = name;
}

Animal.prototype.say = function () {
  console.log(`${this.name} издает звук`);
};

function Cat(name) {
  Animal.call(this, name);
}

Cat.prototype.say = function () {
  console.log(`${this.name} мяукает`);
};

function Dog(name) {
  Animal.call(this, name);
}

Dog.prototype.say = function () {
  console.log(`${this.name} лает`);
};

Object.setPrototypeOf(Cat.prototype, Animal.prototype);
Object.setPrototypeOf(Dog.prototype, Animal.prototype);

let animal1 = new Animal("Корова");
animal1.say();

let cat1 = new Cat("Муся");
cat1.say();

let dog1 = new Dog("Бобик");
dog1.say();