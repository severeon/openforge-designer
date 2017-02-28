import React from 'react'

import Tiles from './tiles'
import Constants from './constants'
import Rect from './tiles/rectangular-tile'

import './styles/display-grid.css'

const snap = function ({x, y}) {
  let gridx = Math.round(x / Constants.GRID_SPACING_X)
  let gridy = Math.round(y / Constants.GRID_SPACING_Y)

  let newX = gridx * Constants.GRID_SPACING_X
  let newY = gridy * Constants.GRID_SPACING_Y

  return { x: newX, y: newY }
}

export default React.createClass({
  displayName: 'design-grid',

  getInitialState () {
    return {
      parts: [],
      dragTarget: null
    }
  },

  onAddPart (codename, category = 'floor') {
    this.setState({
      parts: this.state.parts.concat([
        Object.assign({}, Tiles[category][codename])
      ])
    })
  },

  onMouseUp () {
    let {parts, dragTarget} = this.state

    if (!parts[dragTarget]) return

    Object.assign(parts[dragTarget], snap(parts[dragTarget]))

    this.setState({ dragTarget: null, parts })
  },

  onMouseDown (key) {
    return (event) => {
      this.setState({ dragTarget: key, startX: event.clientX, startY: event.clientY })
    }
  },

  onMouseMove (event) {
    if (this.state.dragTarget === null) return
    let {startX, startY, dragTarget, parts} = this.state

    let dx = event.clientX - startX
    let dy = event.clientY - startY

    Object.assign(parts[dragTarget], { x: (parts[dragTarget].x || 0) + dx, y: (parts[dragTarget].y || 0) + dy })
    this.setState({ parts, startX: startX + dx, startY: startY + dy })
  },

  onDoubleClick (key) {
    return (event) => {
      let {parts} = this.state

      let rotation = (parts[key].rotation || 0) + 90
      if (rotation === 360) {
        rotation = 0
      }

      parts[key].rotation = rotation

      this.setState({ parts })
    }
  },

  render () {
    return (
      <div id='display-grid' onMouseUp={this.onMouseUp} onMouseMove={this.onMouseMove}>
        {this.state.parts.map((tileProps, idx) => {
          tileProps.onMouseDown = this.onMouseDown(idx)
          tileProps.onDoubleClick = this.onDoubleClick(idx)

          return (
            <Rect key={idx} {...tileProps}>{tileProps.codename}</Rect>
          )
        })}
      </div>
    )
  }
})
