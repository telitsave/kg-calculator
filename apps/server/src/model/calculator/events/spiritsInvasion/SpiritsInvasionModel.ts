import data from './data.json'
import type { GetSpiritsInvasionResponse } from 'kg-calculator-typings'

export default class SpiritsInvasionModel {
  private readonly _level: number
  private readonly _membersCount: number

  constructor(level: number, membersCount: number) {
    this._level = level < 0 ? 1 : level > 300 ? 300 : level
    this._membersCount = membersCount < 0 ? 0 : membersCount > 130 ? 130 : membersCount
  }

  calculateData(): GetSpiritsInvasionResponse {
    const data = this._getData()

    return {
      shortData: {
        level: this._level,
        wave1Power: data[0].wavePower,
        wave7Power: data[6].wavePower,
        wave10Power: data[9].wavePower,
        wave14Power: data[13].wavePower,
        wave17Power: data[16].wavePower,
        wave20Power: data[19].wavePower,
        wave19Power: data[18].wavePower,
        scoreByOneCommon: data
          .filter((it) => ![7, 10, 14, 17, 20].includes(it.wave))
          .reduce((total, it) => total + it.score, 0),
        scoreByOneElite: data.filter((it) => [7, 14, 17].includes(it.wave)).reduce((total, it) => total + it.score, 0),
        totalScore: data.reduce((total, it) => total + it.scoreTotal, 0),
        scoreByCommonWaves: data
          .filter((it) => ![7, 10, 14, 17, 20].includes(it.wave))
          .reduce((total, it) => total + it.scoreTotal, 0),
        scoreByEliteWaves: data
          .filter((it) => [7, 14, 17].includes(it.wave))
          .reduce((total, it) => total + it.scoreTotal, 0),
        scoreByBossWaves: data
          .filter((it) => [10, 20].includes(it.wave))
          .reduce((total, it) => total + it.scoreTotal, 0),
      },
      tableData: data.map((it) => ({
        wave: it.wave,
        scoreByOne: it.score,
        power: it.wavePower,
        scoreTotal: it.scoreTotal,
      })),
    }
  }

  private _getData() {
    const wavesData: { wave: number; wavePower: number; score: number; scoreTotal: number }[] = []

    for (let i = 0; i < 20; i++) {
      const levelData = data[this._level - 1]
      wavesData.push({
        wave: i + 1,
        wavePower: this._getWavePower(levelData, i + 1),
        score: this._getWaveScore(i + 1),
        scoreTotal: this._getWaveScoreTotal(i + 1),
      })
    }

    return wavesData
  }

  private _getWavePower(wave1Power: number, wave: number) {
    if (wave === 7 || wave === 14 || wave === 17) {
      return wave1Power * wave * 5
    }

    if (wave === 10 || wave === 20) {
      return wave1Power * wave * 10
    }

    return wave1Power * wave
  }

  private _getWaveScore(wave: number) {
    const wave1Score = this._level * 100 + 900
    if (wave === 1) {
      return wave1Score
    }

    if (wave === 7 || wave === 14 || wave === 17) {
      return wave1Score * wave * 5
    }

    if (wave === 10 || wave === 20) {
      return wave1Score * wave * 10
    }

    return wave1Score * wave
  }

  private _getWaveScoreTotal(wave: number) {
    const waveScore = this._getWaveScore(wave)

    if (wave === 7 || wave === 14 || wave === 17) {
      return waveScore * Math.min(10, this._membersCount)
    }
    if (wave === 10 || wave === 20) {
      return waveScore
    }

    return waveScore * this._membersCount
  }
}
