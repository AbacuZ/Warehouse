import React, { Component } from 'react'
import Login from './src/screens/login/login.js'
import Home from './src/screens/home/home.js'

export default class App extends Component {
    state = {
        username : '',
        password : '',
        isLoggedIn : false,
        message : ''
    }

    render() {
        if (this.state.isLoggedIn)
            return (
                <Home onLogoutPress={() => this.setState({isLoggedIn: false})}
                />
            )
        else
            return (
                <Login onLoginPress={() => this.setState({isLoggedIn: true})}
                />
            )
    }
}