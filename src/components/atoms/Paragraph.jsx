// Packages
import React from 'react'

/**
 * @file Components representing an <p> elements.
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */

/**
 * Renders a paragraph element with the base class 'ada-paragraph'.
 *
 * @param {object} props - Component properties
 * @param {*} props.children - Child elements to render
 * @param {string} props.className - Space delimitted list of extra classes
 * @param {string} props.id - Element id
 * @param {object | undefined} state - Component state
 * @param {object | undefined} context - Component context
 * @returns {HTMLParagraphElement}
 */
const Paragraph = props => {
  const { className, children, graph, id } = props
  const style = (`ada-paragraph ${className || ''}`).trim()

  return (
    <p
      id={id} className={style} dangerouslySetInnerHTML={{
        __html: graph || children
      }}
    />
  )
}

/**
 * Component representing an article blurb.
 *
 * @param {object} param0 - Component properties
 * @param {string} param0.blurb - Article blurb
 * @returns {<Paragraph>}
 */
const Blurb = ({ blurb }) => (
  <Paragraph className='blurb'>{blurb}</Paragraph>
)

/**
 * Component representing an article category.
 *
 * @param {object} param0 - Component properties
 * @param {string} param0.category - Article category
 * @returns {<Paragraph>}
 */
const Category = ({ category }) => (
  <Paragraph className='category'>{category}</Paragraph>
)

/**
 * Component representing an article headline.
 *
 * @param {object} param0 - Component properties
 * @param {string} param0.headline - Article headline
 * @returns {<Paragraph>}
 */
const Headline = ({ headline }) => (
  <Paragraph className='headline'>{headline}</Paragraph>
)

export { Paragraph as default, Blurb, Category, Headline }
