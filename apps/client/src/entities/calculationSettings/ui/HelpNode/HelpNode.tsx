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
    default:
      return null
  }
})

export default HelpNode
