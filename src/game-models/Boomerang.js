// Бумеранг является оружием.
// В дальнейшем можно добавить другое оружие.
// Тогда можно будет создать класс Weapon и воспользоваться наследованием!
const Hero = require('./Hero');

class Boomerang {
  constructor() {
    this.skin = '🌀';
    this.position = 2;
  }

  moveLeft() {
    // Идём влево.
    this.position = 2;
  }

  moveRight() {
    // Идём вправо.
    this.position += 3;
  }

  fly() {
    this.moveRight();
    setTimeout(() => {
      this.moveLeft();
    }, 1000);
  }
}

module.exports = Boomerang;
