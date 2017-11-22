/**
 * Created by Administrator on 2017/11/20.
 */
import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {NavBar, InputItem, TextareaItem, Button} from 'antd-mobile'
import AvatarSelector from '../../component/avatar-selector/avatar-selector'
import {update} from '../../redux/user.redux'

@connect(
    state => state.user,
    {update}
)
class GeniusInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            desc: ''
        }
        this.selectAvatar = this.selectAvatar.bind(this)
    }

    handleChange(key, value) {
        this.setState({
            [key]: value
        })
    }

    selectAvatar(imgName) {
        this.setState({
            avatar: imgName
        })
    }

    render() {
        const path = this.props.location.pathname
        const redirect = this.props.redirectTo
        return (
            <div>
                {redirect && redirect !== path ? <Redirect to={this.props.redirectTo}></Redirect> : null}
                <NavBar
                    mode="dark"
                >牛人完善信息页面</NavBar>
                <AvatarSelector
                    selectAvatar={this.selectAvatar}
                />
                <InputItem
                    onChange={(v) => this.handleChange('title', v)}>
                    求职岗位
                </InputItem>
                <TextareaItem
                    title="个人简介"
                    autoHeight
                    rows={3}
                    onChange={(v) => this.handleChange('desc', v)}>
                </TextareaItem>
                <Button
                    type="primary"
                    onClick={() => {
                        this.props.update(this.state)
                    }}
                >保存</Button>
            </div>
        )
    }
}

export default GeniusInfo