/**
 * Created by Administrator on 2017/11/24.
 */
import React from 'react'

export default function enhanceForm(Comp) {
    return class WrapperComp extends React.Component {
        constructor(props) {
            super(props)
            this.state = {

            }
            this.handleChange = this.handleChange.bind(this)
        }

        handleChange(key, value) {
            this.setState({
                [key]: value
            })

        }

        render() {
            return <Comp state={this.state} handleChange={this.handleChange} {...this.props}></Comp>
        }
    }
}