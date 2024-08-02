import React from 'react';
import{ Button, Card,Flex,Form,Input,Typography} from 'antd'
import './App.css';



const Register=()=> {

  
  const handleRegister=(values)=>{
    console.log(values)
  }
    
  return (

      <Card className='form-container'>Register
        <Flex vertical gap={1}>
          {/* {form} */}
        </Flex>
        <Flex>
          <Typography.Title level={3} strong className='title'>
           Create an account
          </Typography.Title>
          <Typography.Text type='secondary' strong className='slogan'>Join for exclusive Properties</Typography.Text>
        
          <Form layout="Vertical" 
          onFinish={handleRegister}
          autoComplete="off">

          </Form>
          <Form.Item label="Full Name" name="name" rules={
            [{
              required:true,
              message:'pleaase enter your full name'
            }]}>
             <Input placeholder='enter your fulll name' />


          </Form.Item>
          <Form.Item label="Email" name="email" rules={
            [{
              required:true,
              message:'pleaase enter your emailid'
            },{type:'email',
            message:'inputis not valid'

            }]}>
             <Input placeholder='enter your emailid' />


          </Form.Item>
          <Form.Item label="Password" name="passwordConfirm" rules={
            [{
              required:true,
              message:'please enter your confirmed password'
            }]}>
             <Input.Password size='large' placeholder='Re-enter your password' />


          </Form.Item>
          <Form.Item>
            <Button type='primary' htmlType='submit' size='large' className='btn'>

            </Button>
            <Link to="/login"></Link>
            <Button size="large" className='btn'>
             Sign in </Button>
          </Form.Item>

          <Flex>
            <img src={"./public/pngtree-cashier-clipart-cartoon-female-cashier-standing-at-the-register-vector-png-image_11074023.png"} className='reg-image'>
              </img>
          </Flex>
          </Flex>
      </Card>
  )
}

export default Register