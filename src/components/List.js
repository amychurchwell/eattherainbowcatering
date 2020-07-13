import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const FeatureList = ({ listItems }) => (
  <ul>
    {listItems.map((item) => (
      <li key={item.text} className="column">
        <div className="has-text-centered">
            <div
                style={{
                width: '240px',
                display: 'inline-block',
                }}
            >
                <PreviewCompatibleImage imageInfo={item} />
                <p className="has-text-weight-bold">{item.title}</p>
                <p>{item.description}</p>
            </div>
        </div>
      </li>
    ))}
  </ul>
)

FeatureList.propTypes = {
  listItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
}

export default FeatureList
