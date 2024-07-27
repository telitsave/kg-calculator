import type ServerSettings from '../../../ServerSettings'
import Resources from '../../../resources/Resources'
import CalculationResults from './CalculationResults'
import type { CalculateMightiestKingdomResponse } from 'kg-calculator-typings'


export default class MightiestKingdomEventCalculator {
  static calculate(resources: Resources, serverSettings: ServerSettings): CalculateMightiestKingdomResponse {
    return new CalculationResults(resources, serverSettings).getData()
  }
}
