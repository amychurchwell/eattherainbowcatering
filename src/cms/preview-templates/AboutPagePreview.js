import React from 'react'
import PropTypes from 'prop-types'
import { AboutPageTemplate } from '../../templates/about-page'

const AboutPagePreview = ({ entry, getAsset }) => {
  const entryItems = entry.getIn(['data', 'intro', 'blurbs'])
  const blurbs = entryItems ? entryItems.toJS() : []

  return (
    <AboutPageTemplate
      title={entry.getIn(['data', 'title'])}
      intro={{ blurbs }}
    />
  )
}

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default AboutPagePreview
