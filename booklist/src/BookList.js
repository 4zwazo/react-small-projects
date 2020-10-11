import React from 'react'

const books = [
  {
    id: 1,
    img:
      'https://images-na.ssl-images-amazon.com/images/I/51qNkKlcbnL._AC_UL200_SR200,200_.jpg',
    title: "Little Blue Truck's Halloween",
    author: 'Alice Schertle',
  },
  {
    id: 2,
    img:
      'https://images-na.ssl-images-amazon.com/images/I/71KilybDOoL._AC_UL200_SR200,200_.jpg',
    title: 'The Very Hungry Caterpillar',
    author: 'Eric Carle',
  },
  {
    id: 3,
    img:
      'https://images-na.ssl-images-amazon.com/images/I/A1XyS0D1S-L._AC_UL200_SR200,200_.jpg',
    title: 'Room on the Broom',
    author: 'Julia Donaldson',
  },
]

export default function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => (
        <Book key={book.id} onebook={book} />
      ))}
      )
    </section>
  )
}

const Book = ({ onebook }) => {
  const { img, title, author } = onebook
  return (
    <article className='book'>
      <img src={img} alt='the office' />
      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
    </article>
  )
}
