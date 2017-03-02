import React from 'react'

import Tiles from './tiles'

import Rect from './tiles/rectangular-tile'

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

      parts.push(<h3 style={{textTransform: 'capitalize'}}>{category} tiles</h3>)

      for (let codename in _tiles) {
        let tileProps = Object.assign({
          key: codename,
          title: 'Click to Add to Grid',
          onClick: this.onAddPart(codename, category),
          className: `${codename}-tile tile`
        }, _tiles[codename])

        parts.push(
          <Rect {...tileProps}>{codename}</Rect>
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
