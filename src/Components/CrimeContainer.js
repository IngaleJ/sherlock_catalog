import React, { Component } from 'react'
import CategoryButtons from './CategoryButtons'
import CrimeDetails from './CrimeDetails'

export default class CrimeContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      crimes: [],
      categories: [],
      selectedCategory: null
    }
    this.handleSelect = this.handleSelect.bind(this)
  }

  componentDidMount () {
    fetch('https://data.police.uk/api/crimes-street/all-crime?lat=51.523819&lng=-0.158470&date=2020-04')
      .then(response => response.json())
      .then(data => {
        const categories = ['All', ...new Set(data.map(crime => crime.category))]
        this.setState({ crimes: data, categories })
      })
  }

  handleSelect (category) {
    this.setState({
      selectedCategory: category === 'All' ? null : category
    })
  }

  render () {
    const { categories, crimes, selectedCategory } = this.state
    const filteredCrime = selectedCategory ? crimes.filter(crime => crime.category === selectedCategory) : crimes
    return (
      <div>
        <h2>Sherlock's Catalog</h2>
        <h4>Catalog of cases in Scotland Yard </h4>
        {filteredCrime.length
          ? <>
            <CategoryButtons categories={categories} onSelect={this.handleSelect} />
            <CrimeDetails crimes={filteredCrime} selectedCategory={selectedCategory} />
          </> : <div>Loading...</div>}
      </div>
    )
  }
}
