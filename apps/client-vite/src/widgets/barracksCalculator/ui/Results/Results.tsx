import { FC, memo } from 'react'
import { Accordion, Divider, Title } from '@mantine/core'
import {
  type CalculateBarracksResponse,
  type CalculateMightiestKingdomResponse,
  type CalculateUltimatePowerResponse,
} from 'kg-calculator-typings'
import { FormattedMessage } from 'react-intl'
import { MightiestKingdomStatistics } from '@entities/mightiestKingdom'
import { ResourceCount } from '@entities/resource'
import { UltimatePowerStatistics } from '@entities/ultimatePower'
import { ElementIcon } from '@shared/assets/icons'
import Flexbox from '@shared/ui/Flexbox'
import { elements } from '../../model/constants'
import ResultElement from '../ResultElement'


interface Props {
  className?: string
  data: CalculateBarracksResponse
  ultimatePowerData?: CalculateUltimatePowerResponse
  mightiestKingdomData?: CalculateMightiestKingdomResponse
}

const Results: FC<Props> = memo(
  ({
    className,
    data: {
      oldParameters,
      parameters,
      oldTalentParameters,
      newTalentParameters,
      sourceResources,
      spentResources,
      leftResources,
      randomBooksUsed,
      convertBooksForBarracks,
      convertTalentBooks,
      spentTalentBooks,
    },
    ultimatePowerData,
    mightiestKingdomData,
  }) => (
    <Flexbox className={className} flexDirection="column" gap={8}>
      <Title order={4}>
        <FormattedMessage defaultMessage="Результаты" />
      </Title>
      <Accordion className={className} variant="contained">
        {elements.map((element) => (
          <Accordion.Item key={element.key} value={element.key}>
            <Accordion.Control icon={<ElementIcon element={element.key} />}>{element.title}</Accordion.Control>
            <Accordion.Panel>
              <ResultElement
                element={element.key}
                oldParams={oldParameters}
                params={parameters}
                oldTalentParams={oldTalentParameters}
                talentParams={newTalentParameters}
                convertBooksForBarracks={convertBooksForBarracks}
                convertTalentBooks={convertTalentBooks}
                randomBooksUsed={randomBooksUsed}
                spentResources={spentResources}
                spentTalentBooks={spentTalentBooks}
              />
            </Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>

      <Flexbox flexDirection="column" gap={8}>
        <Title order={5}>
          <FormattedMessage defaultMessage="В целом потрачено" />
        </Title>
        <Flexbox gap={8} flexDirection="column">
          <ResourceCount
            resourceType="gold"
            count={spentResources.gold}
            sourceCount={sourceResources.gold}
            leftCount={leftResources.gold}
          />
          <ResourceCount
            resourceType="talentsResources_books"
            count={spentResources.talentsResources_books}
            sourceCount={sourceResources.talentsResources_books}
            leftCount={leftResources.talentsResources_books}
          />
          <ResourceCount
            resourceType="talentsResources_oraclesCrowns"
            count={spentResources.talentsResources_oraclesCrowns}
            sourceCount={sourceResources.talentsResources_oraclesCrowns}
            leftCount={leftResources.talentsResources_oraclesCrowns}
          />
          <ResourceCount
            resourceType="barracksResources_random"
            count={spentResources.barracksResources_random}
            sourceCount={sourceResources.barracksResources_random}
            leftCount={leftResources.barracksResources_random}
          />
        </Flexbox>
      </Flexbox>

      <Divider />

      <MightiestKingdomStatistics data={mightiestKingdomData} />

      <Divider />

      <UltimatePowerStatistics data={ultimatePowerData} />
    </Flexbox>
  ),
)

export default Results
