import { FC, memo } from 'react'
import { Text } from '@mantine/core'
import type { Settings } from 'kg-calculator-typings'
import Flexbox from 'shared/ui/Flexbox'


interface Props {
  settingsType: keyof Settings
}

const HelpNode: FC<Props> = memo(({ settingsType }) => {
  switch (settingsType) {
    case 'canConvertBarracksBooksToTalents':
      return (
        <Flexbox flexDirection="column">
          <Text>Менять книги на таланты возможно только тогда, когда стихия достигла максимального ранга.</Text>
          <Text>
            Если, к примеру, стихия огня прокачана до максимума, менять можно только книги огня на книги талантов.
          </Text>
        </Flexbox>
      )
    case 'canUseRandomBarracksBooks':
      return (
        <Flexbox flexDirection="column">
          <Text>
            Книги самовыбора будут обменяны на книги выбранной стихии, которую хочется прокачивать в первом приоритете.
          </Text>
          <Text>
            Если стихия прокачана максимально, и не включен параметр "Менять книги-излишки на таланты", книги самовыбора
            использоваться не будут.
          </Text>
        </Flexbox>
      )
    case 'canUseTalentsToNonPriorityElements':
      return (
        <Flexbox flexDirection="column">
          <Text>
            Для наиболее эффективной прокачки, лучше не тратить книги талантов и короны на те стихии, которые не
            являются основными, так как это не даст эффективный прирост мощи.
          </Text>
          <Text>
            Однако, если это не так принципиально, а так же хочется набрать больше очков в ивентах, есть смысл потратить
            ресурсы и на остальные стихии.
          </Text>
          <Text>
            Ресурсы будут потрачены в порядке стихий, как они идут в казарме (или указаны в калькуляторе). Но в первую
            очередь ресурсы будут потрачены на приоритетную стихию.
          </Text>
        </Flexbox>
      )
    case 'usePossibleCastleLimit':
      return (
        <Flexbox flexDirection="column">
          <Text>
            На основе ваших ресурсов и параметров будет определен максимальный уровень замка, который можно прокачать.
          </Text>
          <Text>
            Далее, этот максимальный уровень замка будет использоваться как предел при прокачке дракона и расчета очков.
          </Text>
          <Text>При выключенной настройке будет учитываться текущий уровень замка, указанный в параметрах.</Text>
        </Flexbox>
      )
    case 'spentToArtifactBarracks':
      return (
        <Flexbox flexDirection="column">
          <Text>
            Все оставшие книги казармы (в том числе книги самовыбора) будут потрачены в артефакт для набора очков СК/ЭМ
          </Text>
          <Text>
            Потратить книги казармы в артефакт возможно только тогда, когда все стихии будут прокачаны до 9 ранга.
          </Text>
          <Text>
            Стоит учесть, что сначала книги казармы будут обменены на книги талантов (если включена соответствующая
            настройка), а только потом остатки будут влиты в артефакт.
          </Text>
        </Flexbox>
      )
    case 'spentToArtifactCastle':
      return (
        <Flexbox flexDirection="column">
          <Text>Все ресурсы будут потрачены на прокачку артефакта, вместо прокачки замка.</Text>
          <Text>Доступно только начиная с 2000 уровня замка.</Text>
        </Flexbox>
      )
    case 'spentToArtifactDragon':
      return (
        <Flexbox flexDirection="column">
          <Text>Все ресурсы будут потрачены на прокачку артефакта, вместо прокачки дракона.</Text>
          <Text>Доступно только начиная с 28 уровня дракона.</Text>
          <Text>
            Стоит учесть, что если включены настройки учета замка, то сначала ресурсы будут потрачены на прокачку
            дракона, пока не дойдет до лимита по уровню замка. И только при достижении лимита, все оставшиеся ресурсы
            будут потрачены в артефакт.
          </Text>
          <Text>Если настройки учета замка не включены, все ресурсы будут потрачены на прокачку артефакта.</Text>
        </Flexbox>
      )
    case 'spentToArtifactLightReagents':
      return (
        <Flexbox flexDirection="column">
          <Text>Все излишки реагентов света будут потрачены в артефакт.</Text>
          <Text>Доступно только начиная с 2000 уровня светлой магии.</Text>
        </Flexbox>
      )
    case 'spentToArtifactHammers':
      return (
        <Flexbox flexDirection="column">
          <Text>Все излишки кузнечных молотов будут потрачены в артефакт.</Text>
          <Text>Доступно только начиная с 2000 уровня кузницы.</Text>
        </Flexbox>
      )
    default:
      return null
  }
})

export default HelpNode
