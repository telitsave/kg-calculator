import Resources from '../../resources/Resources'
import Parameters from '../../parameters/Parameters'
import Settings from '../../settings/Settings'
import barracksInfo from './barracks.json'
import talentsInfo from './talents.json'
import BarracksBooksResources from '../../resources/BarracksBooksResources'
import serverSettings from '../../ServerSettings'
import type { BarracksBooksByElement, CalculateBarracksResponse, ElementsType } from 'kg-calculator-typings'

export default class BarracksCalculatorModel {
  private _sourceParameters: Parameters
  private _parameters: Parameters
  private _sourceResources: Resources
  private _leftResources: Resources
  private _spentResources: Resources = new Resources()
  private _randomBooksUsed: BarracksBooksResources = new BarracksBooksResources()
  private _convertBooksForBarracks: BarracksBooksResources = new BarracksBooksResources()
  private _convertTalentBooks: BarracksBooksResources = new BarracksBooksResources()
  private _spentTalentBooks: BarracksBooksResources = new BarracksBooksResources()
  private _settings: Settings

  constructor(resources: Resources, parameters: Parameters, settings: Settings) {
    this._sourceParameters = parameters
    this._sourceResources = resources
    this._parameters = parameters.clone()
    this._leftResources = resources.clone()
    this._settings = settings
  }

  calculateBarracks() {
    while (this.tryCalculateBarracksBooks()) {
    }
    while (this.tryCalculateTalents()) {
    }
  }

  getData(): CalculateBarracksResponse {
    return {
      oldParameters: this._sourceParameters.getData(),
      parameters: this._parameters.getData(),
      sourceResources: this._sourceResources.getData(),
      spentResources: this._spentResources.getData(),
      leftResources: this._leftResources.getData(),
      randomBooksUsed: this._randomBooksUsed,
      convertBooksForBarracks: this._convertBooksForBarracks,
      convertTalentBooks: this._convertTalentBooks,
      spentTalentBooks: this._spentTalentBooks,
    }
  }

  private tryCalculateBarracksBooks(): boolean {
    const bowResult = this.tryUpLevelByElement('bow')
    const fireResult = this.tryUpLevelByElement('fire')
    const iceResult = this.tryUpLevelByElement('ice')
    const poisonResult = this.tryUpLevelByElement('poison')
    return bowResult || fireResult || iceResult || poisonResult
  }

  private tryUpLevelByElement(element: ElementsType): boolean {
    const elementParams = this._parameters.barracks[element]
    let rank = elementParams.rank
    let level = elementParams.level
    let maxLevel = rank % 2 === 0 ? 200 : 100

    // Если ранг максимальный, то ничего не делаем
    if (rank === 9) return false

    // Если уровень максимальный, прокачиваем ранг
    if (level === maxLevel) {
      return this.tryUpRankByElement(element, rank + 1)
    }

    const rankInfoIndex = barracksInfo.findIndex((it) => it.rank === rank && it.level === level) + 1
    const rankInfo = barracksInfo[rankInfoIndex]
    // Если нехватает золота на прокачку, то ничего не делаем
    if (this._leftResources.gold < rankInfo.gold) return false

    const rankBooks = Math.ceil(rank / 2)
    const rankKey = `rank${rankBooks}` as keyof BarracksBooksByElement
    const booksByElement = this._leftResources.barracksBooks[element][rankKey]

    if (booksByElement === 0) {
      if (rankBooks > 1) {
        this._convertBooksToRank(element, rankBooks - 1)
      }

      if (this._leftResources.barracksBooks[element][rankKey] === 0) {
        if (this._settings.canUseRandomBarracksBooks && this._settings.priorityElement === element) {
          const neededRandomBooks = Math.pow(5, rankBooks - 1)
          const result = this._useRandomBooks(element, neededRandomBooks)

          if (!result) return false

          if (rankBooks > 1) {
            this._convertBooksToRank(element, rankBooks - 1)
          }
        }
      }
    }

    return this._spentBookToBarracks(element, rankBooks, rankInfo.gold)
  }

  private tryUpRankByElement(element: ElementsType, newRank: number) {
    const rankInfo = barracksInfo.find((it) => it.rank === newRank && it.level === 0)

    if (this._leftResources.gold < rankInfo.gold) return false

    this._parameters.barracks[element].rank += 1
    this._parameters.barracks[element].level = 0

    this._leftResources.gold -= rankInfo.gold
    this._spentResources.gold += rankInfo.gold

    return true
  }

  private tryCalculateTalents(): boolean {
    const elementsOrder: ElementsType[] = [this._settings.priorityElement]
    if (this._settings.canUseTalentsToNonPriorityElements) {
      ;(
        ['bow', 'fire', 'ice', 'poison'] as ElementsType[]
      ).forEach((element) => {
        if (element === this._settings.priorityElement) return
        elementsOrder.push(element)
      })
    }

    return elementsOrder.some((element) => this.tryCalculateTalentsByElement(element))
  }

