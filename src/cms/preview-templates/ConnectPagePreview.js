import React from 'react'
import PropTypes from 'prop-types'

import { ConnectPageTemplate } from '../../templates/connect-page'

const ConnectPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <ConnectPageTemplate
        title={data.title}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

ConnectPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default ConnectPagePreview
