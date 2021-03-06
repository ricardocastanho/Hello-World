import { gql } from 'apollo-server'

export default gql`
  extend type Query {
    loadUsers: [User!]
  }

  type User {
    id: String
    firstName: String
    lastName: String
    email: String
    createdAt: String
    updatedAt: String
    deletedAt: String
  }
`