  private tryCalculateTalentsByElement(element: ElementsType): boolean {
    const rankForBooksCells = this._parameters.talents.getFirstNotMaxRankBooks(element)
    const rankForBooksCrowns = this._parameters.talents.getFirstNotMaxRankCrowns(element)
    let firstRank = Math.min(rankForBooksCells, rankForBooksCrowns)
    let lastRank = Math.max(rankForBooksCells, rankForBooksCrowns)
    if (firstRank > serverSettings.talentsMaxRank) {
      firstRank = serverSettings.talentsMaxRank
    }
    if (lastRank > serverSettings.talentsMaxRank) {
      lastRank = serverSettings.talentsMaxRank
    }

    return [firstRank, lastRank].some((rank) => this.tryCalculateTalentsByElementRank(element, rank))
  }

  private tryCalculateTalentsByElementRank(element: ElementsType, rank: number): boolean {
    // Сначала пробуем прокачать малый атрибут (только книги талантов)
    if (this.tryLevelUpBookTalentByElementRank(element, rank)) {
      return true
    }
    // Если по каким-то причинам прокачать малый атрибут не удалось (например все прокачаны, или нехватило ресурсов)
    // Пробуем уже прокачать большой атрибут
    return this.tryLevelUpCrownTalentByElementRank(element, rank)
  }

  private tryLevelUpBookTalentByElementRank(element: ElementsType, rank: number): boolean {
    if (this._parameters.talents[element].rank[rank].booksCells === 48) return false

    const { booksCost } = talentsInfo[rank - 1]

    const isEnoughtBooks = this._leftResources.talents.books >= booksCost
    // Если нехватает книг талантов
    if (!isEnoughtBooks) {
      // Определяем, сколько нехватает
      const targetCount = booksCost - this._leftResources.talents.books

      // Проверяем, хватит ли книг при использовании конвертаций и книг самовыбора (при включенных настройках)
      if (!this.isEnoughBooksForTalents(targetCount)) return false

      // Книг достаточно, начинаем конвертации
      // Сначала конвертируем имеющиеся книги
      this.convertBooksToTalentsBooks(booksCost)

      // Если книг талантов все еще не хватает
      if (this._leftResources.talents.books < booksCost) {
        // Используем книги самовыбора и конвертируем их
        this.useRandomBooksAndConvert(targetCount)
      }
    }

    // Если мы здесь, значит книг талантов хватает, чтобы сделать прокачку
    this._useTalentBooks(element, rank, booksCost)

    return true
  }

  private tryLevelUpCrownTalentByElementRank(element: ElementsType, rank: number): boolean {
    if (this._parameters.talents[element].rank[rank].crownsCells === 6) return false

    const { crownsBooksCost, crownsCost } = talentsInfo[rank - 1]

    const isEnoughtCrowns = this._leftResources.talents.oraclesCrowns >= crownsCost
    if (!isEnoughtCrowns) return false

    const isEnoughtBooks = this._leftResources.talents.books >= crownsBooksCost
    // Если нехватает книг талантов
    if (!isEnoughtBooks) {
      // Определяем, сколько нехватает
      const targetCount = crownsBooksCost - this._leftResources.talents.books

      // Проверяем, хватит ли книг при использовании конвертаций и книг самовыбора (при включенных настройках)
      if (!this.isEnoughBooksForTalents(targetCount)) return false

      // Книг достаточно, начинаем конвертации
      // Сначала конвертируем имеющиеся книги
      this.convertBooksToTalentsBooks(crownsBooksCost)

      // Если книг талантов все еще не хватает
      if (this._leftResources.talents.books < crownsBooksCost) {
        // Используем книги самовыбора и конвертируем их
        this.useRandomBooksAndConvert(targetCount)
      }
    }
    // Если мы здесь, значит книг талантов хватает, чтобы сделать прокачку
    this._useTalentCrowns(element, rank, crownsBooksCost, crownsCost)

    return true
  }

  private isEnoughBooksForTalents(targetCount: number) {
    if (!this._settings.canConvertBarracksBooksToTalents) return false
    const elements = this._parameters.barracks.getElementsWithMaxRank()

    if (elements.length === 0) return false

    let possibleTalentBooks = elements.reduce((total, element) => {
      const { rank1, rank2, rank3, rank4 } = this._leftResources.barracksBooks[element]
      return (
        total +
        rank4 * serverSettings.talentBooksConversionRate.rank4 +
        rank3 * serverSettings.talentBooksConversionRate.rank3 +
        rank2 * serverSettings.talentBooksConversionRate.rank2 +
        rank1 * serverSettings.talentBooksConversionRate.rank1
      )
    }, 0)

    if (possibleTalentBooks >= targetCount) return true

    if (!this._settings.canUseRandomBarracksBooks) return false

    possibleTalentBooks += this._leftResources.barracksBooks.random * serverSettings.talentBooksConversionRate.rank1

    return possibleTalentBooks >= targetCount
  }

  private convertBooksToTalentsBooks(targetCount: number) {
    if (!this._settings.canConvertBarracksBooksToTalents) return

    // Определяем стихии, которые можно использовать для конвертаций
    const elements = this._parameters.barracks.getElementsWithMaxRank()

    // Начинаем конвертировать книги из каждой стихии в таланты, пока не хватит
    elements.forEach((element) => {
      if (this._leftResources.talents.books < targetCount) {
        this.convertBooksToTalentsBooksByElement(element, targetCount)
      }
    })
  }

