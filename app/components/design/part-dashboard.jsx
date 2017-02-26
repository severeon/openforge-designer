import React from 'react'

import Interact from 'interactjs'

import Tiles from './tiles/index'

import './styles/part-dashboard.css'

export default React.createClass({
  displayName: 'part-dashboard',

  componentDidMount () {
    console.log('setting up interact')
    let gridTarget = Interact.createSnapGrid({
      x: 50,
      y: 50
    })

    setTimeout(() => {
      Interact('#part-dashboard .part .tile')
      .draggable({
        snap: {
          targets: [gridTarget]
        },
        restrict: {
          restriction: 'body'
        }
      })
    }, 1000)
  },

  render () {
    let parts = []

    for (let codename in Tiles.floor) {
      let tile = Tiles.floor[codename]
      parts.push(
        <div key={codename} className='part'>{tile}</div>
      )
    }

    return (
      <div id='part-dashboard'>
        {parts}
      </div>
    )
  }
})
