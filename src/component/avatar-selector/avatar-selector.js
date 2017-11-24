/**
 * Created by Administrator on 2017/11/19.
 */
import React from 'react'
import {Grid, List} from 'antd-mobile'
import PropTypes from 'prop-types'

class AvatarSelector extends React.Component {
    static propTypes = {
        selectAvatar: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const avatarList = Array.from({length: 50}, (v, i) => i + 1)
            .map(v => ({
                icon: require(`../img/${v}.jpg`),
                text: v
            }))

        const gridHeader = this.state.text ?
            (<div>
                <span>已选择头像</span>
                <img src={this.state.icon} style={{width: 20}} alt=''/>
            </div>) : (
                <div>请选择头像</div>
            )

        return (
            <div>
                <List renderHeader={() =>
                    gridHeader
                }>
                    <Grid
                        data={avatarList}
                        columnNum={5}
                        onClick={(elm) => {
                            this.setState(elm)
                            this.props.selectAvatar(elm.text)
                        }}
                    />
                </List>
            </div>
        )
    }
}

export default AvatarSelector