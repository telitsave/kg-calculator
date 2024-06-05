import CalculationResults from './CalculationResults'
import Resources from '../../../resources/Resources'
import type { CalculateExtremePowerResponse } from 'kg-calculator-typings'

export default class ExtremePowerEventCalculator {
  static calculate(resources: Resources): CalculateExtremePowerResponse {
    return new CalculationResults(resources).getData()
  }
}
