import CalculationResults from './CalculationResults'
import Resources from '../../../resources/Resources'

export default class MightiestKingdomEventCalculator {
  static calculate(resources: Resources) {
    return new CalculationResults(resources)
  }
}
