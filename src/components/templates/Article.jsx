// Packages
import React from 'react'
import $ from 'jquery'

// Components
import { Container, Heading, Link, Paragraph } from '../atoms'

/**
 * @file Component representing an <article> element.
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */

/**
 * Renders an article with the base class 'adt-article'.
 *
 * @param {object} props - Component properties
 * @param {string} props.className - Space delimitted list of extra classes
 * @param {string} props.graph - Article blurb
 * @param {string} props.headline - Article headline
 * @param {string} props.href - Link to article
 * @param {string} props.id - Element id
 * @param {object} props.img - Article image properties
 * @param {string} props.img.src - Image source URL
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
      <Container>
        <Link href={href} target='_blank'>
          <Heading className='headline' heading={headline} size={4} />
          <Paragraph className='blurb' graph={graph} />
        </Link>
      </Container>
    </article>
  )
}

export default Article
