import React from 'react'

export default function CrimeDetails (props) {
  return (
    <div style={{ textAlign: 'left', margin: 16, padding: 16 }}>
      <h5>Category :- {props.selectedCategory || 'All'}</h5>
      {props.crimes.map(crime => <pre key={crime.id}>{JSON.stringify(crime, null, 2)}</pre>)}
    </div>
  )
}
