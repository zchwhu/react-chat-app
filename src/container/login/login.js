/**
 * Created by Administrator on 2017/11/17.
 */
import React from 'react'
import Logo from '../../component/logo/logo'
import {List, InputItem, WingBlank, WhiteSpace, Button} from 'antd-mobile'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {login} from '../../redux/user.redux'

@connect(
    state => state.user,
    {login}
)
class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: '',
            pwd: ''
        }
        this.register = this.register.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
    }

    register() {
        this.props.history.push('/register')
    }

    handleLogin() {
        this.props.login(this.state)
    }

    handleChange(key, value) {
        this.setState({
            [key]: value
        })

    }

    render() {
        return (
            <div>
                {this.props.redirectTo ? <Redirect to={this.props.redirectTo}/> : null}
                <Logo/>
                {this.props.msg ? <p className='err-msg'>{this.props.msg}</p> : null}
                <WingBlank>
                    <List>
                        <InputItem
                            onChange={v => this.handleChange('user', v)}
                        >用户</InputItem>
                        <WhiteSpace/>
                        <InputItem
                            onChange={v => this.handleChange('pwd', v)}
                            type="password"
                        >密码</InputItem>
                    </List>
                    <WhiteSpace/>
                    <Button type='primary' onClick={this.handleLogin}>登录</Button>
                    <WhiteSpace/>
                    <Button onClick={this.register} type='primary'>注册</Button>
                </WingBlank>
            </div>
        )
    }
}

export default Login