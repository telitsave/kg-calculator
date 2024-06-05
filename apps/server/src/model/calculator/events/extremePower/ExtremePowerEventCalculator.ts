import CalculationResults from './CalculationResults'
import Resources from '../../../resources/Resources'

export default class ExtremePowerEventCalculator {
  static calculate(resources: Resources) {
    return new CalculationResults(resources)
  }
}
