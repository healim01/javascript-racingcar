import { MESSAGE } from '../constants/System.js';

const OutputView = {
  print(message) {
    console.log(message);
  },

  printErrorMessage(error) {
    this.print(error);
  },

  printCurrentResultTitle() {
    this.print(MESSAGE.RESULT);
  },

  printCurrentLocation(carInfos) {
    carInfos.forEach(({ name, location }) => {
      this.print(`${name} : ${'-'.repeat(location)}`);
    });
    this.print('');
  },

  printWinners(winners) {
    const result = winners.join(', ');
    this.print(`${MESSAGE.WINNER} ${result}`);
  },
};

export default OutputView;
