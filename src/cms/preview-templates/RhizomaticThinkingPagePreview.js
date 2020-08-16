import React from 'react'
import PropTypes from 'prop-types'

const RhizomaticThinkingPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <>
        <div>{data.title}</div>
      </>
    )
  } else {
    return <div>Loading...</div>
  }
}

RhizomaticThinkingPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default RhizomaticThinkingPagePreview
