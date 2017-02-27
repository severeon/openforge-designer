import React from 'react'

import RectangularTile from './rectangular-tile'

const createRectangle = (width, height, className) => {
  return React.createClass({
    displayName: className,
    render () {
      let props = {width, height, className: className + ' tile'}
      return <RectangularTile {...props} />
    }
  })
}

const tiles = {
  floor: {
    E: createRectangle(4, 4, 'e-tile'),
    EA: createRectangle(4, 6, 'ea-tile'),
    R: createRectangle(4, 8, 'r-tile')
  }
}

export default tiles
