/**
 * Created by Administrator on 2017/11/17.
 */

const mongoose = require('mongoose')

const DB_URL = 'mongodb://localhost:27017/imooc-chat'
mongoose.connect(DB_URL)

const models = {
    user: {
        // 用户名
        'user': {
            type: String,
            require: true
        },
        // 密码
        'pwd': {
            type: String,
            require: true
        },
        // 类别
        'type': {
            type: String,
            require: true
        },
        // 头像
        'avatar': {
            type: String
        },
        // 个人简介或职位简介
        'desc': {
            type: String
        },
        // 职位名
        'title': {
            type: String
        },
        // 如果身份是boss，公司名
        'company': {
            type: String
        },
        // 如果身份是boss，薪水数额
        'money': {
            type: String
        }
    },
    chat: {
        'chatid': {
            type: String,
            require: true
        },
        'read': {
            type: Boolean,
            default: false
        },
        'from': {
            type: String,
            require: true
        },
        'to': {
            type: String,
            require: true
        },
        'content': {
            type: String,
            require: true,
            default: ''
        },
        'create_time': {
            type: Number,
            default: new Date().getTime()
        }
    }
}

for (let m in models) {
    mongoose.model(m, new mongoose.Schema(models[m]))
}

module.exports = {
    getModel: function (name) {
        return mongoose.model(name)
    }
}