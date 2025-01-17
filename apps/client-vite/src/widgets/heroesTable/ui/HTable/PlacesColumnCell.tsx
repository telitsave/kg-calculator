import React, { type FC } from 'react'
import { Flex, Text } from '@mantine/core'
import { FormattedMessage, useIntl } from 'react-intl'
import { PLACE_LABELS } from '@entities/hero'
import { PlacesIcon } from '@shared/assets/icons'


interface Props {
  placeId: number
  season: number | undefined
}

const PlacesColumnCell: FC<Props> = ({ placeId, season }) => {
  const intl = useIntl()
  return (
    <Flex align="center">
      <PlacesIcon placeId={placeId} />
      {(placeId !== 4 || season === undefined) && <Text truncate>{PLACE_LABELS(intl)[placeId]}</Text>}
      {placeId === 4 && season !== undefined && (
        <Text truncate>
          <FormattedMessage
            defaultMessage="{place} (сезон {season})"
            values={{
              place: PLACE_LABELS(intl)[placeId],
              season,
            }}
          />
        </Text>
      )}
    </Flex>
  )
}

export default PlacesColumnCell
