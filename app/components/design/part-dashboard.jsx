import React from 'react'

import Tiles from './tiles/index'

import './styles/part-dashboard.css'

class PartDashboard extends React.PureComponent {
  onAddPart (codename) {
    return () => {
      this.props.onAddPart(codename)
    }
  }

  render () {
    let parts = []

    for (let codename in Tiles.floor) {
      let Tile = Tiles.floor[codename]
      let tileProps = {
        key: codename,
        className: 'part',
        title: 'Click to Add to Grid',
        onClick: this.onAddPart(codename)
      }

      parts.push(
        <div {...tileProps}>
          <Tile />
        </div>
      )
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
