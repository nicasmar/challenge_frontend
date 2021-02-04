import React, { useState, useRef } from 'react'
import { useMutation } from '@apollo/react-hooks'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import {
  Container,
  LoginContainer,
  Input,
  Title,
  Button,
  Text,
} from './styles'

import { REGISTER } from './graphql'

const Register = () => {
  const history = useHistory()
  const [username, setUsername] = useState('')
  const [pass, setPass] = useState('')
  const [email, setEmail] = useState('')
  const [register] = useMutation(REGISTER, {
    variables: {
      input: {
        username,
        email,
        password: pass,
      }
    },
    onCompleted: ({ register: { token, user: { id } } }) => {
      localStorage.setItem('token', token)
      localStorage.setItem('userId', id)
      history.push('/')
      window.location.reload()
    },
    onError: error => console.log(error)
})
const handleSubmit = async () => {
  register()
}

  return (
    <Container>
      <LoginContainer>
        <Title>Register</Title>
        <Text>Kindly fill in your login details to proceed</Text>
        <Input
          type="text"
          name="username"
          placeholder="Username"
          onChange={e => setUsername(e.target.value)}
          value={username}
        />
        <Input
          type="text"
          name="email"
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
          value={email}
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          onChange={e => setPass(e.target.value)}
          value={pass}
        />
        <Button onClick={handleSubmit}>Register</Button>
        <br></br>
        <Text>Already a Member?&nbsp;
            <Link to="/login">Log In</Link>
        </Text>
        <Text>
        </Text>
      </LoginContainer>
    </Container>
  )
}

export default Register
