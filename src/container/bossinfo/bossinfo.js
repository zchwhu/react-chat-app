/**
 * Created by Administrator on 2017/11/19.
 */
import React from 'react'
import {NavBar, InputItem, TextareaItem, Button} from 'antd-mobile'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import AvatarSelector from '../../component/avatar-selector/avatar-selector'
import {update} from '../../redux/user.redux'

@connect(
    state => state.user,
    {update}
)
class BossInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            company: '',
            money: '',
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
                >BOSS完善信息页面</NavBar>
                <AvatarSelector
                    selectAvatar={this.selectAvatar}
                />
                <InputItem
                    onChange={(v) => this.handleChange('title', v)}>
                    招聘职位
                </InputItem>
                <InputItem
                    onChange={(v) => this.handleChange('company', v)}>
                    公司名称
                </InputItem>
                <InputItem
                    onChange={(v) => this.handleChange('money', v)}>
                    职位薪资
                </InputItem>
                <TextareaItem
                    title="职位要求"
                    autoHeight
                    rows={3}
                    onChange={(v) => this.handleChange('desc', v)}>
                    职位要求
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

export default BossInfo