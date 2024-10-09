import React from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';


export default function Home() {
  const navigate = useNavigate();

  return (
      <div>
        <Button onClick={() => {navigate('/login')}}>退出登录</Button>
        <div className='flex justify-center items-center h-[60vh] text-[#999] text-[50px]'>欢迎进入主页面!</div>
    </div>
  )
}
