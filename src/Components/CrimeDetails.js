import React from 'react'
import {Box, Heading, Text, SimpleGrid } from '@chakra-ui/core'

export default function CrimeDetails (props) {
  return (
    <SimpleGrid minChildWidth='200px' spacingX='10px' spacingY='10px' p='16px'>
      {props.crimes.map(crime =>
        <Box background='#FAF089' key={crime.id} p={4} shadow='md' borderWidth='1px' flex='1' rounded='md'>
          <Heading fontSize='md'>{crime.location.street.name}</Heading>
          <Text mt={4}>{crime.outcome_status ?
            `Status ${crime.outcome_status.date}: ${crime.outcome_status.category}`
            : 'No outcome'}
          </Text>
          <Text>category: {crime.category}</Text>
        </Box>)}
    </SimpleGrid>
  )
}
