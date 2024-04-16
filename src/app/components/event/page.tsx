import React from 'react';


export default function Event({title, name, date, className}) {
  return (
    <section className='event'>
        <h1 className={className}>{title}</h1>
        <h2>{name}</h2>
        <p>{date}</p>
    </section>
  )
}
