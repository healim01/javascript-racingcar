import Car from './Car.js';

class CarGame {
  #carList = [];

  setCars(carNames) {
    this.#validateCarNamesMulti(carNames);

    carNames.reduce((carList, name) => {
      this.#validateCarNamesLength(name);
      carList.push(new Car(name));
      return carList;
    }, this.#carList);
  }

  #validateCarNamesLength(carName) {
    if (carName.length > 5) {
      throw new Error('[ERROR] 자동차 이름은 5글자 이하만 가능합니다.');
    }
  }

  #validateCarNamesMulti(carNames) {
    this.validMulti = new Set(new Set(carNames)).size === carNames.length;

    if (!this.validMulti) {
      throw new Error('[ERROR] 자동차 이름은 중복될 수 없습니다.');
    }
  }
}

export default CarGame;