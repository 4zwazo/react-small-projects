import React from 'react'

const Book = ({ img, title, author }) => {
  // const { img, title, author } = props
  return (
    <article className='book'>
      <img src={img} alt='the office' />
      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
    </article>
  )
}

export default Book
