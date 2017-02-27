import React from 'react'

import Tiles from './tiles'

import './styles/part-dashboard.css'

class PartDashboard extends React.PureComponent {
  onAddPart (codename, category) {
    return () => {
      this.props.onAddPart(codename, category)
    }
  }

  render () {
    let parts = []

    for (let category in Tiles) {
      let _tiles = Tiles[category]
      for (let codename in _tiles) {
        let Tile = _tiles[codename]
        let tileProps = {
          key: codename,
          title: 'Click to Add to Grid',
          onClick: this.onAddPart(codename, category)
        }

        parts.push(
          <Tile {...tileProps}>{codename}</Tile>
        )
      }
    }

    return (
      <div id='part-dashboard'>
        {parts}
      </div>
    )
  }
}

PartDashboard.propTypes = {
  onAddPart: React.PropTypes.func.isRequired
}

PartDashboard.displayName = 'part-dashboard'

export default PartDashboard
