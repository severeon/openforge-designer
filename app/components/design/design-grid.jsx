import React from 'react'

import Interact from 'interactjs'

import Tiles from './tiles'
import Constants from './constants'
import GridUtils from './grid-utils'

import './styles/display-grid.css'

var partCount = 0

export default React.createClass({
  displayName: 'display-grid',
  getInitialState () {
    return {
      parts: []
    }
  },

  componentDidMount () {
    let gridTarget = Interact.createSnapGrid({
      x: Constants.GRID_SPACING_X,
      y: Constants.GRID_SPACING_Y
    })

    Interact('#display-grid .tile')
      .draggable({
        snap: {
          targets: [gridTarget]
        },
        restrict: {
          restriction: '#display-grid',
          elementRect: { top: 1, left: 1, bottom: 1, right: 1 }
        },
        onmove: (event) => {
          let {target, dx, dy} = event

          let x = (parseFloat(target.getAttribute('data-x')) || 0) + GridUtils.clamp(dx, Constants.GRID_SPACING_X)
          let y = (parseFloat(target.getAttribute('data-y')) || 0) + GridUtils.clamp(dy, Constants.GRID_SPACING_Y)
          let r = (parseInt(target.getAttribute('data-rotation', 10) || 0))

          target.style.webkitTransform = target.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${r}deg)`

          target.setAttribute('data-x', x)
          target.setAttribute('data-y', y)
        }
      })
      .on('doubletap', (event) => {
        let {target} = event

        let x = (parseFloat(target.getAttribute('data-x')) || 0)
        let y = (parseFloat(target.getAttribute('data-y')) || 0)
        let r = (parseInt(target.getAttribute('data-rotation', 10) || 0))

        target.setAttribute('data-x', x)
        target.setAttribute('data-y', y)

        target.style.webkitTransform = target.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${r}deg)`
      })
  },

  onAddPart (codename, category = 'floor') {
    let Tile = Tiles[category][codename]

    this.setState({
      parts: this.state.parts.concat([
        <Tile key={partCount++}>{codename}</Tile>
      ])
    })
  },

  render () {
    return (
      <div id='display-grid'>
        {this.state.parts}
      </div>
    )
  }
})
