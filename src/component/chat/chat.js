/**
 * Created by Administrator on 2017/11/24.
 */
import React from 'react'
import {List, InputItem, NavBar, Icon, Grid} from 'antd-mobile'
import {connect} from 'react-redux'
import {getMsgList, sendMsg, recvMsg, readMsg} from '../../redux/chat.redux'
import {getChatId} from '../../util'
import QueueAnim from 'rc-queue-anim'

@connect(
    state => state,
    {getMsgList, sendMsg, recvMsg, readMsg}
)
class Chat extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
            msg: []
        }
    }

    componentDidMount() {
        if (!this.props.chat.chatmsg.length) {
            this.props.getMsgList()
            this.props.recvMsg()
        }
        this.fixCarousel()
    }

    componentWillUnmount() {
        const to = this.props.match.params.user
        this.props.readMsg(to)
    }

    fixCarousel() {
        setTimeout(function () {
            window.dispatchEvent(new Event('resize'))
        }, 0)
    }

    handleSubmit() {
        // socket.emit('sendmsg', {text: this.state.text})
        const from = this.props.user._id
        const to = this.props.match.params.user
        const msg = this.state.text
        this.props.sendMsg({from, to, msg})
        this.setState({
            text: '',
            showEmoji: false
        })
    }

    render() {
        const emoji = ['😍', '😏', '🤷', '😂', '😍', '🔥', '🤔', '😊', '😘', '🙄', '😐', '😆', '😣', '🤗 ', '😍', '😏', '🤷', '😂', '😍', '🔥', '🤔', '😊', '😘', '🙄', '😐', '😆', '😣', '🤗 ']
            .filter(v => v)
            .map(v => ({text: v}))
        const userid = this.props.match.params.user
        const Item = List.Item
        const users = this.props.chat.users
        const chatid = getChatId(userid, this.props.user._id)
        const chatmsgs = this.props.chat.chatmsg.filter(v => v.chatid === chatid)
        if (!users[userid]) {
            return null;
        }
        return (
            <div id='chat-page'>
                <NavBar
                    icon={<Icon type="left"/>}
                    mode='dark'
                    onLeftClick={() => {
                        this.props.history.goBack()
                    }}
                >{users[userid].name}</NavBar>
                <QueueAnim delay={100}>
                    {chatmsgs.map(v => {
                        const avatar = require(`../img/${users[v.from].avatar}.jpg`)
                        return v.from === userid ? (
                                <List key={v._id}>
                                    <Item
                                        thumb={avatar}
                                    >{v.content}</Item>
                                </List>
                            ) : (
                                <List key={v._id}>
                                    <Item
                                        extra={<img src={avatar} alt=''/>}
                                        className='chat-me'
                                    >{v.content}</Item>
                                </List>
                            )
                    })}
                </QueueAnim>
                <div className="stick-footer">
                    <List>
                        <InputItem
                            placeholder='请输入'
                            value={this.state.text}
                            onChange={v => {
                                this.setState({
                                    text: v
                                })
                            }}
                            extra={
                                <div>
                                    <span
                                        style={{marginRight: 15}}
                                        onClick={() => {
                                            this.setState({
                                                showEmoji: !this.state.showEmoji
                                            })
                                            this.fixCarousel()
                                        }}
                                    >😊</span>
                                    <span onClick={() => this.handleSubmit()}>发送</span>
                                </div>
                            }
                        ></InputItem>
                    </List>
                    {this.state.showEmoji ?
                        <Grid
                            columnNum={6}
                            data={emoji}
                            isCarousel={true}
                            carouselMaxRow={2}
                            onClick={el => {
                                this.setState({
                                    text: this.state.text + el.text
                                })
                            }}
                        /> : null}
                </div>
            </div>
        )
    }
}

export default Chat