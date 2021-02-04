import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { Container, Table } from './styles'
import { useHistory } from 'react-router-dom'
import { allUsers } from './graphql'


const Home = () => {
    const history = useHistory()
    const { data, error, loading } = useQuery(allUsers)
    if (error) {
        history.push('/')
    }
    
    return (
        <Container>
            {localStorage.getItem('token') ?
            <>
                <h1>You are signed in!</h1>
                <h3>Table of People Vaccinated</h3>
                <Table>
                    <thead>
                        <tr>
                        <th>username</th>
                        <th>email</th>
                        <th>city</th>
                        <th>vaccine</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? 'loading...' : data.allUsers.map(user => (
                            <>
                                <tr>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>{user.city}</td>
                                    <td>{user.vaccine}</td>
                                </tr>
                            </>
                        ))}
                    </tbody>
                </Table>
            </>
            :
            <>
                <h1>You are not signed in</h1>
            </>
            }
        </Container>
    )}


export default Home
