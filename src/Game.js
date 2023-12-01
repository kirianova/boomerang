// Импортируем всё необходимое.
// Или можно не импортировать,
// а передавать все нужные объекты прямо из run.js при инициализации new Game().

const Hero = require('./game-models/Hero');
const Enemy = require('./game-models/Enemy');
const { runInteractiveConsole } = require('./keyboard');

const View = require('./View');
const Boomerang = require('./game-models/Boomerang');

// Основной класс игры.
// Тут будут все настройки, проверки, запуск.

class Game {
  constructor({ trackLength }) {
    this.trackLength = trackLength;
    this.hero = new Hero({ position: 4 }); // Герою можно аргументом передать бумеранг.
    this.enemy = new Enemy({ position: 28 });

    this.view = new View();
    this.track = [];
    this.regenerateTrack();
  }

  regenerateTrack() {
    // Сборка всего необходимого (герой, враг(и), оружие)
    // в единую структуру данных

    this.track = new Array(this.trackLength).fill(' ');
    this.track[this.hero.position] = this.hero.skin;
    this.track[this.enemy.position] = this.enemy.skin;
    this.track[this.hero.position + 1] = this.hero.boomerang.skin;
    return this.track.join('');
  }

  check() {
    if (this.hero.position !== this.hero.boomerang.position) {
      this.hero.boomerang.fly();
    }
    if (this.hero.position === this.enemy.position) {
      this.hero.die();
    }
  }

  play() {
    runInteractiveConsole(this.hero);
    setInterval(() => {
      // Let's play!
      this.enemy.moveLeft();
      this.check();
      this.regenerateTrack();
      // console.log(this.regenerateTrack());
      this.view.render(this);
    }, 500);
  }
}

module.exports = Game;
