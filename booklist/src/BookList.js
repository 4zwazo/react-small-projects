import React from 'react'
import Book from './Book'
import { books } from './books'

export default function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => (
        <Book key={book.id} {...book} />
      ))}
      )
    </section>
  )
}
