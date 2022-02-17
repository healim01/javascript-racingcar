import { validateCarNames, validateRacingCount } from '../validation/validators.js';
import ValidationError from '../validation/validation-error.js';
import CarModel from './car.model.js';
import { ERROR_MESSAGES } from '../constants.js';

class RacingCarGameModel {
  constructor() {
    this.cars = [];
    this.racingCount = 0;
  }

  getCars() {
    return this.cars;
  }

  getCarNames() {
    return this.cars.map((car) => car.name).join(',');
  }

  getRacingCount() {
    return this.racingCount;
  }

  updateCars(carNames) {
    const { hasError, errorMessage } = validateCarNames(carNames);
    if (hasError) {
      throw new ValidationError(errorMessage);
    }
    this.cars = carNames.split(',').map((carName) => new CarModel(carName.trim()));
  }

  updateRacingCount(racingCount) {
    if (this.cars.length === 0) {
      throw new Error(ERROR_MESSAGES.EMPTY_CAR_NAME);
    }
    const { hasError, errorMessage } = validateRacingCount(racingCount);
    if (hasError) {
      throw new ValidationError(errorMessage);
    }
    this.racingCount = parseInt(racingCount, 10);
  }

  tryMoveCars() {
    this.cars.map((car) => car.tryMove());
  }
}

export default RacingCarGameModel;