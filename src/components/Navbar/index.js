import React from 'react'
import { Container, NavLink, Title, LoginContainer, LeftContainer } from './styles'
import { useHistory } from 'react-router-dom'

const Navbar = () => {
  
  const history = useHistory()
    
  return (
  <Container>
    {localStorage.getItem('token') ? 
    <> 
      <LeftContainer>
        <Title>The WHO</Title>
      </LeftContainer>
      <LoginContainer>
        <NavLink to="/login" onClick={() => {
          localStorage.removeItem('token')
          localStorage.removeItem('userId')
          history.push('/login')
          window.location.reload()
          }}>Sign Out</NavLink>
      </LoginContainer>
    </>
    :
    <>
      <Title>The WHO</Title>
      <LoginContainer>
        <NavLink to="/login">Log In</NavLink>
      </LoginContainer>
    </>
    }
  </Container>
)}


export default Navbar
