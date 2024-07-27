import type ServerSettings from '../../../ServerSettings'
import Resources from '../../../resources/Resources'
import CalculationResults from './CalculationResults'
import type { CalculateExtremePowerResponse } from 'kg-calculator-typings'


export default class ExtremePowerEventCalculator {
  static calculate(resources: Resources, serverSettings: ServerSettings): CalculateExtremePowerResponse {
    return new CalculationResults(resources, serverSettings).getData()
  }
}
