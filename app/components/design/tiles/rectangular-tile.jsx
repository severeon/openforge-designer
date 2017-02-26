import React from 'react'

function convertFromUnitsToInches (units) {
  if (units <= 0) return 0
  return (units / 2) + 'in'
}

class RectangularTile extends React.PureComponent {
  render () {
    let styles = {
      width: convertFromUnitsToInches(this.props.width),
      height: convertFromUnitsToInches(this.props.height),
      backgroundColor: '#000'
    }

    return (
      <div className='openforge-tile' style={styles} {...this.props}>Tile</div>
    )
  }
}

RectangularTile.propTypes = {
  width: React.PropTypes.number.isRequired,
  height: React.PropTypes.number.isRequired
}

export default RectangularTile
