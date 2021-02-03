import React, { useState } from 'react'
import { Container, Row, Button, Search } from './styles'
import { useHistory } from 'react-router-dom'


const Home = () => {
    const history = useHistory()
    
    const[item, setItem] = useState()
    console.log(item)
    
    return (
        <Container>
            {localStorage.getItem('token') ?
            <>
                <h1>You are signed in!</h1>
            </>
            :
            <>
                <h1>You are not signed in</h1>
            </>
            }
        </Container>
    )}


export default Home
