import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Card, message } from 'antd';
import LoginForm from '../components/LoginForm';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = async (values) => {
    try {
        const res = await axios.post('/api/login', values)
        console.log(res);
        const { data } = res
        if(data.success === true) {
            navigate('/home'); // 登录成功跳转
            message.success('登录成功')
        }else {
            message.error(data.message)
        }
    } catch (error) {
        console.error('登录请求失败:', error);
        message.error('登录请求失败，请稍后重试');
    }
   
  };

  const handleRegister = () => {
    navigate('/register');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Card title="登录" className="w-96">
        <LoginForm onLogin={handleLogin} onRegister={handleRegister} />
      </Card>
    </div>
  );
};

export default Login;
