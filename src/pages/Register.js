import React from 'react';
import { Card, message } from 'antd';
import RegisterForm from '../components/RegisterForm';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = async (values) => {
    try {
        const res = await axios.post('/api/register', values)
        console.log('res', res);
        const { data } = res       
        if(data.success === true) {
            navigate('/login');
            message.success('注册成功')
        }else {
            message.error(data.message)
        }
    } catch (error) {
        console.error('注册请求失败:', error)
    }
  };

  const jumpLoginFn = () => {
    navigate('/login');
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Card title="注册" className="w-96">
        <RegisterForm onRegister={handleRegister} jumpLogin={jumpLoginFn} />
      </Card>
    </div>
  );
};

export default Register;
