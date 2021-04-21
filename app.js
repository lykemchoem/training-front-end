// // constructor function
// function Person1(first, last, age, eye) {
//     this.firstName = first;
//     this.lastName  = last;
//     this.age       = age;
//     this.eyeColor  = eye;
//     this.name = () => {
//         return this.firstName + " " + this.lastName
//     };
// }

// Person1.prototype.run = function() {
//     console.log(`${this.age} barks: Go Go Go`);
// }

// class Person {
//     constructor(first, last, age, eye) {
//         this.firstName = first;
//         this.lastName  = last;
//         this.age       = age;
//         this.eyeColor  = eye;
//         this.name = () => {
//             return this.firstName + " " + this.lastName
//         };
//     }

//     get model() {
//         return  this.age;
//     }

//     set model(age) {
//         return this.age = age;
//     }

//     quux (x, y) {
//         return x + y;
//     }
// }

//   var myMother = new Person("Sally", "Rallyxxx", 48, "green");
//   myMother.model = 40;

// console.log(myMother.name());
// console.log(myMother.age);
// console.log(myMother.model);
// console.log()
// console.log(myMother.model());

// addButton = (a = "default parameter") => {
//     let number = 0;
//     let text = document.createElement('button');
//     text.innerHTML = `Text ${--number}`;
//     document.body.appendChild(text);
//     console.log(a);
//     document.getElementById('change-color').style.border = '1px solid red';
// }


class Something {

    static #privateStaticMethod() {
      return "fsdfsdf";
    }

    static callMethod() {
      return Something.#privateStaticMethod()
    }
  }

  const instance = new Something();
  instance.property = 3;
  console.log(Something.callMethod());


// class ClassWithPrivateStaticMethod {

//   static #privateStaticMethod() {
//     return 42
//   }

//   static publicStaticMethod1() {
//     return ClassWithPrivateStaticMethod.#privateStaticMethod();
//   }

//   static publicStaticMethod2() {
//     return this.#privateStaticMethod();
//   }
// }

// console.log(ClassWithPrivateStaticMethod.publicStaticMethod1() === 42);
// console.log(ClassWithPrivateStaticMethod.publicStaticMethod2() === 42);
