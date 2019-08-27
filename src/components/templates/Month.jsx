// Packages
import React from 'react'

// Components
import { Heading, Paragraph } from '../atoms'
import Article from './Article'

/**
 * @file Component representing a month section.
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */

const Month = props => {
  const { articles, className, id, name } = props

  const size = articles.length
  const style = `adt-month ${className || ''}`

  return (
    <section id={id} className={style.trim()}>
      <div className='month-header'>
        <Heading className='month-name' heading={name} size={3} />
        <Paragraph className='num-articles'>
          {size}&nbsp;{size === 1 ? 'story' : 'stories'}
        </Paragraph>
      </div>
      <div className='articles'>
        {articles.map((article, i) => {
          article.id = `${id}-article-${i}`
          return <Article {...article} key={article.id} />
        })}
      </div>
    </section>
  )
}

export default Month
