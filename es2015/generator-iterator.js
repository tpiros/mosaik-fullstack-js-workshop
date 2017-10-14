/* Example taken from MDN */

function* idMaker() { //generator
  let index = 0;
  while (index <= 3) { // or while(true)
    yield index++;
  }
}

// const generator = idMaker();
// const generator2 = idMaker();

// console.log(generator.next());
// console.log(generator2.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());

// for (let value of generator) {
//   console.log(value)
// }

// function* generator() {
//   yield 0; //pause
//   console.log('zero');
//   yield 1; //pause
//   console.log('one');
//   yield 2;
//   console.log('two');
// }

// const gen = generator();
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// for (value of gen) {
//   console.log(value);
// }
// const a = [...gen];
// console.log(a);
