// * Creating an API / GraphQL Schema

// this is the ROOT Query:
type Query {
    book(id: ID!): Book
    author(id: ID!): Author
}

// this is the ROOT Mutation:
type Mutation {
    addBook(title: String!, author: String!): Book
}

type Book {
    id: ID!
    title: String!
    author: Author!
}

type Author {
    id: ID!
    name: String!
    books: [Book]
}

// Example Query:
query {
    book(id: "1") {
        title
        author {
            name
        }
    }
}

// Example Mutation:
mutation {
    addBook(title: "New Book", author: "Author Name") {
        id
        title
    }
}