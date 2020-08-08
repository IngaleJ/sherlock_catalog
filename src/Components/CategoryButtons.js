import React from 'react'
import { ButtonGroup, Button } from '@chakra-ui/core'

export default function CategoryButtons (props) {
  return (
    <>
      {/* <Text fontSize='md'>Categories</Text> */}
      <ButtonGroup spacing={4}>
        {props.categories.map(category =>
          <Button
            key={category}
            onClick={() => { props.onSelect(category) }}
            variantColor='teal'
            variant={ category === props.selectedCategory ? 'solid' : 'outline'}
            size='sm'
            style={{ marginBottom: 4 }}
          >
            {category}
          </Button>
        )}
      </ButtonGroup>
    </>
  )
}
