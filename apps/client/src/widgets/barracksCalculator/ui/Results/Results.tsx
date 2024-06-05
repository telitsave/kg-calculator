import React, { FC, ReactNode, memo, useMemo } from 'react'
import cx from 'classnames'
import { Accordion, Divider, TableData, Title } from '@mantine/core'
import { ResourceIcon } from 'entities/resource'
import { BarracksBooksResources, Parameters, Resources } from 'shared/api'
import { ElementIcon } from 'shared/assets/icons'
import Flexbox from 'shared/ui/Flexbox'
import ResourceCount from '../../../../entities/resource/ui/ResourceCount'
import { elements } from '../../model/constants'
import ResultElement from '../ResultElement'
import css from './styles.module.sass'


interface Props {
  className?: string
  oldParams: Parameters
  params: Parameters
  sourceResources: Resources
  spentResources: Resources
  leftResources: Resources
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
  }) => {
    const tableData = useMemo<TableData>(
      () => ({
        head: ['Ресурс', 'Потрачено', 'Осталось'],
        body: [
          [
            <Flexbox justifyContent="center">
              <ResourceIcon resourceType="bookBow1" />
            </Flexbox>,
            spentResources?.barracksBooks.bow.rank1.toLocaleString('ru'),
            leftResources?.barracksBooks.bow.rank1.toLocaleString('ru'),
          ],
          [
            <Flexbox justifyContent="center">
              <ResourceIcon resourceType="bookBow2" />
            </Flexbox>,
            spentResources?.barracksBooks.bow.rank2.toLocaleString('ru'),
            leftResources?.barracksBooks.bow.rank2.toLocaleString('ru'),
          ],
          [
            <Flexbox justifyContent="center">
              <ResourceIcon resourceType="bookBow3" />
            </Flexbox>,
            spentResources?.barracksBooks.bow.rank3.toLocaleString('ru'),
            leftResources?.barracksBooks.bow.rank3.toLocaleString('ru'),
          ],
          [
            <Flexbox justifyContent="center">
              <ResourceIcon resourceType="bookBow4" />
            </Flexbox>,
            spentResources?.barracksBooks.bow.rank4.toLocaleString('ru'),
            leftResources?.barracksBooks.bow.rank4.toLocaleString('ru'),
          ],

          [
            <Flexbox justifyContent="center">
              <ResourceIcon resourceType="bookFire1" />
            </Flexbox>,
            spentResources?.barracksBooks.fire.rank1.toLocaleString('ru'),
            leftResources?.barracksBooks.fire.rank1.toLocaleString('ru'),
          ],
          [
            <Flexbox justifyContent="center">
              <ResourceIcon resourceType="bookFire2" />
            </Flexbox>,
            spentResources?.barracksBooks.fire.rank2.toLocaleString('ru'),
            leftResources?.barracksBooks.fire.rank2.toLocaleString('ru'),
          ],
          [
            <Flexbox justifyContent="center">
              <ResourceIcon resourceType="bookFire3" />
            </Flexbox>,
            spentResources?.barracksBooks.fire.rank3.toLocaleString('ru'),
            leftResources?.barracksBooks.fire.rank3.toLocaleString('ru'),
          ],
          [
            <Flexbox justifyContent="center">
              <ResourceIcon resourceType="bookFire4" />
            </Flexbox>,
            spentResources?.barracksBooks.fire.rank4.toLocaleString('ru'),
            leftResources?.barracksBooks.fire.rank4.toLocaleString('ru'),
          ],

          [
            <Flexbox justifyContent="center">
              <ResourceIcon resourceType="bookIce1" />
            </Flexbox>,
            spentResources?.barracksBooks.ice.rank1.toLocaleString('ru'),
            leftResources?.barracksBooks.ice.rank1.toLocaleString('ru'),
          ],
          [
            <Flexbox justifyContent="center">
              <ResourceIcon resourceType="bookIce2" />
            </Flexbox>,
            spentResources?.barracksBooks.ice.rank2.toLocaleString('ru'),
            leftResources?.barracksBooks.ice.rank2.toLocaleString('ru'),
          ],
          [
            <Flexbox justifyContent="center">
              <ResourceIcon resourceType="bookIce3" />
            </Flexbox>,
            spentResources?.barracksBooks.ice.rank3.toLocaleString('ru'),
            leftResources?.barracksBooks.ice.rank3.toLocaleString('ru'),
          ],
          [
            <Flexbox justifyContent="center">
              <ResourceIcon resourceType="bookIce4" />
            </Flexbox>,
            spentResources?.barracksBooks.ice.rank4.toLocaleString('ru'),
            leftResources?.barracksBooks.ice.rank4.toLocaleString('ru'),
          ],

          [
            <Flexbox justifyContent="center">
              <ResourceIcon resourceType="bookPoison1" />
            </Flexbox>,
            spentResources?.barracksBooks.poison.rank1.toLocaleString('ru'),
            leftResources?.barracksBooks.poison.rank1.toLocaleString('ru'),
          ],
          [
            <Flexbox justifyContent="center">
              <ResourceIcon resourceType="bookPoison2" />
            </Flexbox>,
            spentResources?.barracksBooks.poison.rank2.toLocaleString('ru'),
            leftResources?.barracksBooks.poison.rank2.toLocaleString('ru'),
          ],
          [
            <Flexbox justifyContent="center">
              <ResourceIcon resourceType="bookPoison3" />
            </Flexbox>,
            spentResources?.barracksBooks.poison.rank3.toLocaleString('ru'),
            leftResources?.barracksBooks.poison.rank3.toLocaleString('ru'),
          ],
          [
            <Flexbox justifyContent="center">
              <ResourceIcon resourceType="bookPoison4" />
            </Flexbox>,
            spentResources?.barracksBooks.poison.rank4.toLocaleString('ru'),
            leftResources?.barracksBooks.poison.rank4.toLocaleString('ru'),
          ],

          [
            <Flexbox justifyContent="center">
              <ResourceIcon resourceType="gold" />
            </Flexbox>,
            spentResources?.gold.toLocaleString('ru'),
            leftResources?.gold.toLocaleString('ru'),
          ],
        ],
      }),
      [leftResources, spentResources],
    )
    return (
      <Flexbox className={cx(css.root, className)} flexDirection="column" gap={8}>
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
    )
  },
)

export default Results
