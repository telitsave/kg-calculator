import CalculationResults from './CalculationResults'
import Resources from '../../../resources/Resources'
import type { CalculateMightiestKingdomResponse } from 'kg-calculator-typings'

export default class MightiestKingdomEventCalculator {
  static calculate(resources: Resources): CalculateMightiestKingdomResponse {
    return new CalculationResults(resources).getData()
  }
}
