/**
 * Created by Administrator on 2017/11/19.
 */
export function getRedirectPath({type, avatar}) {
    // 根据用户信息，返回跳转地址
    let url = (type === 'boss') ? '/boss' : '/genius'
    if (!avatar) {
        url += 'info'
    }
    return url
}