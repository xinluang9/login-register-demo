import Mock from 'mockjs';

// 设置请求延迟
Mock.setup({
    timeout: '300',
})

// 模拟登录接口
Mock.mock('/api/login', 'post', (options) => {
    const { username, password } = JSON.parse(options.body)
    if(username === 'admin' && password === '111111') {
        return {
            code: 200,
            success: true,
            token: 'fake-token'
        }
    }
    return {
        code: 200,
        success: false,
        message: '用户名或密码错误'
    }
})

// 模拟注册接口
Mock.mock('/api/register', 'post', (options) => {
    const { username } = JSON.parse(options.body)
    // 模拟用户名已存在
    if(username === 'admin') {
        return {
            success: false,
            message: '用户名已存在'
        }
    }else {
        return {
            success: true,
            message: `用户${username}注册成功`
        }
    }
})