// Наш герой.
const Boomerang = require('./Boomerang');

class Hero {
  constructor(boomerang) {
    this.generatedSkin(); // можете использовать любые emoji '💃'
    this.position = 1;
    this.boomerang = boomerang;
    this.moveRight();
    this.moveLeft();
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

// console.log(Hero.moveRight());
// this.moveLeft();

module.exports = Hero;
