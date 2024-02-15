import CarGame from '../model/CarGame.js';
import Preprocessor from '../utils/Preprocessor.js';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';

class Controller {
  #carGame;

  #carNames;

  #tryCount;

  constructor() {
    this.#carGame = new CarGame();
  }

  // QNA: 멤버변수에 값을 저장하는 방식 vs 값을 반환받아 저장하는 방법
  async inputGameInfo() {
    this.#retryAndErrorLogging(this.#inputCarNames);
    this.#retryAndErrorLogging(this.#inputTryCount);

    this.#carGame.setCars(this.#carNames);
    this.#carGame.setTryCount(this.#tryCount);
  }

  // QNA: private 함수에 'this'를 사용해야하는 이유 (eslint)
  // eslint-disable-next-line class-methods-use-this
  async #retryAndErrorLogging(inputFunction) {
    while (true) {
      try {
        await inputFunction();
        break;
      } catch (error) {
        OutputView.print(error.message);
      }
    }
  }

  async #inputCarNames() {
    this.#carNames = Preprocessor.filterOutEmptyStrings(
      await InputView.readCarNames().split(','),
    );
  }

  async #inputTryCount() {
    this.#tryCount = Number(await InputView.readTryCount());
  }

  playGame() {
    OutputView.printCurrentResultTitle();

    const tryCount = this.#carGame.getTryCount();

    for (let i = 0; i < tryCount; i += 1) {
      this.#carGame.moveCars();
      this.#displayCurrentLocation();
    }
  }

  #displayCurrentLocation() {
    const carInfos = this.#carGame.getCurrentLocation();
    OutputView.printCurrentLocation(carInfos);
  }

  findWinner() {
    const winners = this.#carGame.findWinners();
    OutputView.printWinners(winners);
  }
}

export default Controller;
