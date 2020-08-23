import React from 'react'
import { render } from '@testing-library/react'
import App from './App'
 
test('renders learn react link', () => {
  const { getByText } = render(<App />)
  const linkElement = getByText(/Sherlock's Catalog/i)
  expect(linkElement).toBeInTheDocument()
})
