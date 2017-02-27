import React from 'react'

import Tiles from './tiles'

import Interact from 'interactjs'

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
      x: 24,
      y: 24
    })

    Interact('#display-grid .tile')
      .draggable({
        snap: {
          targets: [gridTarget]
        },
        restrict: {
          restriction: 'body'
        },
        onmove: (event) => {
          let {target, dx, dy} = event

          let x = (parseFloat(target.getAttribute('data-x')) || 0) + dx
          let y = (parseFloat(target.getAttribute('data-y')) || 0) + dy

          target.style.webkitTransform = target.style.transform = `translate(${x}px, ${y}px)`

          target.setAttribute('data-x', x)
          target.setAttribute('data-y', y)
        }
      })
  },

  onAddPart (codename) {
    let Tile = Tiles.floor[codename]

    this.setState({
      parts: this.state.parts.concat([
        <Tile key={partCount++} />
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
