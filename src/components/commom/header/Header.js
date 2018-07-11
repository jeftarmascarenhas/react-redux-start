import React from 'react'

const Header = () => (
<header className="App-header">
  <img src={`${process.env.PUBLIC_URL}/images/logo.svg`} className="App-logo" alt="logo" />
  <h1 className="App-title">Welcome to React</h1>
</header>
)

export default Header