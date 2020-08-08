import React from 'react'

export default function CategoryButtons (props) {
  return (
    <div style={{ margin: 8, padding: 8 }}>
      {props.categories.map(category => <button key={category} onClick={() => { props.onSelect(category) }} style={{ padding: 8, margin: 4 }}>{category}</button>)}
    </div>
  )
}
