import React from 'react'

import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'

import DropdownButton from 'react-bootstrap/lib/DropdownButton'
import MenuItem from 'react-bootstrap/lib/MenuItem'
import Modal from 'react-bootstrap/lib/Modal'

import PartDashboard from './part-dashboard'
import DesignGrid from './design-grid'

import './styles/design.css'

export default React.createClass({
  displayName: 'openforge-designer',

  componentDidMount () {
    this.parts = []
  },

  getInitialState () {
    return {
      showModal: false,
      modalData: {}
    }
  },

  onExport () {
    let modalData = {}

    this.parts.forEach((part) => {
      modalData[part] || (modalData[part] = 0)
      modalData[part]++
    })

    this.setState({ showModal: true, modalData })
  },

  addPart (part, category) {
    this.parts.push(part)
    this.designGrid.onAddPart(part, category)
  },

  render () {
    return (
      <Grid fluid>
        <Row style={{marginTop: '1em'}}>
          <Col lg={10}>
            OpenForge Designer
          </Col>
          <Col lg={2}>
            <DropdownButton id='main-menu' bsStyle='default' title='Menu'>
              <MenuItem eventKey='export' onClick={this.onExport}>Export</MenuItem>
            </DropdownButton>

            <Modal show={this.state.showModal} onHide={() => { this.setState({ showModal: false }) }}>
              <Modal.Header closeButton>
                <Modal.Title>List of Parts</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {
                  Object.keys(this.state.modalData).map((code) => {
                    return (
                      <div>{code.toUpperCase()} &times; {this.state.modalData[code]}</div>
                    )
                  })
                }
              </Modal.Body>
            </Modal>
          </Col>
        </Row>

        <Row>
          <Col lg={3}>
            <PartDashboard onAddPart={(codename, category) => this.addPart(codename, category)} />
          </Col>
          <Col lg={9}>
            <DesignGrid ref={designGrid => { this.designGrid = designGrid }} />
          </Col>
        </Row>
      </Grid>
    )
  }
})
