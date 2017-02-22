import React from 'react'

import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'

import './styles/design.css'

export default React.createClass({
  displayName: 'openlock-designer',
  render () {
    return (
      <Grid fluid>
        <Row>
          <Col lg={10}>
            OpenLOCK Designer
          </Col>
          <Col lg={2}>
            Menu >>
          </Col>
        </Row>
      </Grid>
    )
  }
})
