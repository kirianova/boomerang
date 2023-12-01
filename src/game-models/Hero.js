// Наш герой.
const Boomerang = require('./Boomerang');

class Hero {
  constructor({ position }) {
    this.generatedSkin(); // можете использовать любые emoji '💃'
    this.position = position;
    this.boomerang = new Boomerang();
  }

  generatedSkin() {
    const skins = [
      '🐡',
      '⛄',
      '🐼',
      '🎃',
      '🐸',
      '🐝',
      '🌼',
      '🫡',
      '🤺',
      '🧛',
      '😎',
      '👽',
    ];
    this.skin = skins[Math.floor(Math.random() * skins.length)];
  }

  moveLeft() {
    // Идём влево.
    this.position -= 1;
  }

  moveRight() {
    // Идём вправо.
    this.position += 1;
  }

  attack() {
    // Атакуем.
    this.boomerang.fly();
  }

  die() {
    this.skin = '💀';
    console.log('YOU ARE DEAD!💀');
    process.exit();
  }
}

module.exports = Hero;
