import { FC, memo } from 'react'
import { Accordion, Divider, Stack } from '@mantine/core'
import { ParameterInput, WitchGemsInputs, WitchPowerInput } from 'entities/parameter'
import GalleryInput from 'entities/parameter/ui/GalleryInput'
import { useServerSettings } from 'entities/serverSettings'
import { NoAuthNavigate } from 'entities/user'
import { ElementIcon } from 'shared/assets/icons'
import Flexbox from 'shared/ui/Flexbox'
import PageTitle from 'shared/ui/PageTitle'
import { InputElementOnlyParams, elements } from 'widgets/barracksCalculator'
import css from './styles.module.sass'


interface Props {
  className?: string
}

const ParametersPage: FC<Props> = memo(({ className }) => {
  const { serverSettings } = useServerSettings()
  return (
    <Stack maw={600}>
      <NoAuthNavigate to="/myData" />
      <PageTitle />
      <Accordion
        className={css.accordion}
        variant="contained"
        multiple
        defaultValue={['dragon', 'castle', 'witch', 'barracks', 'blacksmith', 'gallery']}
      >
        <Accordion.Item value="dragon">
          <Accordion.Control>Дракон</Accordion.Control>
          <Accordion.Panel>
            <Flexbox flexDirection="column" gap={8}>
              <ParameterInput parameterType="dragonParams_green" />
              <ParameterInput parameterType="dragonParams_blue" />
              <ParameterInput parameterType="dragonParams_purple" />
              <ParameterInput parameterType="dragonParams_gold" />
            </Flexbox>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="castle">
          <Accordion.Control>Замок</Accordion.Control>
          <Accordion.Panel>
            <Flexbox flexDirection="column" gap={8}>
              <ParameterInput parameterType="castleParams_level" />
            </Flexbox>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="witch">
          <Accordion.Control>Ведьма</Accordion.Control>
          <Accordion.Panel>
            <WitchPowerInput />
            <Divider mt={8} mb={8} />
            <WitchGemsInputs maxRank={serverSettings?.witchGemsMaxRank || 1} />
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="barracks">
          <Accordion.Control>Казарма</Accordion.Control>
          <Accordion.Panel>
            <Accordion className={className} variant="contained">
              {elements.map((element) => (
                <Accordion.Item key={element.key} value={element.key}>
                  <Accordion.Control icon={<ElementIcon element={element.key} />}>{element.title}</Accordion.Control>
                  <Accordion.Panel>
                    <InputElementOnlyParams element={element.key} />
                  </Accordion.Panel>
                </Accordion.Item>
              ))}
            </Accordion>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="blacksmith">
          <Accordion.Control>Кузнец</Accordion.Control>
          <Accordion.Panel>
            <Flexbox flexDirection="column" gap={8}>
              <ParameterInput parameterType="blacksmithParams_level" />
            </Flexbox>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="gallery">
          <Accordion.Control>Галерея</Accordion.Control>
          <Accordion.Panel>
            <Flexbox flexDirection="column" gap={8}>
              <GalleryInput />
            </Flexbox>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Stack>
  )
})

export default ParametersPage
