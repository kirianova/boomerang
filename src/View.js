// Сделаем отдельный класс для отображения игры в консоли.
const chalk = require('chalk');

class View {
  render(game) {
    const yourTeamName = 'Двое из ларца';

    // Тут всё рисуем.
    console.clear();
    console.log(game.track.join(''));
    console.log('\n\n');
    console.log(chalk.bgBlue(`Created by "${yourTeamName}" with love`));
  }
}

module.exports = View;
