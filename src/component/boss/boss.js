/**
 * Created by Administrator on 2017/11/22.
 */
import React from 'react'
import {connect} from 'react-redux'
import {getUserList} from '../../redux/chatuser.redux'
import UserCard from '../usercard/usercard'

@connect(
    state => state.chatuser,
    {getUserList}
)
class Boss extends React.Component {
    componentDidMount() {
        this.props.getUserList('genius')
    }

    render() {
        return (
            <UserCard userList={this.props.userList}/>
        )
    }
}

export default Boss