import React from 'react'
import PropTypes from 'prop-types'
import { MenuPageTemplate } from '../../templates/menu-page'

const MenuPagePreview = ({ entry, getAsset }) => {
  const entryItems = entry.getIn(['data', 'menu', 'items'])
  const items = entryItems ? entryItems.toJS() : []

  return (
    <MenuPageTemplate
      image={getAsset(entry.getIn(['data', 'image']))}
      title={entry.getIn(['data', 'title'])}
      heading={entry.getIn(['data', 'heading'])}
      menu={{ items }}
    />
  )
}

MenuPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default MenuPagePreview
