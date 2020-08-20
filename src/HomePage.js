import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class HomePage extends Component {
    render() {
        return (
            <div className="home-page">
                <p>Welcome to ULTIMATE MEGA BIG LARGE PRODUCTIVITY..</p>
                <p>We're a front for the mafia and proud of it!</p>
                <Link to='/list' >Head to the TODO list!</Link>
            </div>
        )
    }
}
