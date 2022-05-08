const {gql} = require("apollo-server-express");
const typeDefs = gql`

    type Color{
        _id: ID!
        color_family: String!
        color_name: String!
        hexcode: String!
    }

    # Queries
    type Query{
        getColors: [Color!]!
        getColorByID(id: ID): Color
        getRandomColor: [Color]
    }
   


`;
module.exports = {typeDefs}