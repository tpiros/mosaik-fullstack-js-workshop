function greet(name: string): string {
  return `Hello ${name}` //template literal
}

console.log(
  greet('Tamas')
  // greet(12)
);

// interface Warrior {
//   name: string;
//   weapon: string;
//   // height: number
//   height?: number;
// };

// const warrior: Warrior = { name: 12, weapon: 'big sword' };

// // function introduce(warrior: Warrior) {
// //   return `I am ${warrior.name} fighthing with ${warrior.weapon}.`;
// // }


// // console.log(
// //   introduce(warrior)
// // );

// // interface IWarrior {
// //   name: string;
// //   weapon: string;
// // };

// // class Warrior implements IWarrior {
// //   clan: string;
// //   name: string;
// //   weapon: string;
// //   constructor(clanName, name, weapon) {
// //     this.name = name;
// //     this.weapon = weapon;
// //     this.clan = `Fights for ${clanName}`;
// //   }

// //   introduce(warrior: Warrior) {
// //     return `I am ${warrior.name} fighthing with ${warrior.weapon}.`; 
// //   }
// // }

// // let tamas = new Warrior('Zombie Hordes', 'Tamas', 'Sword');
// // console.log(tamas.clan);
// // console.log(tamas.introduce(tamas));

// // // function add(x: number, y: number): number {
// // // function add(x: number = 0, y: number = 0): void {
// // //   return console.log(x + y);
// // // }
// // // add(1,2);
// // // add();