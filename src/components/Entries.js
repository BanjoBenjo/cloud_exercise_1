import React from 'react'
import Entry from './Entry'

const Entries = ({ entries, onDelete }) => {
  return (
    <>
      {entries.map((entry) => (
        <Entry key={entry.id} entry={entry} onDelete={onDelete}/>
        ))}
    </>
  )
}

export default Entries
