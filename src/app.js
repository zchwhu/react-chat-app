import React from 'react'
import {Route, Switch} from 'react-router-dom'

import Login from './container/login/login'
import Register from './container/register/register'
import BossInfo from './container/bossinfo/bossinfo'
import GeniusInfo from './container/geniusinfo/geniusinfo'

import AuthRouter from './component/authroute/authroute'
import Dashboard from './component/dashboard/dashboard'
import Chat from './component/chat/chat'

class App extends React.Component {
  render() {
    return (
        <div>
            <AuthRouter></AuthRouter>
            <Switch>
                <Route path='/bossinfo' component={BossInfo}/>
                <Route path='/geniusinfo' component={GeniusInfo}/>
                <Route path='/login' component={Login}/>
                <Route path='/register' component={Register}/>
                <Route path='/chat/:user' component={Chat}/>
                <Route component={Dashboard}/>
            </Switch>
        </div>
    )
  }
}

export default App;
