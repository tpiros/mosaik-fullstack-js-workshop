;
var Warrior = (function () {
    function Warrior(clanName, name, weapon) {
        this.name = name;
        this.weapon = weapon;
        this.clan = "Fights for " + clanName;
    }
    Warrior.prototype.introduce = function (warrior) {
        return "I am " + warrior.name + " fighthing with " + warrior.weapon + ".";
    };
    return Warrior;
})();
var tamas = new Warrior('Zombie Hordes', 'Tamas', 'Sword');
console.log(tamas.clan);
console.log(tamas.introduce(tamas));
