import React from 'react'

import RectangularTile from './rectangular-tile'

const createRectangle = (width, height, codename, color) => {
  return React.createClass({
    displayName: codename + '-tile',
    render () {
      let props = Object.assign({}, this.props, {width, height, codename, color, className: `${codename}-tile tile`})
      return <RectangularTile {...props} />
    }
  })
}

const tiles = {
  floor: {
    E: createRectangle(4, 4, 'e'),
    EA: createRectangle(6, 6, 'ea'),
    U: createRectangle(8, 8, 'u'),
    R: createRectangle(4, 8, 'r', '#CFC'),
    S: createRectangle(2, 4, 'r', '#CFC'),
    SA: createRectangle(2, 6, 'r', '#CFC'),
    SB: createRectangle(2, 8, 'r', '#CFC')
  },
  wall: {
    A: createRectangle(1, 4, 'a', '#CCF'),
    BA: createRectangle(1, 3, 'ba', '#CCF'),
    B: createRectangle(1, 4, 'b', '#CCF'),
    C: createRectangle(1, 5, 'c', '#CCF'),
    D: createRectangle(1, 6, 'd', '#CCF')
  }
}

export default tiles
