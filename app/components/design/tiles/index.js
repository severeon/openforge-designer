import React from 'react'

import RectangularTile from './rectangular-tile'

const tiles = {
  floor: {
    E: <RectangularTile width={4} height={4} className='e-tile tile' />,
    EA: <RectangularTile width={6} height={6} className='ea-tile tile' />,
    R: <RectangularTile width={4} height={8} className='r-tile tile' />
  }
}

export default tiles
