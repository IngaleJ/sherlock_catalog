import React, { useState, useEffect } from 'react'
import CategoryButtons from './CategoryButtons'
import CrimeDetails from './CrimeDetails'
import { Text, Stack, Heading, Spinner } from '@chakra-ui/core'

export default function CrimeContainer (props) {
  const [crimes, setCrimes] = useState([])
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('All')

  useEffect(() => {
    fetch('https://data.police.uk/api/crimes-street/all-crime?lat=51.523819&lng=-0.158470&date=2020-04')
      .then(response => response.json())
      .then(data => {
        const categories = ['All', ...new Set(data.map(crime => crime.category))]
        setCrimes(data)
        setCategories(categories)
      })
  }, [])

  const filteredCrime = selectedCategory !== 'All' ? crimes && crimes.filter(crime => crime.category === selectedCategory) : crimes
  return (
    <div>
      <Stack>
        <Heading as='h1' size='xl'>
          Sherlock's Catalog
        </Heading>
        <Text fontSize='xl'>Catalog of cases near Baker street in Scotland Yard records.</Text>
        <Text fontSize='md'> Click on category to filter records. Card shows crime location and investigation status </Text>
      </Stack>
      {filteredCrime.length
        ? <>
          <CategoryButtons categories={categories} selectedCategory={selectedCategory} onSelect={setSelectedCategory} />
          <CrimeDetails crimes={filteredCrime} selectedCategory={selectedCategory} />
        </> : <Spinner size='xl' color='blue.500' />}
    </div>
  )

}
