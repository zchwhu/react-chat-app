/**
 * Created by Administrator on 2017/11/21.
 */
import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import {NavBar} from 'antd-mobile'
import NavLinkBar from '../../component/navlinkbar/navlinkbar'
import Boss from '../boss/boss'
import Genius from '../genius/genius'
import User from '../user/user'

function Msg() {
    return <h2>Msg</h2>
}

@connect(
    state => state
)
class Dashboard extends React.Component {
    render() {
        const {pathname} = this.props.location
        const user = this.props.user
        const navList = [
            {
                path: '/boss',
                text: '牛人',
                icon: 'boss',
                title: '牛人列表',
                component: Boss,
                hide: user.type === 'genius'
            },
            {
                path: '/genius',
                text: 'boss',
                icon: 'job',
                title: 'BOSS列表',
                component: Genius,
                hide: user.type === 'boss'
            },
            {
                path: '/msg',
                text: '消息',
                icon: 'msg',
                title: '消息列表',
                component: Msg
            },
            {
                path: '/me',
                text: '我的',
                icon: 'user',
                title: '个人中心',
                component: User,
            }
        ]
        return (
            <div>
                <NavBar mode="dark" className="fixed-header">
                    {navList.find(v => v.path === pathname).title}
                </NavBar>
                <div style={{marginTop: 45, position: 'relative', zIndex: 10}}>
                    <Switch>
                        {navList.map(v => (
                            <Route key={v.path} path={v.path} component={v.component}/>
                        ))}
                    </Switch>
                </div>
                <NavLinkBar data={navList}/>
            </div>
        )
    }
}

export default Dashboard