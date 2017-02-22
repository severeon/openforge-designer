import React from 'react'

import Route from 'react-router/lib/Route'
import IndexRedirect from 'react-router/lib/IndexRedirect'
import IndexRoute from 'react-router/lib/IndexRoute'

import Root from './root'

import Design from './design/design'

module.exports = (
  <Route path='/' component={Root} >
    <IndexRedirect to='/design' />

    <Route path='designer'>
      <IndexRedirect to='/design' />
    </Route>

    <Route path='design'>
      <IndexRoute component={Design} />
    </Route>
  </Route>
)
