// Наш герой.

class Hero {
  constructor({ position }) {
    this.generatedSkin(); // можете использовать любые emoji '💃'
    this.position = position;
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
const me = new Hero({ position: 4 });
console.log(me.generatedSkin());
console.log(me.skin);
module.exports = Hero;