  private convertBooksToTalentsBooksByElement(element: ElementsType, targetCount: number) {
    if (!this._settings.canConvertBarracksBooksToTalents) return

    while (this._leftResources.talents.books < targetCount && this._convertBookToTalentBook(element, 4)) {
    }
    while (this._leftResources.talents.books < targetCount && this._convertBookToTalentBook(element, 3)) {
    }
    while (this._leftResources.talents.books < targetCount && this._convertBookToTalentBook(element, 2)) {
    }
    while (this._leftResources.talents.books < targetCount && this._convertBookToTalentBook(element, 1)) {
    }
  }

  private useRandomBooksAndConvert(targetCount: number) {
    if (!this._settings.canConvertBarracksBooksToTalents) return
    if (!this._settings.canUseRandomBarracksBooks) return

    const elements = this._parameters.barracks.getElementsWithMaxRank()
    const possibleTalentBooks =
            this._leftResources.barracksBooks.random * serverSettings.talentBooksConversionRate.rank1

    if (possibleTalentBooks > targetCount) {
      const needRandomBooks = Math.ceil(targetCount / serverSettings.talentBooksConversionRate.rank1)
      this._useRandomBooks(elements[0], needRandomBooks)
      this._convertBookToTalentBook(elements[0], 1, needRandomBooks)
    }
  }

  private _spentBookToBarracks(element: ElementsType, rankBook: number, gold: number) {
    if (this._leftResources.gold < gold) return false
    if (this._leftResources.barracksBooks[element][`rank${rankBook}`] === 0) return false

    this._leftResources.gold -= gold
    this._leftResources.barracksBooks[element][`rank${rankBook}`] -= 1
    this._spentResources.gold += gold
    this._spentResources.barracksBooks[element][`rank${rankBook}`] += 1
    this._parameters.barracks[element].level += 1

    return true
  }

  private _convertBookToNewRank(element: ElementsType, sourceRankBook: number) {
    const rankKey = `rank${sourceRankBook}`
    const nextRankKey = `rank${sourceRankBook + 1}`
    if (sourceRankBook === 4) return false
    if (this._leftResources.barracksBooks[element][rankKey] < 5) return false

    this._leftResources.barracksBooks[element][rankKey] -= 5
    this._leftResources.barracksBooks[element][nextRankKey] += 1
    this._convertBooksForBarracks[element][rankKey] += 5

    return true
  }

  private _convertBooksToRank(element: ElementsType, targetRank: number, countConverts: number = 1) {
    const targetRankKey = `rank${targetRank}`
    if (this._leftResources.barracksBooks[element][targetRankKey] < countConverts * 5) {
      if (targetRank === 1) return
      const neededBooks = countConverts * 5 - this._leftResources.barracksBooks[element][targetRankKey]
      this._convertBooksToRank(element, targetRank - 1, neededBooks)
    }

    for (let i = 0; i < countConverts; i++) {
      this._convertBookToNewRank(element, targetRank)
    }
  }

  private _useRandomBooks(element: ElementsType, count: number) {
    if (this._leftResources.barracksBooks.random < count) return false

    this._leftResources.barracksBooks.random -= count
    this._leftResources.barracksBooks[element].rank1 += count
    this._spentResources.barracksBooks.random += count
    this._randomBooksUsed[element].rank1 += count

    return true
  }

  private _useTalentBooks(element: ElementsType, rank: number, count: number) {
    if (this._leftResources.talents.books < count) return false
    if (this._parameters.talents[element].rank[rank].booksCells >= 48) return false

    this._leftResources.talents.books -= count
    this._spentResources.talents.books += count
    this._parameters.talents[element].rank[rank].booksCells += 1
    this._spentTalentBooks[element].rank1 += count

    return true
  }

  private _useTalentCrowns(element: ElementsType, rank: number, countBooks: number, countCrowns) {
    if (this._leftResources.talents.books < countBooks) return false
    if (this._leftResources.talents.oraclesCrowns < countCrowns) return false
    if (this._parameters.talents[element].rank[rank].crownsCells >= 6) return false

    this._leftResources.talents.books -= countBooks
    this._leftResources.talents.oraclesCrowns -= countCrowns
    this._spentResources.talents.books += countBooks
    this._spentResources.talents.oraclesCrowns += countCrowns
    this._parameters.talents[element].rank[rank].crownsCells += 1
    this._spentTalentBooks[element].rank1 += countBooks
    this._spentTalentBooks[element].rank2 += countCrowns

    return true
  }

  private _convertBookToTalentBook(element: ElementsType, rank: number, count: number = 1) {
    const rankKey = `rank${rank}`
    if (this._leftResources.barracksBooks[element][rankKey] < count) return false

    this._leftResources.barracksBooks[element][rankKey] -= count
    this._leftResources.talents.books += count * serverSettings.talentBooksConversionRate[rankKey]
    this._convertTalentBooks[element][rankKey] += count
  }
}
