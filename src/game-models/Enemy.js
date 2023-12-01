// Враг.
const chalk = require('chalk');

class Enemy {
  constructor({ position }) {
    this.generateSkin();
    this.position = position;
  }

  generateSkin() {
    const skins = [
      '👾',
      '💀',
      '👹',
      '👻',
      '👽',
      '👿',
      '🤡',
      '🤺',
      '🧛',
      '🧟',
      '🎃',
    ];
    this.skin = skins[Math.floor(Math.random() * skins.length)];
  }

  moveLeft() {
    // Идём влево.
    this.position -= 1;
  }

  die() {
    this.position = '?';
    this.skin = '💀';
    console.log(chalk.bgRed('Enemy is dead!'));
  }
}

module.exports = Enemy;
