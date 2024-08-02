import React, { useState } from 'react';
import { Alert, Button, Card, Form, Input, Spin, Typography, message } from 'antd';
import './App.css';
import { useAuth } from './context/auth';
import { Link } from 'react-router-dom';

const Signup = () => {
  const { login } = useAuth();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const registerUser = async (values) => {
    if (values.password !== values.passwordConfirm) {
      return setError("Passwords do not match");
    }

    try {
      setError(null);
      setLoading(true);

      const res = await fetch("http://localhost:3000/api/auth/signup", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const data = await res.json();
      if (res.status === 201) {
        message.success(data.message);
        login(data.token, data.user);
      } else if (res.status === 400) {
        setError(data.message);
      } else {
        message.error("Registration failed");
      }
    } catch (error) {
      message.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className='form-container'>
      <Typography.Title level={3} strong className='title'>
        Sign up
      </Typography.Title>
      <Typography.Text type='secondary' strong className='slogan'>
        Join for exclusive properties
      </Typography.Text>
      
      <Form layout="vertical" onFinish={registerUser} autoComplete="off">
        <Form.Item label="Email" name="email" rules={[
          {
            required: true,
            message: 'Please enter your email',
          },
          {
            type: 'email',
            message: 'Input is not valid',
          }
        ]}>
          <Input placeholder='Enter your email' />
        </Form.Item>

        <Form.Item label="Password" name="password" rules={[
          {
            required: true,
            message: 'Please enter your password',
          }
        ]}>
          <Input.Password size='large' placeholder='Enter your password' />
        </Form.Item>

        <Form.Item label="Confirm Password" name="passwordConfirm" rules={[
          {
            required: true,
            message: 'Please confirm your password',
          }
        ]}>
          <Input.Password size='large' placeholder='Re-enter your password' />
        </Form.Item>

        {error && (
          <Alert description={error} type='error' showIcon closable className='alert' />
        )}

        <Form.Item>
          <Button type='primary' htmlType='submit' size='large' className='btn' disabled={loading}>
            {loading ? <Spin /> : "Create an account"}
          </Button>
        </Form.Item>

        <Form.Item>
          <Link to="/login">
            <Button size="large" className='btn'>
              Sign in
            </Button>
          </Link>
        </Form.Item>
      </Form>

      <div className='image-container'>
        <img src={"/pngtree-cashier-clipart-cartoon-female-cashier-standing-at-the-register-vector-png-image_11074023.png"} className='reg-image' alt='Signup Illustration' />
      </div>
    </Card>
  );
};

export default Signup;
