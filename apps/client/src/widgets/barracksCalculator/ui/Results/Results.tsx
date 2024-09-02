import { FC, ReactNode, memo } from 'react'
import { Accordion, Divider, Title } from '@mantine/core'
import { BarracksBooksResources, ParametersData, ResourcesData } from 'kg-calculator-typings'
import { ResourceCount } from 'entities/resource'
import { ElementIcon } from 'shared/assets/icons'
import Flexbox from 'shared/ui/Flexbox'
import { elements } from '../../model/constants'
import ResultElement from '../ResultElement'

interface Props {
  className?: string
  oldParams: ParametersData
  params: ParametersData
  sourceResources: ResourcesData
  spentResources: ResourcesData
  leftResources: ResourcesData
  randomBooksUsed: BarracksBooksResources
  convertBooksForBarracks: BarracksBooksResources
  convertTalentBooks: BarracksBooksResources
  spentTalentBooks: BarracksBooksResources
  extremePowerNode: ReactNode
  mightiestKingdomNode: ReactNode
}

const Results: FC<Props> = memo(
  ({
    className,
    oldParams,
    params,
    sourceResources,
    spentResources,
    leftResources,
    randomBooksUsed,
    convertBooksForBarracks,
    convertTalentBooks,
    spentTalentBooks,
    extremePowerNode,
    mightiestKingdomNode,
  }) => (
    <Flexbox className={className} flexDirection="column" gap={8}>
      <Title order={4}>Результаты</Title>
      <Accordion className={className} variant="contained">
        {elements.map((element) => (
          <Accordion.Item key={element.key} value={element.key}>
            <Accordion.Control icon={<ElementIcon element={element.key} />}>{element.title}</Accordion.Control>
            <Accordion.Panel>
              <ResultElement
                element={element.key}
                oldParams={oldParams}
                params={params}
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
        <Title order={5}>В целом потрачено</Title>
        <Flexbox gap={8} flexDirection="column">
          <ResourceCount
            resourceType="gold"
            count={spentResources.gold}
            sourceCount={sourceResources.gold}
            leftCount={leftResources.gold}
          />
          <ResourceCount
            resourceType="talentBook"
            count={spentResources.talents.books}
            sourceCount={sourceResources.talents.books}
            leftCount={leftResources.talents.books}
          />
          <ResourceCount
            resourceType="talentCrown"
            count={spentResources.talents.oraclesCrowns}
            sourceCount={sourceResources.talents.oraclesCrowns}
            leftCount={leftResources.talents.oraclesCrowns}
          />
          <ResourceCount
            resourceType="bookRandom"
            count={spentResources.barracksBooks.random}
            sourceCount={sourceResources.barracksBooks.random}
            leftCount={leftResources.barracksBooks.random}
          />
        </Flexbox>
      </Flexbox>
      <Divider />
      {mightiestKingdomNode}
      <Divider />
      {extremePowerNode}
    </Flexbox>
  ),
)

export default Results
