import React, { useState } from 'react';
import { Button, Divider, Form, Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import testKey from '../utils/index'

const RegisterForm = ({ onRegister, jumpLogin }) => {
  const [ regForm ] = Form.useForm()
  const [ valueRate, setValueRate ] = useState('')
  const onFinish = (values) => {
    console.log('注册信息: ', values);
    onRegister(values);
  };

  return (
    <Form name="register" form={regForm} onFinish={onFinish} className="register-form">
      <Form.Item
        name="username"
        rules={[{ required: true, message: '请输入用户名!' }]}
      >
        <Input prefix={<UserOutlined />} placeholder="用户名" />
      </Form.Item>

      <Form.Item
        name="password"
        extra={valueRate && <div className=' mt-2 text-[#3964dc]'>{valueRate}</div>}
        rules={[
          { required: true, message: '请输入密码!' }
        ]}
        hasFeedback
      >
        <Input.Password prefix={<LockOutlined />} onChange={(e) => {
          const str = testKey(e)
          setValueRate(str)
        }} placeholder="密码" />
      </Form.Item>

      <Form.Item
        name="confirm"
        dependencies={['password']}
        hasFeedback
        rules={[
          { required: true, message: '请确认密码!' },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('两次输入的密码不匹配!'));
            },
          }),
        ]}
      >
        <Input.Password prefix={<LockOutlined />} placeholder="确认密码" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="register-form-button">
          注册
        </Button>
        <a className='text-[#999] ml-3' onClick={jumpLogin}>去登录</a>
      </Form.Item>
    </Form>
  );
};

export default RegisterForm;
