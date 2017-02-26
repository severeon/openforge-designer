import React from 'react'

import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'

import DropdownButton from 'react-bootstrap/lib/DropdownButton'
import MenuItem from 'react-bootstrap/lib/MenuItem'

import PartDashboard from './part-dashboard'
import DesignGrid from './design-grid'

import './styles/design.css'

export default React.createClass({
  displayName: 'openlock-designer',
  render () {
    return (
      <Grid fluid>
        <Row style={{marginTop: '1em'}}>
          <Col lg={10}>
            OpenLOCK Designer
          </Col>
          <Col lg={2}>
            <DropdownButton id='main-menu' bsStyle='default' title='Menu'>
              <MenuItem eventKey='export'>Export</MenuItem>
            </DropdownButton>
          </Col>
        </Row>

        <Row>
          <Col lg={3}>
            <PartDashboard />
          </Col>
          <Col lg={9}>
            <DesignGrid />
          </Col>
        </Row>
      </Grid>
    )
  }
})
