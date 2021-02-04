import gql from 'graphql-tag'

export const allUsers = gql`
  query allUsers {
    allUsers {
      username
      email
    }
  }
`
