import React from 'react';
import { Button } from 'antd';
import useAuth from './context/auth'

 const Dashboard = () => {
    const {logout} = useAuth();
      return (
        <>
    <div>Dashboard</div>
    <Button onClick={logout}>Logout</Button>
    </>
  )
}




export default Dashboard