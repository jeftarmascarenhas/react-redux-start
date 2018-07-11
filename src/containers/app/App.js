import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as appActionCreators from './App.actions';
import './App.css';
import Header from '../../components/commom/header/Header'

class App extends Component {

  componentWillMount() {
    this.props.getText()
  }

  render() {
    return (
      <div className="App">
        <Header />
        <p className="App-intro">
          { this.props.text }
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ text: state.text })
const mapDispatchToProps = (dispatch) => bindActionCreators(appActionCreators, dispatch)

const AppConnect = connect(mapStateToProps, mapDispatchToProps)(App)

export default AppConnect
