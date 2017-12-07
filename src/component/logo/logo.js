/**
 * Created by Administrator on 2017/11/17.
 */
import React from 'react'
import './logo.css'

class Logo extends React.Component {
    render() {
        return (
            <div className="logo-container">
                <img src={require('./job.jpg')} alt="" width={200}/>
            </div>
        )
    }
}

export default Logo