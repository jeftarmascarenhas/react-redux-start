import React from 'react'
import PropTypes from 'prop-types'

import Logo from '../../images/logo.svg'

const Header = ({logo}) => (
<header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <h1 className="App-title">Welcome to React</h1>
</header>
)

Header.defaultProps = {
  logo: Logo,
}

Header.propTypes = {
  logo: PropTypes.string,
}

export default Header