import React, { useState } from 'react'
import { Button, Form, Input } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userAction } from '../redux/action/userAction';

export default function LoginPage() {
  let navigate = useNavigate()
  let dispatch = useDispatch()

  // const [userInfo, setUserInfo] = useState()

  const {userInfo} = useSelector((state)=> state.userReducer)

  const onFinish = (values) => {
    login(values)
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const login = (data) => {
   axios({
    url: "http://localhost:8080/user/login",
    method: "POST",
    data: data
   }).then((res) => {
          console.log(res.data);
          let {token} = res.data
          let dataJSON = JSON.stringify(token)
          localStorage.setItem("USER_LOGIN_TOKEN", dataJSON)
          dispatch(userAction(token))
          navigate("/")
         })
         .catch((err) => {
          console.log(err);
         });
  }
  return (
    <div>
        {/* <div>
            <label htmlFor="">UserName</label>
            <input type="text" name="" id="" />
        </div>
        <div>
            <label htmlFor="">Password</label>
            <input type="text" name="" id="" />
        </div>
        <button>Submit</button> */}
        <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Username"
      name="user_name"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="pass_word"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
    </div>
  )
}
