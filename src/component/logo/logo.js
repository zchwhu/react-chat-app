/**
 * Created by Administrator on 2017/11/17.
 */
import React from 'react'
import logoImg from './job.jpg'
import './logo.css'

class Logo extends React.Component {
    render() {
        return (
            <div className="logo-container">
                <img src={logoImg} alt=""/>
            </div>
        )
    }
}

export default Logo