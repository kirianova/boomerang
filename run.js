const readlineSync = require("readline-sync");
// Запускает игру.
const Game = require("./src/Game");
//test
// Инициализация игры с настройками.
const game = new Game({
  trackLength: 30,
});
let userName = readlineSync.question("Как тебя зовут?");
console.log("Привет " + userName + "!" + "Добро пожаловать в игру!");
// Запуск игры.
game.play();
