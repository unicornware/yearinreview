// Packages
import React from 'react'

// Components
import { Heading, Paragraph } from '../atoms'
import Article from './Article'

/**
 * @file Component representing a month section.
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */

/**
 * Renders a <section> element with the base class 'adt-month'.
 *
 * @param {object} props - Component properties
 * @param {object[]} props.articles - Array of article objects
 * @param {string} props.className - Space delimitted list of extra classes
 * @param {string} props.name - Month name
 * @param {number} props.year - Month year
 * @returns {HTMLElement} <section> element
 */
const Month = props => {
  const { articles, className, name, year } = props

  const id = `${name}${year}`
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
          return <Article {...article} month={id} key={article.id} />
        })}
      </div>
    </section>
  )
}

export default Month
