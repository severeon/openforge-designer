import React from 'react'

class Root extends React.PureComponent {
  render () {
    return (
      <div className='content-root'>
        {this.props.children}
      </div>
    )
  }
}

Root.displayName = 'Root'

Root.propTypes = {
  children: React.PropTypes.node,
  location: React.PropTypes.object
}

export default Root
