// Packages
import React from 'react'
import $ from 'jquery'

// Components
import { Heading, Link, Paragraph } from '../atoms'

/**
 * @file Component representing an <article> element.
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */

/**
 * Renders an article with the base class 'adt-article'.
 *
 * @param {object} props - Component properties
 * @returns {HTMLElement} <article> element
 */
const Article = props => {
  const { className, graph, headline, href, id, img } = props
  const style = `adt-article ${className || ''}`

  // Update background image
  $(`#${id}`).css('background-image', `url(${img.src})`)

  // Render article
  return (
    <article id={id} className={style.trim()}>
      <Link href={href} target='_blank'>
        <Heading className='headline' heading={headline} size={4} />
        <Paragraph className='blurb' graph={graph} />
      </Link>
    </article>
  )
}

export default Article
