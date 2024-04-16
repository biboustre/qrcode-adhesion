import React from 'react'

export default function Event({title, name, date}) {
  return (
    <section className='event'>
        <h1>{title}</h1>
        <h2>{name}</h2>
        <p>{date}</p>
    </section>
  )
}
