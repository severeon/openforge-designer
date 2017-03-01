import React from 'react'

const BAD_PROPS = ['category', 'color', 'codename', 'x', 'y', 'rotation']

function convertFromUnitsToPx (units) {
  if (units <= 0) return 0
  return (units * 24) + 'px'
}

class RectangularTile extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      active: false
    }

    this.zIndex = RectangularTile.__count++
  }
  render () {
    let transform = `translate3d(${this.props.x}px, ${this.props.y}px, 0) rotate(${this.props.rotation}deg)`

    let styles = {
      width: convertFromUnitsToPx(this.props.width),
      height: convertFromUnitsToPx(this.props.height),
      backgroundColor: this.props.color || '#CCC',
      transform,
      zIndex: this.zIndex
    }

    let props = Object.assign({}, this.props, {
      onMouseEnter: (e) => this.setState({ active: false }),
      onMouseLeave: () => this.setState({ active: true })
    })

    BAD_PROPS.forEach((k) => delete props[k])

    props.className = this.props.codename + '-tile tile openforge-tile'
    if (this.props.width === 1) {
      props.className += ' half-tile'
    }

    if (this.props.height % 2 === 0) {
      props.className += ' even'
    }

    return (
      <div style={styles} {...props} ref={el => { this.$el = el }}>
        <div className='content'>{this.props.children}</div>
      </div>
    )
  }
}

RectangularTile.__count = 1

RectangularTile.propTypes = {
  width: React.PropTypes.number.isRequired,
  height: React.PropTypes.number.isRequired,
  codename: React.PropTypes.string.isRequired,
  x: React.PropTypes.number.isRequired,
  y: React.PropTypes.number.isRequired,
  rotation: React.PropTypes.number.isRequired,
  children: React.PropTypes.node,
  color: React.PropTypes.string
}

const defaultProps = {
  x: 0,
  y: 0,
  rotation: 0
}

RectangularTile.defaultProps = defaultProps

export default RectangularTile
